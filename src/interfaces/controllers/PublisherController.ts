import { Request, Response } from "express";

import { PublisherService } from "../../application/services/PublisherService";
import { PrismaPublisherRepository } from "../../infrastructure/prisma/PrismaPublisherRepository";

const publisherService = new PublisherService(new PrismaPublisherRepository());

export class PublisherController {
  static async create(req: Request, res: Response): Promise<void> {
    const publisher = await publisherService.createPublisher(req.body);

    res.status(201).json(publisher);
  }

  static async getAll(req: Request, res: Response): Promise<void> {
    const publishers = await publisherService.getAllPublishers();
    res.status(200).json(publishers);
  }

  static async getById(req: Request, res: Response): Promise<void> {
    const publisher = await publisherService.getPublisherById(
      parseInt(req.params.id)
    );
    if (publisher) res.status(200).json(publisher);
    else res.status(404).send("Book not found");
  }

  static async update(req: Request, res: Response): Promise<void> {
    const publisher = await publisherService.updatePublisher(
      Object.assign({ id: parseInt(req.params.id) }, req.body)
    );
    res.status(200).json(publisher);
  }

  static async delete(req: Request, res: Response): Promise<void> {
    await publisherService.deletePublisher(parseInt(req.params.id));
    res.status(204).send();
  }
}
