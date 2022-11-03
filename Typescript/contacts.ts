import { Person } from './person'

export class Contacts {
  public people: Person[]

  constructor() {
    this.people = []
  }

  printCalendar() {
    this.people.forEach((person) => console.log(person))
  }
}
