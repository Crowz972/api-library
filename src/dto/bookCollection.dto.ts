
import { BookDTO } from "./book.dto";

export interface BookCollectionDTO {
    id?: number;
    book_id: number;
    available: number;
    state: number;
    book?: BookDTO;
}