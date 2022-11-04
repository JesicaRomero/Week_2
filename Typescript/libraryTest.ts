import { Library } from './library'
import { Book } from './book'

let book1 = new Book(
  'Por si las voces vuelven',
  250,
  '9788408249214',
  'Angel Martin',
  'Planeta'
)
let book2 = new Book(
  'Camino al exito',
  191,
  '978-84-17-762-20-5',
  'Alex Rodriguez Bacardit',
  'Base'
)
let library = new Library([book1, book2], 'Calle Piruleta', 'Homer Simpson')

console.log(library.toString())
console.log(library.getNumberOfBooks())
console.log(library.findByAuthor('Angel Martin'))
