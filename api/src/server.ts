import express, { Express } from "express";
import * as dotenv from "dotenv";
dotenv.config();

//instance of express
const app: Express = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//TODO: routes

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
