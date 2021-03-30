const BTN_RESTART = 'btnRestart'
const COUNTER = 'counter'
const COUNTER_VALUE = 100
const INTERVALPERIOD = 10

class CounterComponent {
    constructor () {
        this.init()   
    }

    getCounterProxy () {
        const handler = {
            set: (currentContext, propertyKey, newValue) => {
                console.log({ currentContext, propertyKey, newValue })

                currentContext[propertyKey] = newValue
                return true
            }
        }

        return new Proxy({
            value: COUNTER_VALUE,
            doIt: () => {
                
            }
        }, handler)
    }

    updateText ({ counterElement, counter }) {
        const identify = '$$counter'
        const standardText = `Starting in <strong>${identify}</strong>`
        counterElement.innerHTML = standardText.replace(identify, counter.value--)
    }

    init () {
        const counterElement = document.getElementById(COUNTER)
        const counter = this.getCounterProxy()
        
        const args = {
            counterElement,
            counter
        }

        this.updateText(args)
    }
}