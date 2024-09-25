import { BookCollection } from "../models/bookCollection.model"; // Modèle Sequelize pour BookCollection
import { Book } from "../models/book.model"; // Modèle Sequelize pour Book
import { BookCollectionDTO } from "../dto/bookCollection.dto"; // DTO pour la sortie

export class BookCollectionService {

    public async getAllBookCollections(): Promise<BookCollectionDTO[]> {
        const collections = await BookCollection.findAll({
            include: [{ model: Book, as: "book" }]
        });

        return collections.map(collection => collection.toJSON() as unknown as BookCollectionDTO);
    }

    public async getBookCollectionById(id: number): Promise<BookCollectionDTO | null> {
        const collection = await BookCollection.findByPk(id, {
            include: [{ model: Book, as: "book" }]
        });

        if (!collection) return null;
        return collection.toJSON() as unknown as BookCollectionDTO;
    }

    public async createBookCollection(
        data: BookCollectionDTO
    ): Promise<BookCollectionDTO> {
        const { book_id, available, state } = data;

        const book = await Book.findByPk(book_id);
        if (!book) {
            const error = new Error('Book not found');
            (error as any).status = 404;
            throw error;
        }

        const newCollection = await BookCollection.create({
            book_id,
            available,
            state
        });

        return newCollection.toJSON() as unknown as BookCollectionDTO;
    }

    public async updateBookCollection(
        id: number,
        data: Partial<BookCollectionDTO>
    ): Promise<BookCollectionDTO | null> {
        const collection = await BookCollection.findByPk(id);
        if (!collection) {
            const error = new Error('BookCollection not found');
            (error as any).status = 404;
            throw error;
        }

        if (data.book_id) {
            const book = await Book.findByPk(data.book_id);
            if (!book) {
                const error = new Error('Book not found');
                (error as any).status = 404;
                throw error;
            }
        }

        await collection.update(data);

        return collection.toJSON() as BookCollectionDTO;
    }

    public static async hasBookCollections(bookId: number): Promise<boolean> {
        const collectionsCount = await BookCollection.count({
            where: { book_id: bookId }
        });

        return collectionsCount > 0;
    }

    public async deleteBookCollection(id: number): Promise<void> {
        const collection = await BookCollection.findByPk(id);

        if (!collection) {
            const error = new Error('BookCollection not found');
            (error as any).status = 404;
            throw error;
        }

        await collection.destroy(); 
    }
}

export const bookCollectionService = new BookCollectionService();
