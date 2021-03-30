const assert = require('assert')
const Employee = require('./employee')
const GENDER = {
    male: 'male',
    female: 'female'
}

{
    const employee = new Employee({ name: 'Renata', gender: GENDER.female })

    assert.throws(() => employee.birthYear, { message: 'You must define age first!' })
}