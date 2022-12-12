import { Router } from "express";
import { validateGame } from "../middlewares/gamesValidationMiddleware.js";
import { postGame, getAllGames } from "../controllers/gamesController.js";

const router = Router();

router.post("/games", validateGame, postGame);
router.get("/games", getAllGames);

export default router;
