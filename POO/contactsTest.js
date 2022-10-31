let Person = require('./person')
let Contacts = require('./contacts')

let person = new Person('Jesica', 'Romero', 70, 160, 1987, [
  'Yoga aereo',
  'Crossfit',
  'Comer',
])
let person2 = new Person('Juana', 'Garcia', 58, 150, 1993, ['Correr', 'Nadar'])

let contacts = new Contacts()
contacts.addPerson(person)
contacts.addPerson(person2)
contacts.printPersons()
