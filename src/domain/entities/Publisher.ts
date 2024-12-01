import { BaseEntity } from "./BaseEntity";

export class Publisher implements BaseEntity {
  readonly id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // Getters
  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  // Setters
  public setName(name: string): void {
    this.name = name;
  }
}
