import {
  create,
  deleteById,
  getAll,
  getOneById,
  updateById,
} from "../controllers/user.controller";
import { Router } from "express";

const router: Router = Router();

router.get("/", getAll);
router.get("/:id", getOneById);
// Already handled in Auth controller
// router.post("/", create);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

export { router as usersRouter };
