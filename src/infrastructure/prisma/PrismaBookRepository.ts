import { PrismaClient } from "@prisma/client";

import { Book } from "../../domain/entities/Book";
import { IBookRepository } from "../../domain/repositories/IBookRepository";
import { BookFactory } from "../../domain/factories/Book";

export class PrismaBookRepository implements IBookRepository {
  private prisma = new PrismaClient();

  async create(book: Book): Promise<Book> {
    const createdBook = await this.prisma.book.create({
      data: {
        title: book.getTitle(),
        isbn: book.getIsbn(),
        publicationYear: book.getPublicationYear(),
        author: book.getAuthor(),
        publisherId: book.getPublisherId(),
      },
    });

    return BookFactory.create(createdBook);
  }

  async findAll(): Promise<Book[]> {
    const books = await this.prisma.book.findMany();
    return books.map((book) => BookFactory.create(book));
  }

  async findById(id: number): Promise<Book | null> {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) return null;
    return BookFactory.create(book);
  }

  async update(book: Book): Promise<Book> {
    const updatedBook = await this.prisma.book.update({
      where: { id: book.getId() },
      data: {
        title: book.getTitle(),
        author: book.getAuthor(),
        isbn: book.getIsbn(),
        publicationYear: book.getPublicationYear(),
        publisherId: book.getPublisherId(),
      },
    });

    return BookFactory.create(updatedBook);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.book.delete({ where: { id } });
  }
}
