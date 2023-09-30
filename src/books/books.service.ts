import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private readonly books: any[] = [];

  create(book: any) {
    this.books.push(book);
  }

  findAll(): any[] {
    return this.books;
  }
}
