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

{
    const employee = new Employee({ name: 'Raul', gender: GENDER.male })
    employee.age = 25

    assert.deepStrictEqual(employee.name, "Mr. Raul")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.strictEqual(employee.grossPay, 0)
}