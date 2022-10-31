class Person {
  constructor(firstName, lastName, weight, height, yearOfBirth, hobbies) {
    this.firstName = firstName
    this.lastName = lastName
    this.weight = weight
    this.height = height
    this.yearOfBirth = yearOfBirth
    this.hobbies = hobbies
  }

  calculateIBM() {
    let ibm = (this.weight / (this.height * this.height)) * 10000
    return +(Math.round(ibm + 'e+2') + 'e-2')
  }
  age(currentYear) {
    return currentYear - this.yearOfBirth
  }

  printAll() {
    for (let property in this) {
      console.log(`${property} - ${this[property]}`)
    }
  }

  printHobbies() {
    this.hobbies.forEach((hobby) => console.log(hobby))
  }
}

module.exports = Person
