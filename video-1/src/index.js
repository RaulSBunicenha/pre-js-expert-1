const assert = require('assert')
const Employee = require('./Employee')
const Util = require('./Util')
const GENDER = {
    male: 'male',
    female: 'female'
}

{
    const employee = new Employee({ name: 'Renata', gender: GENDER.female })

    assert.throws(() => employee.birthYear, { message: 'You must define age first!' })
}

{
    const CURRENT_YEAR = 2021
    Date.prototype.getFullYear = () => CURRENT_YEAR

    const employee = new Employee({ name: 'Raul', gender: GENDER.male })
    employee.age = 25

    assert.deepStrictEqual(employee.name, "Mr. Raul")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32))

    const expectedBirthYear = 1996
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)
}