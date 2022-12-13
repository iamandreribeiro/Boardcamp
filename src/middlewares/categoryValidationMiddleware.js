import { postCategorySchema } from "../models/categoryModel.js";

export async function validateCategory(req, res, next) {
  const { name } = req.body;

  const validation = postCategorySchema.validate({name});

  if(validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    return res.status(400).send(errors);
  }

  next();
}
