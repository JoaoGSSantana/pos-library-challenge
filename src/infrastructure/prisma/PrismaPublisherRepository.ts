import { PrismaClient } from "@prisma/client";
import { IPublisherRepository } from "../../domain/repositories/IPublisherRepository";
import { Publisher } from "../../domain/entities/Publisher";
import { PublisherFactory } from "../../domain/factories/Publisher";

export class PrismaPublisherRepository implements IPublisherRepository {
  private prisma = new PrismaClient();

  async create(publisher: Publisher): Promise<Publisher> {
    const createdPublisher = await this.prisma.publisher.create({
      data: {
        name: publisher.getName(),
      },
    });

    return PublisherFactory.create(createdPublisher);
  }

  async findAll(): Promise<Publisher[]> {
    const publishers = await this.prisma.publisher.findMany();
    return publishers.map((publisher) => PublisherFactory.create(publisher));
  }

  async findById(id: number): Promise<Publisher | null> {
    const publisher = await this.prisma.publisher.findUnique({ where: { id } });
    if (!publisher) return null;
    return PublisherFactory.create(publisher);
  }

  async update(publisher: Publisher): Promise<Publisher> {
    const updatedPublisher = await this.prisma.publisher.update({
      where: { id: publisher.getId() },
      data: {
        name: publisher.getName(),
      },
    });

    return PublisherFactory.create(updatedPublisher);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.publisher.delete({ where: { id } });
  }
}
