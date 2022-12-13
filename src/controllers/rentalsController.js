import dayjs from "dayjs";
import { connectionDB } from "../database/db.js";

export async function postRental(req, res) {
  const { customerId, gameId, daysRented, rentDate, originalPrice } =
    res.locals.rentalObject;

  try {
    await connectionDB.query(
      `INSERT INTO rentals ("customerId", "gameId", "daysRented", "rentDate", "originalPrice", "returnDate", "delayFee") VALUES ($1, $2, $3, $4, $5, $6, $7);`,
      [customerId, gameId, daysRented, rentDate, originalPrice, null, null]
    );
    return res.send(rows);
  } catch (error) {
    return res.send(error.message);
  }
}

export async function getAllRentals(req, res) {
  try {
    const { rows } = await connectionDB.query(`SELECT * FROM rentals;`);
    return res.send(rows);
  } catch (error) {
    return res.send(error.message);
  }
}

export async function closeRental(req, res) {
  const { id } = req.params;
  const currentDate = dayjs().format("YYYY-MM-DD");

  const rentedGame = await connectionDB.query(
    `SELECT * FROM rentals WHERE id=$1`,
    [id]
  );

  const diffTime = Math.abs(currentDate - rentedGame[0].dayRented);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let delayFee = 0;

  if (diffDays > rentedGame[0].dayRented) {
    delayFee = diffDays * rentedGame[0].originalPrice;
  }

  try {
    await connectionDB.query(
      `UPDATE rentals SET "returnDate"=$1 "delayFee"=$2 WHERE ID=$3;`,
      [currentDate, delayFee, id]
    );

    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function deleteRental(req, res) {
  const { id } = req.params;

  try {
    await connectionDB.query(`DELECT FROM rentals WHERE id=$1`, [id]);
  } catch (error) {
    return res.send(error.message);
  }
}
