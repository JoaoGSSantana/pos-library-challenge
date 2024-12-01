import { Publisher } from "../entities/Publisher";

export namespace PublisherFactory {
  type Input = {
    id: number;
    name: string;
  };

  export function create(input: Input): Publisher {
    return new Publisher(input.id, input.name);
  }
}
