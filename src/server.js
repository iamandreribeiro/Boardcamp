import express from "express";
import cors from "cors";
import categoriesRoute from "./routes/categoriesRoute.js";
import gamesRoute from "./routes/gamesRoute.js";
import customersRoute from "./routes/customersRoute.js";
import rentalsRoute from "./routes/rentalsRoute.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use(cors());

app.use(categoriesRoute);
app.use(gamesRoute);
app.use(customersRoute);
app.use(rentalsRoute);

app.listen(process.env.PORT, () => console.log(`Server running in PORT:${process.env.PORT}`));
