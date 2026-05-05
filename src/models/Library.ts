import { AbstractBook } from './AbstractBook';
import { Author } from './Author';
import { Copy } from './Copy';
import { Reader } from './Reader';

export class Library {
    private books: AbstractBook[];
    private authors: Author[];
    private copies: Copy[];
    private readers: Reader[];

    constructor() {
        this.books = [];
        this.authors = [];
        this.copies = [];
        this.readers = [];
    }

    public addBook(book: AbstractBook): void {
        this.books.push(book);
    }

    public addAuthor(author: Author): void {
        this.authors.push(author);
    }

    public addCopy(copy: Copy): void {
        this.copies.push(copy);
    }

    public addReader(reader: Reader): void {
        this.readers.push(reader);
    }

    public getAvailableCopies(): Copy[] {
        return this.copies.filter(copy => copy.isCopyAvailable());
    }

    public findBooksByAuthor(author: Author): AbstractBook[] {
        return this.books.filter(book => book.getAuthor() === author);
    }
}
