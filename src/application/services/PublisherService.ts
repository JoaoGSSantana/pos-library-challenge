import { Publisher } from "../../domain/entities/Publisher";
import { PublisherFactory } from "../../domain/factories/Publisher";
import { IPublisherRepository } from "../../domain/repositories/IPublisherRepository";
import { CreatePublisherDto } from "./dtos/create-publisher.dto";
import { UpdatePublisherDto } from "./dtos/update-publisher.dto";

export class PublisherService {
  constructor(private publisherRepository: IPublisherRepository) {}

  async createPublisher(dto: CreatePublisherDto): Promise<Publisher> {
    const publisher = PublisherFactory.create(Object.assign({ id: 0 }, dto));

    return await this.publisherRepository.create(publisher);
  }

  async getAllPublishers(): Promise<Publisher[]> {
    return await this.publisherRepository.findAll();
  }

  async getPublisherById(id: number): Promise<Publisher | null> {
    return await this.publisherRepository.findById(id);
  }

  async updatePublisher(dto: UpdatePublisherDto): Promise<Publisher> {
    const publisher = PublisherFactory.create(dto);

    return await this.publisherRepository.update(publisher);
  }

  async deletePublisher(id: number): Promise<void> {
    await this.publisherRepository.delete(id);
  }
}
