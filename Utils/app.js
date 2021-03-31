import House from "../model/houses.js"
import { EventEmitter } from "../Utils/EventEmitter.js"
import { isValidProp } from "../Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {House[]} */
  houses = [
    new House('2 bed', '1 bath', '1200 Sky Lane', 5000, 300000, 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80'),
    new House('3 bed', '2 bath', '3568 W. Eagleshead Road', 10000, 800000, 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80'),
    new House('1 bed', '1 bath', '4040 E. Livingsville Ave.', 3000, 200000, 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'),
    new House('4 bed,', '4 bath', '1313 Mockingbird Lane', 10000, 500000, 'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')
  ]
}

// NOTE Oh oh.. its magic! Ya know!
export const ProxyState = new Proxy(new App(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})