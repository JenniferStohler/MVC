import { ProxyState } from "../Utils/app.js";
import { housesService } from "../Service/housesService.js";


//Private
function _draw() {
  // What are we drawing
  let houses = ProxyState.cars
  let template = ''
  // if a collection itterate over collection to generate template for each object
  houses.forEach(house => {
    console.log(house)
    template += house.Template
  })
  // render to page
  document.getElementById('houses').innerHTML = template
}

//Public
export default class CarsController {
  constructor() {
    // OH oh more magic. you still know.....
    // 1st argument is name of the property in the AppState to 'watch' for changes
    // 2nd argument: name of the function to run when 1st argument property changes
    ProxyState.on('houses', _draw);

    // manually run draw the on page load
    _draw()
  }


  createHouse() {
    // if this method is triggered by an event (submit event) prevent the default action of reloding the page
    window.event.preventDefault()
    // grab the element from html that triggered this event
    const form = window.event.target
    
    let newHouse = {
      // @ts-ignore
      make: form.rooms.value,
      // @ts-ignore
      model: form.bathrooms.value,
      // @ts-ignore
      year: form.address.value,
      // @ts-ignore  this converts the string to a number
      description: form.sqfoot.value,
      // @ts-ignore
      price: Number(form.price.value),
      // @ts-ignore
      imgUrl: form.imgUrl.value
    }
    housesService.createHouse(newHouse)

    // @ts-ignore
    form.reset()

    // get the modal and close (using jQuery's "$" selector) 
    $('#new-house-form').modal('hide')
  }

  deleteHouse(id) {
    carsService.deleteHouse(id)
  }

  bid(id) {
    housesService.bid(id)
  }

}