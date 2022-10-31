class Contacts {
  constructor() {
    this.persons = []
  }

  addPerson(person) {
    this.persons.push(person)
  }
  printPersons() {
    this.persons.forEach((person) => person.printAll())
  }
}

module.exports = Contacts
