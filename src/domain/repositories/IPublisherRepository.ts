import { Publisher } from "../entities/Publisher";

export interface IPublisherRepository {
  create(publisher: Publisher): Promise<Publisher>;
  findAll(): Promise<Publisher[]>;
  findById(id: number): Promise<Publisher | null>;
  update(publisher: Publisher): Promise<Publisher>;
  delete(id: number): Promise<void>;
}
