import { Person } from './person'

let person = new Person('Jesica', 35, 'Calle Paz')

person.printName()
console.log(person.yearOfBirth(2022))
console.log(person.address)
person.address = 'Calle Viento'
console.log(person.address)
