import crypto from "crypto";
import { setCredentials, tokenIsExist } from "../db/cookie";
import { csrfIsExist, setCsrf, updateCsrf as updateStoredCsrf } from "../db/csrf";



export async function initCookie() {
    let expiry = getExpiry(1);
    let token = getToken();
    let tokenNotExist = await tokenIsExist(token, Date.now());
    if (tokenNotExist) {
        let isSaved = await setCredentials(token, { expiry: expiry });
        if (isSaved) {
            return { token: token, values: { expiry: expiry } };
        } else {
            return false;
        }
    } else {
        initCookie();
    }
}


export async function initCsrf(token) {
    let expiry = getExpiry(1);
    let csrf = getCsrf();
    let csrfNotExist = await csrfIsExist(csrf);
    if (csrfNotExist) {
        let isSaved = await setCsrf(token, csrf, expiry);
        if (isSaved) {
            return { csrf: csrf, expiry: expiry };
        } else {
            return false;
        }
    } else {
        initCsrf(token);
    }
}


export async function updateCsrf(token: string) {
    let expiry = getExpiry(1);
    let csrf = getCsrf();
    let isSaved = await updateStoredCsrf(token, csrf, expiry);
    if (isSaved) {
        return { csrf: csrf, expiry: expiry };
    } else {
        return false;
    }
}


function getExpiry(hours: number) {
    return Date.now() + hours * 60 * 60 * 1000;
}

function getCsrf() {
    return crypto.randomBytes(32).toString("hex");
}

function getToken() {
    return crypto.randomBytes(32).toString("hex");
}




