import dotenv from "dotenv";
import express, { Request, Response } from "express";

import { BookController } from "./interfaces/controllers/BookController";
import { PublisherController } from "./interfaces/controllers/PublisherController";

dotenv.config();

const app = express();

// Middleware para parsing de JSON
app.use(express.json());

// Book
app.post("/books", BookController.create);
app.get("/books", BookController.getAll);
app.get("/books/:id", BookController.getById);
app.put("/books/:id", BookController.update);
app.delete("/books/:id", BookController.delete);
// Publisher
app.post("/publishers", PublisherController.create);
app.get("/publishers", PublisherController.getAll);
app.get("/publishers/:id", PublisherController.getById);
app.put("/publishers/:id", PublisherController.update);
app.delete("/publishers/:id", PublisherController.delete);

app.get("/", (req: Request, res: Response) => {
  res.send("API está funcionando!");
});

export default app;
