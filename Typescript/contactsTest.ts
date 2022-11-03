import { Person } from './person'
import { Contacts } from './contacts'

let person1 = new Person('Jesica', 35, 'Calle Paz')
let person2 = new Person('Juan', 52, 'Calle Luz')

let contacs = new Contacts()
contacs.people.push(person1)
contacs.people.push(person2)
contacs.printCalendar()
