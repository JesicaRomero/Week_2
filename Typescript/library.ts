import { Book } from './book'

export class Library {
  constructor(
    private _books: Book[],
    private _address: string,
    private _manager: string
  ) {}
  //Getters
  public get address(): string {
    return this._address
  }
  public get manager(): string {
    return this._manager
  }
  //Setters
  public set address(value: string) {
    this._address = value
  }
  public set manager(value: string) {
    this._manager
  }

  toString(): string {
    let library: string[] = this._books.map(
      (book: Book, index: number) => `Book${index + 1}:\n${book.toString()}`
    )
    return library.join('\n')
  }

  getNumberOfBooks(): number {
    return this._books.length
  }

  findByAuthor(author: string): Book[] {
    return this._books.filter((book: Book) => book.author === author)
  }
}
