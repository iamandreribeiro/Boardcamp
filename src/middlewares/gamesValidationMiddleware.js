export async function validateGame(req, res, next) {
  const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

  const validation = postCustomerSchema.validate({
    name,
    image,
    stockTotal,
    categoryId,
    pricePerDay,
  });

  if (validation.error) {
    const errors = validation.error.details((error) => error.message);
    res.status(400).send(errors);
  }

  next();
}
