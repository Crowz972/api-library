import { Author } from "../models/author.model";
import { Book } from "../models/book.model";

export class BookService {
  public async getAllBooks(): Promise<Book[]> {
    return Book.findAll({
      include: [{
        model: Author,
        as: 'author'
      }]
    });
  }

  // Récupère un book par ID
  public async getBookById(id: number): Promise<Book | null> {
    return Book.findByPk(id);
  }

  // Crée un nouvel book
  public async createBook(
    title: string, publish_year: number, author_id: number, isbn: string, 
  ): Promise<Book> {
    return Book.create({ title: title, publish_year: publish_year, author_id: author_id, isbn: isbn });
  }

}


export const bookService = new BookService();
