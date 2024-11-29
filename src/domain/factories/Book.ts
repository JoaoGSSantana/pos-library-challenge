import { Book } from "../entities/Book";

export namespace BookFactory {
  type Input = {
    id: number;
    title: string;
    author: string;
    isbn: string;
    publicationYear: number;
    publisherId: number;
  };

  export function create(input: Input): Book {
    return new Book(
      input.id,
      input.title,
      input.author,
      input.isbn,
      input.publicationYear,
      input.publisherId
    );
  }
}
