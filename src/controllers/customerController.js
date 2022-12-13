import { connectionDB } from "../database/db.js";

export async function postCustomer(req, res) {
  const { name, phone, cpf, birthday } = req.body;

  try {
    await connectionDB.query(
      "INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4);",
      [name, phone, cpf, birthday]
    );

    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function getAllCustomers(req, res) {
  try {
    const { rows } = await connectionDB.query("SELECT * FROM customers;");
    return res.send(rows);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function getCustomerById(req, res) {
  const { id } = req.params;
  try {
    const { rows } = await connectionDB.query(
      "SELECT * FROM customers WHERE id=$1;",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).send("Não existe nenhuma cliente com este ID");
    }
    return res.send(rows);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function updateCustomerById(req, res) {
  const { name, phone, cpf, birthday } = req.body;
  const {id} = req.params;

  try {
    await connectionDB.query(
      "UPDATE customers SET name=$1, phone=$2, cpf=$3, birthday=$4 WHERE id=$5;",
      [name, phone, cpf, birthday, id]
    );

    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
