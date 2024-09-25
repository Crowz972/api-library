import { Book } from "../models/book.model";

export interface BookCollectionDTO {
    id?: number;
    book_id: number;
    available: number;
    state: number;
    book?: Book;
}