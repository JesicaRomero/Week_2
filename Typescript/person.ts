export class Person {
  constructor(
    public name: string,
    public age: number,
    private _address: string
  ) {}

  public get address(): string {
    return this._address
  }

  public set address(address: string) {
    this._address = address
  }

  printName(): void {
    console.log(this.name)
  }

  yearOfBirth(currentYear: number): number {
    return currentYear - this.age
  }
}
