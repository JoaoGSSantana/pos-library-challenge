import { CreatePublisherDto } from "./create-publisher.dto";

export interface UpdatePublisherDto extends Pick<CreatePublisherDto, "name"> {
  id: number;
}
