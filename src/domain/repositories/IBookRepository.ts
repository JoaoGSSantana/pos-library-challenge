import { Book } from "../entities/Book";

export interface IBookRepository {
  create(book: Book): Promise<Book>;
  findAll(): Promise<Book[]>;
  findById(id: number): Promise<Book | null>;
  update(book: Book): Promise<Book>;
  delete(id: number): Promise<void>;
}
