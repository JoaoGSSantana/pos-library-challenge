import dotenv from "dotenv";
import express, { Request, Response } from "express";

import { BookController } from "./interfaces/controllers/BookController";

dotenv.config();

const app = express();

// Middleware para parsing de JSON
app.use(express.json());

app.post("/books", BookController.create);
app.get("/books", BookController.getAll);
app.get("/books/:id", BookController.getById);
app.put("/books/:id", BookController.update);
app.delete("/books/:id", BookController.delete);

app.get("/", (req: Request, res: Response) => {
  res.send("API está funcionando!");
});

export default app;
