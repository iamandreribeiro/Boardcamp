import { connectionDB } from "../database/db.js";

export async function postGame(req, res) {
  const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

  try {
    await connectionDB.query(
      `INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1, $2, $3, $4, $5);`,
      [name, image, stockTotal, categoryId, pricePerDay]
    );

    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function getAllGames(req, res) {
  try {
    const { rows } = await connectionDB.query(`SELECT * FROM games;`);
    return res.send(rows);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
