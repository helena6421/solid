interface stor {
    books: [
        isbn: string,
        title: string,
        description: string,
        authors: string,
        favorite: string,
        fileCover: string,
        fileName: string,
        fileBook: string,
    ]
}

const store: stor, books = {
    isbn: 1, 
    title: "Harry Potter",
    description: "A film series about Harry Potter",
    authors: "J. K. Rowling",
    favorite: "Harry Potter and the Philosopher's Stone",
    fileCover: "Hard cover",
    fileName: "Harry Potter",
    fileBook: "Harry Potter",
}

class Book implements stor {
    isbn: string;
    title: string;
    description: string;
    authors: string;
    favorite: string;
    fileCover: string;
    fileName: string;
    fileBook: string;
    constructor(isbn: string, title: string, descriprion: string, authors: string, favorite: string, fileCover: string, fileName: string, fileBook: string) {
        this.isbn = isbn;
        this.title = title;
        this.description = descriprion;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
    }
}

abstract class BooksRepository extends Book{
    //???? что тут должно быть? 
}

class Create extends BooksRepository{
    createBook(book){
        // const newBook = new Book(this.isbn, this.title, this.description, this.authors, this.favorite, this.fileCover, this.fileName, this.fileBook)
        app.post('/api/books', (req, res) => {
            const {books} = stor
            const {title, desc, authors, favorite, fileCover, fileName} = req.body
        
            const newBook = new Book(title, desc, authors, favorite, fileCover, fileName)
            books.push(newBook)
        
            res.status(201)
            res.json(newBook)
        })
    }
}

class Get extends BooksRepository{
    getBook(id){
        app.get('/api/books/:id', (req, res) => {
            const {books} = stor
            const {id} = req.params
            const idx = books.findIndex(el => el.id === id)
        
            if( idx !== -1) {
                res.json(books[idx])
            } else {
                res.status(404)
                res.json('404 | страница не найдена')
            }
        
        })
    }
}

class GetAll extends BooksRepository{
    getBooks(){
        app.get('/api/books', (req, res) => {
            const {books} = stor
            res.json(books)
        })
    } 
}

class Update extends BooksRepository{
    updateBook(id){
        app.put('/api/books/:id', (req, res) => {
            const {books} = stor
            const {title, desc, authors, favorite, fileCover, fileName} = req.body
            const {id} = req.params
            const idx = books.findIndex(el => el.id === id)
        
            if (idx !== -1){
                books[idx] = {
                    ...books[idx],
                    title,
                    desc, 
                    authors, 
                    favorite, 
                    fileCover, 
                    fileName,
                }
        
                res.json(books[idx])
            } else {
                res.status(404)
                res.json('404 | страница не найдена')
            }
        })
    }
}

class Delete extends BooksRepository{
    deleteBook(id){
        app.delete('/api/books/:id', (req, res) => {
            const {books} = stor
            const {id} = req.params
            const idx = books.findIndex(el => el.id === id)
        
            if(idx !== -1){
                books.splice(idx, 1)
                res.json('ok')
            } else {
                res.status(404)
                res.json('404 | страница не найдена')
            }
        })
    }
}

