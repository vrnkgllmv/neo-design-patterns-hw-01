import { AbstractBook } from './AbstractBook';

export class Copy {
    private book: AbstractBook;
    private isAvailable: boolean;

    constructor(book: AbstractBook) {
        this.book = book;
        this.isAvailable = true;
    }

    public getBook(): AbstractBook {
        return this.book;
    }

    public isCopyAvailable(): boolean {
        return this.isAvailable;
    }

    public setAvailable(status: boolean): void {
        this.isAvailable = status;
    }
}
