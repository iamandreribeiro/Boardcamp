import Joi from "joi";

export const postCustomerSchema = Joi.object({
  name: Joi.string().required().min(3),
  phone: Joi.string().required().min(10).max(11),
  cpf: Joi.string().required().min(11).max(11),
  birthday: Joi.date().required()
});
