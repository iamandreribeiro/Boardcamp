import { connectionDB } from "../database/db.js";

export async function postRental(req, res) {
  const { customerId, gameId, daysRented } = req.body;

  try {
    await connectionDB.query(
      "INSERT INTO rentals (customerId, gameId, daysRented) VALUES ($1, $2, $3);",
      [customerId, gameId, daysRented]
    );
    return res.send(rows);
  } catch (error) {
    return res.send(error.message);
  }
}

export async function getAllRentals(req, res) {
  try {
    const { rows } = await connectionDB.query("SELECT * FROM rentals;");
    return res.send(rows);
  } catch (error) {
    return res.send(error.message);
  }
}

export async function getRentalById(req, res) {
  const { id } = req.params;

  try {
    const { rows } = await connectionDB.query(
      "SELECT * FROM rentals WHERE id=$1",
      [id]
    );
    if (rows.length === 0) {
      return res.status(404).send("Não existe nenhuma aluguel com este ID");
    }
    return res.send(rows);
  } catch (error) {
    return res.send(error.message);
  }
}

export async function deleteRental(req, res) {
  const { id } = req.params;

  try {
    await connectionDB.query("DELECT FROM rentals WHERE id=$1", [id]);
  } catch (error) {
    return res.send(error.message);
  }
}
