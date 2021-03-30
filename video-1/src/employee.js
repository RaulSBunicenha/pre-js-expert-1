const EntityBase = require('./EntityBase')
const Util = require('./Util')

class Employee extends EntityBase {
    static #TAXES_PERCENTUAL = 0.2
    #grossPay = 5000.40

    get grossPay () {
        return Util.formatCurrency(this.#grossPay)
    }

    get netPay () {
        const netPay = this.#grossPay - (this.#grossPay * Employee.#TAXES_PERCENTUAL)
        return Util.formatCurrency(netPay)
    }
}

module.exports = Employee