class Util {
    static #defaultFormat = Intl.NumberFormat('pt-bt', {
        currency: 'BRL',
        style: 'currency'
    })

    static formatCurrency (value) {
        return this.#defaultFormat.format(value)
    }
}

module.exports = Util