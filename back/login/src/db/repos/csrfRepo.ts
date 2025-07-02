import { pool } from "../clients/authClient";


const queries = {
    setCsrf: "INSERT INTO csrf(token, csrf, expiry) VALUES($1, $2, $3)",
    checkIfExist: "SELECT csrf FROM csrf WHERE csrf = $1",
    isNotExpiried: "SELECT csrf from csrf where csrf = $1 and expiry > $2",
    updateCsrf: "UPDATE csrf SET csrf = $1, expiry = $2 WHERE token = $3",
    selectByToken: "SELECT csrf, expiry FROM csrf WHERE token = $1 AND expiry > $2",
};


export async function isNotExpiried(csrf: string, expiry: number) {
    try {
        var result = await pool.query(queries.isNotExpiried, [csrf, expiry]);
        return result.rows;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function csrfIsExist(csrf: string) {
    try {
        var result = await pool.query(queries.checkIfExist, [csrf]);
        return result.rows.length == 0;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function setCsrf(token: string, csrf: string, expiry: number) {
    try {
        var result = await pool.query(queries.setCsrf, [token, csrf, expiry]);
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function updateCsrf(token: string, csrf: string, expiry: number) {
    try {
        var result = await pool.query(queries.updateCsrf, [csrf, expiry, token]);
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}



export async function getCsrf(token: string, expiry: number) {
    try {
        var result = await pool.query(queries.selectByToken, [token, expiry]);
        return result.rows;
    } catch (err) {
        console.log(err);
        return false;
    }
}