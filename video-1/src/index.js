const EntityBase = require('./EntityBase')

console.log(new EntityBase({
    name: 'Raul',
    gender: 'male'
}).name)

console.log(new EntityBase({
    name: 'Renata',
    gender: 'female'
}).name)
