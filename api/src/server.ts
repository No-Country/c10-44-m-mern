import express, { Express } from "express";
import mongoose from "mongoose"
import * as dotenv from "dotenv";
import { exit } from "process";
dotenv.config();
import { classRouter} from "./routes/class.routes"
import { modulesRouter} from "./routes/module.routes"
import { usersRouter } from "./routes/user.routes";
import { swaggerDocs } from "./utils/docs/swagger";

// Mongoose initialization
try {
  if (process.env.MONGO_URI === undefined) {
    throw new Error("Set the MONGO_URI environment variable");
  }

  mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
} catch (error) {
  console.error("MongoDB connection error");
  
  if (error instanceof Error) {
    console.error(error.message);
  }
  
  exit(1);
}

//instance of express
const app: Express = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/classes", classRouter)
app.use("/api/modules", modulesRouter)
app.use("/api/users", usersRouter)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
  swaggerDocs(app, PORT)
});
