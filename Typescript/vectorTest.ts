import { Vector } from './vector'

let vector1 = new Vector(4, 10)
let vector2 = new Vector(4, 10)

vector1.print()
vector2.print()

vector1.add(vector2).print()
vector1.subs(vector2).print()
vector1.mult(vector2).print()
vector1.multNumber(4).print()
