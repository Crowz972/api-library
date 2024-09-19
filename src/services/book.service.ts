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

  // Récupère un auteur par ID
  public async getBookById(id: number): Promise<Book> {
    const book = await Book.findByPk(id);
    return new Promise((resolve, reject) => {
      if (book) {
        resolve(book)
      }
      reject(book)
    })
  }
}


export const bookService = new BookService();
