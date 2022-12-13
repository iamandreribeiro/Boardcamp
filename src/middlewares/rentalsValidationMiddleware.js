import { postRentalSchema } from "../models/rentalModel.js";

export async function validateRental(req, res, next) {
  const { customerId, gameId, daysRented } = req.body;

  const validation = postRentalSchema.validate({
    customerId,
    gameId,
    daysRented,
  });

  if(validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(400).send(errors);
  }
}
