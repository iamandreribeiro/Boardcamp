import { Router } from "express";
import { validateCustomer } from "../middlewares/customerValidationMiddleware.js";
import {
  postCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
} from "../controllers/customerController.js";

const router = Router();

router.post("/customers", validateCustomer, postCustomer);
router.get("/customers", getAllCustomers);
router.get("/customers/:id", validateCustomer, getCustomerById);
router.put("/customers/:id", validateCustomer, updateCustomerById);

export default router;
