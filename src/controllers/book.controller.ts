import { Controller, Get, Post, Delete, Route, Path, Body, Tags, Patch } from "tsoa";
import { BookDTO } from "../dto/book.dto";
import { bookService } from "../services/book.service";
import { AuthorDTO } from "../dto/author.dto";
import { authorService } from "../services/author.service";

@Route("books")
@Tags("Books")
export class BookController extends Controller {
  @Get("/")
  public async getAllBooks(): Promise<BookDTO[]> {
    return bookService.getAllBooks();
  }

  // Récupère un auteur par ID
  @Get("{id}")
  public async getBooksById(@Path() id: number): Promise<BookDTO | null> {
    const book = await bookService.getBookById(id);

    if (!book) {
      const error = new Error('Book not found');
      (error as any).status = 404;
      throw error;
    }
    return book;
  }

  // Crée un nouvel auteur
  @Post("/")
  public async createBook(
    @Body() requestBody: BookDTO
  ): Promise<BookDTO> {
    const { title, publish_year, isbn, author_id } = requestBody;
    const author = await authorService.getAuthorById(author_id);
    if (!author) {
      const error = new Error('Author not found');
      (error as any).status = 404;
      throw error;
    }
    return bookService.createBook(title, publish_year, author_id, isbn);
  }

  // Met à jour un auteur par ID
  @Patch("{id}")
  public async updateBook(
    @Path() id: number,
    @Body() requestBody: BookDTO
  ): Promise<BookDTO | null> {
    const { } = requestBody;
    const author = await authorService.updateAuthor(id, first_name, last_name);
    if (!author) {
      const error = new Error('Author not found');
      (error as any).status = 404;
      throw error;
    }
    return author
  }
}


