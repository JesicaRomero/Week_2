export class Book {
  constructor(
    private _title: string,
    private _nPages: number,
    private _isbn: string,
    private _author: string,
    private _editorial: string
  ) {}
  // Getters
  public get title(): string {
    return this._title
  }
  public get nPages(): number {
    return this._nPages
  }
  public get isbn(): string {
    return this._isbn
  }
  public get author(): string {
    return this._author
  }
  public get editorial(): string {
    return this._editorial
  }
  // Setters
  public set title(value: string) {
    this._title = value
  }
  public set nPages(value: number) {
    this._nPages = value
  }
  public set isbn(value: string) {
    this._isbn = value
  }
  public set author(value: string) {
    this._author = value
  }
  public set editorial(value: string) {
    this._editorial = value
  }

  toString(): string {
    return `Title - ${this.title}
Number of Pages - ${this.nPages}
ISBN - ${this.isbn}
Author - ${this.author}
Editorial - ${this.editorial}`
  }
}
