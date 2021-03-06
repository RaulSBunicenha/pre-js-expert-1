const assert = require('assert')
const Employee = require('./Employee')
const Manager = require('./Manager')
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

    const employee = new Employee({ name: 'Raul', gender: GENDER.male, age: 25 })
    
    assert.deepStrictEqual(employee.name, "Mr. Raul")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32))

    const expectedBirthYear = 1996
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

    const newBirthYear = new Date().getFullYear() - 80
    employee.birthYear = newBirthYear
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

    employee.age = 80
    assert.deepStrictEqual(employee.birthYear, newBirthYear)
}

{
    const manager = new Manager({ name: 'Renata', gender: GENDER.female, age: '20' })

    assert.deepStrictEqual(manager.name, 'Ms. Renata')
    assert.deepStrictEqual(manager.age, undefined)
    assert.deepStrictEqual(manager.gender, undefined)
    assert.deepStrictEqual(manager.birthYear, 2001)
    assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000))
    assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32))
}