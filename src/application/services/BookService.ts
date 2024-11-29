import { Book } from "../../domain/entities/Book";
import { BookFactory } from "../../domain/factories/Book";
import { IBookRepository } from "../../domain/repositories/IBookRepository";
import { CreateBookDto } from "./dtos/create-book.dto";
import { UpdateBookDto } from "./dtos/update-book.dto";

export class BookService {
  constructor(private bookRepository: IBookRepository) {}

  async createBook(dto: CreateBookDto): Promise<Book> {
    const book = BookFactory.create(Object.assign({ id: 0 }, dto));

    return await this.bookRepository.create(book);
  }

  async getAllBooks(): Promise<Book[]> {
    return await this.bookRepository.findAll();
  }

  async getBookById(id: number): Promise<Book | null> {
    return await this.bookRepository.findById(id);
  }

  async updateBook(dto: UpdateBookDto): Promise<Book> {
    const book = BookFactory.create(dto);

    return await this.bookRepository.update(book);
  }

  async deleteBook(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
