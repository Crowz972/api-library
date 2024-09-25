import { Body, Controller, Delete, Get, Patch, Path, Post, Route, Tags } from "tsoa";
import { BookCollectionDTO } from "../dto/bookCollection.dto"; 
import { bookCollectionService } from "../services/bookCollection.service";

@Route("bookCollections")
@Tags("BookCollections")
export class BookCollectionController extends Controller {
  
  @Get("/")
  public async getAllBookCollections(): Promise<BookCollectionDTO[]> {
    return bookCollectionService.getAllBookCollections();
  }

  @Get("{id}")
  public async getBookCollectionById(@Path() id: number): Promise<BookCollectionDTO | null> {
    return bookCollectionService.getBookCollectionById(id);
  }

  @Post("/")
  public async createBookCollection(
    @Body() requestBody: BookCollectionDTO
  ): Promise<BookCollectionDTO> {
    return bookCollectionService.createBookCollection(requestBody);
  }

  @Patch("{id}")
  public async updateBookCollection(
    @Path() id: number,
    @Body() requestBody: Partial<BookCollectionDTO>
  ): Promise<BookCollectionDTO | null> {
    return bookCollectionService.updateBookCollection(id, requestBody);
  }

  @Delete("{id}")
  public async deleteBookCollection(@Path() id: number): Promise<void> {
    await bookCollectionService.deleteBookCollection(id);
  }
}
