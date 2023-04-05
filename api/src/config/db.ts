import mongoose from "mongoose";

const { CONECTION } = process.env;

export const db = mongoose.createConnection(`mongo://${CONECTION}`);

export default db;
