import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class EBook extends AbstractBook {
    private url: string;

    constructor(title: string, year: number, author: Author, url: string) {
        super(title, year, author);
        this.url = url;
        author.addBook(this);
    }

    public getUrl(): string {
        return this.url;
    }

    public getDescription(): string {
        return `E-book "${this.title}" by ${this.author.getName()} (${this.year}) - Available at: ${this.url}`;
    }
}
