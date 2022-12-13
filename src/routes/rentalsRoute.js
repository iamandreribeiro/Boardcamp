import { Router } from "express";
import { validateRental } from "../middlewares/rentalsValidationMiddleware.js";
import {
  postRental,
  getAllRentals,
  closeRental,
  deleteRental,
} from "../controllers/rentalsController.js";

const router = Router();

router.post("/rentals", validateRental, postRental);
router.get("/rentals", getAllRentals);
router.post("/rentals/:id/return", validateRental, closeRental);
router.delete("/rentals/:id", validateRental, deleteRental);

export default router;
