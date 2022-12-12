import { Router } from "express";
import { validateCategory } from "../middlewares/categoryValidationMiddleware.js";
import {
  postCategory,
  getCategory,
} from "../controllers/categoryController.js";

const router = Router();

router.post("/categories", validateCategory, postCategory);
router.get("/categories", getCategory);

export default router;
