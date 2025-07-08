import { Pool } from 'pg';

export const pool = new Pool({
    user: "qkpostgres",
    host: "localhost",
    database: "auth",
    password: "1234",
    port: "5432",
});