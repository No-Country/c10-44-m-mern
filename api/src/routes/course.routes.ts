import {
   create,
   deleteById,
   getAll,
   getOneById,
   updateById,
   getModulesFromCourse,
   getOneModuleFromCourse,
} from "../controllers/course.controller";
import { Router } from "express";

const router: Router = Router();

router.get("/", getAll);
router.get("/:id", getOneById);
router.post("/", create);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

router.get("/:courseId/modules", getModulesFromCourse)
router.get("/:courseId/modules/:moduleId", getOneModuleFromCourse)

export { router as courseRouter };
