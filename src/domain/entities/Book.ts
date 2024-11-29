import { BaseEntity } from "./BaseEntity";

export class Book implements BaseEntity {
  readonly id: number;
  private title: string;
  private author: string;
  private isbn: string;
  private publicationYear: number;
  private publisherId: number;

  // Construtor
  constructor(
    id: number,
    title: string,
    author: string,
    isbn: string,
    publicationYear: number,
    publisherId: number
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.publicationYear = publicationYear;
    this.publisherId = publisherId;
  }

  // Getters
  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getIsbn(): string {
    return this.isbn;
  }

  public getPublicationYear(): number {
    return this.publicationYear;
  }

  public getPublisherId(): number {
    return this.publisherId;
  }

  // Setters
  public setTitle(title: string): void {
    this.title = title;
  }

  public setAuthor(author: string): void {
    this.author = author;
  }

  public setIsbn(isbn: string): void {
    this.isbn = isbn;
  }

  public setPublicationYear(publicationYear: number): void {
    this.publicationYear = publicationYear;
  }

  public setPublisherId(publisherId: number): void {
    this.publisherId = publisherId;
  }
}
