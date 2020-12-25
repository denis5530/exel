import { capitalizeAndPrefix } from "./utils"

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error (`No root provided for DomListener1`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = capitalizeAndPrefix(listener, 'on')
            if (!this[method]) {
                throw new Error(`Method ${method} is not implemented in ${this.name} Component`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = capitalizeAndPrefix(listener, 'on')
            this.$root.off(listener, this[method])
        })
    }
}