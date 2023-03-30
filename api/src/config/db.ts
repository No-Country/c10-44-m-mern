import mongoose from "mongoose";

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

export const db = mongoose.createConnection(`mongo://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

export default db;