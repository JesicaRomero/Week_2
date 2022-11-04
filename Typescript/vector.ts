export class Vector {
  private _elements: number[]
  constructor(n: number, k: number) {
    this._elements = this.createVector(n, k)
  }
  // Getters
  public get elements(): number[] {
    return this._elements
  }
  //Sette

  public set elements(value: number[]) {
    this._elements = value
  }

  private generateRandomNumber(min: number, max: number): number {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return randomNumber
  }

  private createVector(n: number, k: number): number[] {
    let vector: number[] = []
    for (let i = 0; i < n; i++) {
      let randomNumber = this.generateRandomNumber(0, k)
      vector.push(randomNumber)
    }
    return vector
  }

  print(): void {
    console.log(this._elements)
  }

  add(v1: Vector): Vector {
    let newVector = new Vector(0, 0)
    newVector.elements = v1.elements.map(
      (element: number, index: number) => this.elements[index] + element
    )
    return newVector
  }

  subs(v1: Vector): Vector {
    let newVector = new Vector(0, 0)
    newVector.elements = v1.elements.map(
      (element: number, index: number) => this.elements[index] - element
    )
    return newVector
  }

  mult(v1: Vector): Vector {
    let newVector = new Vector(0, 0)
    newVector.elements = v1.elements.map(
      (element: number, index: number) => this.elements[index] * element
    )
    return newVector
  }

  multNumber(n: number): Vector {
    let newVector = new Vector(0, 0)
    newVector.elements = this.elements.map((element: number) => element * n)
    return newVector
  }
}
