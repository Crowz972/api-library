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

  public async updateBook(
    id: number,
    updateData: Partial<Book>
  ): Promise<Book | null> {
    const book = await this.getBookById(id);

    if (!book) {
      return null;
    }

    await book.update(updateData);

    return book;
  }

  public async deleteBook(id: number): Promise<void> {
    const book = await Book.findByPk(id);
    
    if (!book) {
      const error = new Error('Book not found');
      (error as any).status = 404;
      throw error;
    }

    await book.destroy(); 
  }
}


export const bookService = new BookService();
