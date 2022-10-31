let Person = require('./person')

let person = new Person('Jesica', 'Romero', 70, 160, 1987, [
  'Yoga aereo',
  'Crossfit',
  'Comer',
])

console.log(person.calculateIBM())
console.log(person.age(2022))
person.printAll()
person.printHobbies()
