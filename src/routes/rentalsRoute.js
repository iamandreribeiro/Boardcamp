import { Router } from "express";
import { validateRental } from "../middlewares/rentalsValidationMiddleware.js";
import {
  postRental,
  getAllRentals,
  getRentalById,
  deleteRental,
} from "../controllers/rentalsController";

const router = Router();

router.post("/rentals", validateRental, postRental);
router.get("/rentals", getAllRentals);
router.post("/rentals/:id/return", validateRental, getRentalById);
router.delete("/rentals/:id", validateRental, deleteRental);

export default router;
