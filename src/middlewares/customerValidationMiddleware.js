import { postCustomerSchema } from "../models/customerModel.js";

export async function validateCustomer(req, res, next) {
  const { name, phone, cpf, birthday } = req.body;

  const validation = postCustomerSchema.validate({
    name,
    phone,
    cpf,
    birthday,
  });

  if (validation.error) {
    const errors = validation.error.details((error) => error.message);
    res.status(400).send(errors);
  }

  next();
}
