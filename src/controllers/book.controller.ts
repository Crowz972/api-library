import { Controller, Get, Post, Delete, Route, Path, Body, Tags, Patch } from "tsoa";
import { BookDTO } from "../dto/book.dto";
import { bookService } from "../services/book.service";

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
     return bookService.getBookById(id);
   }
 
  //  // Crée un nouvel auteur
  //  @Post("/")
  //  public async createAuthor(
  //    @Body() requestBody: AuthorDTO
  //  ): Promise<AuthorDTO> {
  //    const { first_name, last_name } = requestBody;
  //    return authorService.createAuthor(first_name, last_name);
  //  }
 
  //  // Supprime un auteur par ID
  //  @Delete("{id}")
  //  public async deleteAuthor(@Path() id: number): Promise<void> {
  //    await authorService.deleteAuthor(id);
  //  }
 
  //  // Met à jour un auteur par ID
  //  @Patch("{id}")
  //  public async updateAuthor(
  //    @Path() id: number,
  //    @Body() requestBody: AuthorDTO
  //  ): Promise<AuthorDTO | null> {
  //    const { first_name, last_name } = requestBody;
  //    return authorService.updateAuthor(id, first_name, last_name);
  //  }
}