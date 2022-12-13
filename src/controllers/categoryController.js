import { connectionDB } from "../database/db.js";

export async function postCategory(req, res) {
  const { name } = req.body;

  try {
    await connectionDB.query(`INSERT INTO categories (name) VALUES ($1)`, [
      name,
    ]);
    return res.sendStatus(201);
  } catch (error) {
    return res.send(error.message);
  }
}

export async function getCategory(req, res) {
  try {
    const { rows } = await connectionDB.query(`SELECT * FROM categories;`);
    return res.send(rows);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
