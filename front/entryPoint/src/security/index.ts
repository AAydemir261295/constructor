import crypto from "crypto";
import { setCredentials, tokenIsExist } from "../db/cookie";
import { csrfIsExist, setCsrf, updateCsrf as updateStoredCsrf } from "../db/csrf";
import { time } from "console";


export async function initCookie(timeStamp) {
    let expiry = getExpiry(1, timeStamp);
    let token = getToken();
    let tokenNotExist = await tokenIsExist(token, Date.now());
    if (tokenNotExist) {
        let isSaved = await setCredentials(token, { expiry: expiry.getTime() });
        if (isSaved) {
            return { token: token, values: { expiry: expiry } };
        } else {
            return false;
        }
    } else {
        initCookie(timeStamp);
    }
}


export async function initCsrf(token, timeStamp) {
    let expiry = getExpiry(1, timeStamp);
    let csrf = getCsrf();
    let csrfNotExist = await csrfIsExist(csrf);
    if (csrfNotExist) {
        let isSaved = await setCsrf(token, csrf, expiry.getTime());
        if (isSaved) {
            return { csrf: csrf, expiry: expiry };
        } else {
            return false;
        }
    } else {
        initCsrf(token, timeStamp);
    }
}

export async function updateCsrf(token, timeStamp) {
    let expiry = getExpiry(1, timeStamp);
    let csrf = getCsrf();
    let isSaved = await updateStoredCsrf(token, csrf, expiry.getTime());
    if (isSaved) {
        return { csrf: csrf, expiry: expiry };
    } else {
        return false;
    }
}


function getExpiry(hours: number, timeStamp: number) {
    return new Date(timeStamp + hours * 60 * 60 * 1000);
}

function getCsrf() {
    return crypto.randomBytes(32).toString("hex");
}

function getToken() {
    return crypto.randomBytes(32).toString("hex");
}




