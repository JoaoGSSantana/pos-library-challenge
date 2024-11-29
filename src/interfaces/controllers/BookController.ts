// src/interfaces/controllers/BookController.ts
import { Request, Response } from "express";

import { BookService } from "../../application/services/BookService";
import { PrismaBookRepository } from "../../infrastructure/prisma/PrismaBookRepository";

const bookService = new BookService(new PrismaBookRepository());

export class BookController {
  static async create(req: Request, res: Response): Promise<void> {
    const book = await bookService.createBook(req.body);

    res.status(201).json(book);
  }

  static async getAll(req: Request, res: Response): Promise<void> {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  }

  static async getById(req: Request, res: Response): Promise<void> {
    const book = await bookService.getBookById(parseInt(req.params.id));
    if (book) res.status(200).json(book);
    else res.status(404).send("Book not found");
  }

  static async update(req: Request, res: Response): Promise<void> {
    const book = await bookService.updateBook(
      Object.assign({ id: parseInt(req.params.id) }, req.body)
    );
    res.status(200).json(book);
  }

  static async delete(req: Request, res: Response): Promise<void> {
    await bookService.deleteBook(parseInt(req.params.id));
    res.status(204).send();
  }
}
