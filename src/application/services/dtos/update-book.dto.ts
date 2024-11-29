import { CreateBookDto } from "./create-book.dto";

export interface UpdateBookDto
  extends Pick<
    CreateBookDto,
    "title" | "author" | "isbn" | "publicationYear" | "publisherId"
  > {
  id: number;
}
