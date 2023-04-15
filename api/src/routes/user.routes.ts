import {
  create,
  deleteById,
  getAll,
  getOneById,
  updateById,
} from "../controllers/user.controller";
import { Router } from "express";

const router: Router = Router();
//Every route here should ask for admin privileges
router.get("/", getAll);
router.get("/:id", getOneById);
router.post("/", create);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

export { router as usersRouter };