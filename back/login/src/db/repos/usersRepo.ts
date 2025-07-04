import { User } from "../models/User";
import { pool } from "../clients/usersClient";


const queries = {
    create: "INSERT INTO users(email, data) VALUES($1, $2) RETURNING id",
    updateDataByEmail: "UPDATE users SET data = data || $1 WHERE email = $2",
    comparePincode: "UPDATE users SET data = data - 'pincode' WHERE email = $1 AND data ->> 'pincode' = $2 RETURNING id"
}


export async function createUser(user: User) {
    try {
        var result = await pool.query(queries.create, [user.email, user.data]);
        return result.rows;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function setPincodeByEmail(email: string, pincode: { pincode: number }) {
    try {
        var result = await pool.query(queries.updateDataByEmail, [pincode, email]);
        return result;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function comparePincode(email: string, pincode: number) {
    try {
        var result = await pool.query(queries.comparePincode, [email, pincode]);
        return result.rows;
    } catch (err) {
        console.log(err);
        return false;
    }
}