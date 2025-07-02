import { pool } from "../clients/authClient";
import { UserData } from "../models/UserData";

const queries = {
    getByToken: "SELECT * FROM cookie WHERE token = $1 AND value ->> 'expiry' > $2",
    checkIfIsExist: "SELECT id FROM cookie WHERE token = $1 AND value ->> 'expiry' > $2",
    insertNewRow: "INSERT INTO cookie(token, value) VALUES($1, $2)",
    isLogined: "SELECT * FROM cookie WHERE token = $1 AND value ->> 'expiry' > $2 AND value ->> 'userId' IS NOT NULL",
    updateUserId: "UPDATE cookie SET value = value || $1 where token = $2"
};


export async function tokenIsExist(token: string, expiry: number) {
    try {
        var result = await pool.query(queries.checkIfIsExist, [token, expiry]);
        return result.rows.length == 0;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function getCredentials(token, expiry) {
    try {
        var result = await pool.query(queries.getByToken, [token, expiry]);
        return result.rows;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function setCredentials(token: string, value: { expiry: number }) {
    try {
        var result = await pool.query(queries.insertNewRow, [token, value]);
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function isLogined(token: string, expiry: number) {
    try {
        var result = await pool.query(queries.isLogined, [token, expiry]);
        return result.rows;
    } catch (err) {
        console.log(err);
        return false;
    }
}


export async function updateCredentials(token: string, userData: UserData) {
    try {
        var result = await pool.query(queries.updateUserId, [userData, token]);
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}