const RESTART_BTN = 'btnRestart'
const COUNTER = 'counter'
const COUNTER_VALUE = 100
const INTERVAL_PERIOD = 100

class CounterComponent {
    constructor () {
        this.init()   
    }

    getCounterProxy () {
        const handler = {
            set: (currentContext, propertyKey, newValue) => {
                console.log({ currentContext, propertyKey, newValue })
                if (!currentContext.value) currentContext.stopCounter()
                else currentContext[propertyKey] = newValue
                
                return true
            }
        }

        return new Proxy({
            value: COUNTER_VALUE,
            stopCounter: () => {}
        }, handler)
    }

    updateText ({ counterElement, counter }) {
        const identify = '$$counter'
        const standardText = `Starting in <strong>${identify}</strong>`
        
        return () => counterElement.innerHTML = standardText.replace(identify, counter.value--)
    }

    getCounterStop ({ counterElement, intervalId }) {
        return () => {
            clearInterval(intervalId)

            counterElement.innerHTML = ''
            this.disableBtn(false)
        }
    }

    setButton (btnElement, startFunction) {
        btnElement.addEventListener('click', startFunction)

        return (value = true) => {
            const attr = 'disabled'
            if (value) {
                btnElement.setAttribute(attr, value)
                return;
            }
            
            console.log('here')
            btnElement.removeAttribute(attr)
        }
    }

    init () {
        const counterElement = document.getElementById(COUNTER)
        const counter = this.getCounterProxy()
        
        const args = { counterElement, counter }
        const myFunction = this.updateText(args)
        const intervalId = setInterval(myFunction, INTERVAL_PERIOD)

        {
            const btnElement = document.getElementById(RESTART_BTN)
            const disableBtn = this.setButton(btnElement, this.init.bind(this))
            disableBtn()

            const args = { counterElement, intervalId }
            const stopCounter = this.getCounterStop.apply({ disableBtn }, [args])
            counter.stopCounter = stopCounter
        }
    }
}