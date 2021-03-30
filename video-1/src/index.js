const Employee = require('./employee')

console.log(new Employee({
    name: 'Raul',
    gender: 'male',
    age: '24'
}).birthDate)

const renata = new Employee({
    name: 'Renata',
    gender: 'female',
})
renata.age = 27

console.log(renata.birthDate)
