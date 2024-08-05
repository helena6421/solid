interface stor {
    books: [
        isbn: number,
        title: string,
        description: string,
        authors: string,
        favorite: boolean,
        fileCover: string,
        fileName: string,
        fileBook: string,
        count: number,
    ]
}

interface Book {
    id: number,
    title: string,
    description: string,
    authors: string,
    favorite: boolean,
    fileCover: string,
    fileName: string,
    fileBook: string,
    count: number,
}

const store: stor, books = {
    isbn: 1, 
    title: "Harry Potter",
    description: "A film series about Harry Potter",
    authors: "J. K. Rowling",
    favorite: true,
    fileCover: "Hard cover",
    fileName: "Harry Potter",
    fileBook: "Harry Potter",
}

export abstract class BooksRepository {
    abstract createBook(book: any): Promise<any>;
    abstract getBook(id: string): Promise<any>;
    abstract getBooks(): Promise<any>;
    abstract updateBook(id: string, book: any): Promise<any>;
    abstract deleteBook(id: string): Promise<any>;
}

class BookService extends BooksRepository {
}
