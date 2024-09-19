import { AuthorDTO } from "./author.dto";

export interface BookDTO {
  id?: number;
  title: string;
  publish_year: number;
  isbn: string;
  author_id: number;
  author?: AuthorDTO;
}

