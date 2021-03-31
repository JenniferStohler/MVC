import { generateId } from "../Utils/GenerateId.js"

export default class House {
  constructor(rooms, bathrooms, address, sqfoot, price, imgUrl) {
    this.id = generateId()
    this.rooms = rooms
    this.bathrooms = bathrooms
    this.address = address
    this.sqfoot = sqfoot
    this.price = price
    this.imgUrl = imgUrl
  }

  // NOTE 'get' signifies a FAKE property
  // GETters MUST return a value
  get Template() {
    return `
    <div class="col-md-4 mb-3">
      <div class="card shadow">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.rooms} | ${this.bathrooms} | ${this.address}</h4>
              <p class="card-text">${this.sqfoot} - $${this.price.toFixed(2)}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
              <button type="button" class="btn btn-info" onclick="app.carsController.bid('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
    `
  }


  createHouse() {
    // if this method is triggered by an event (submit event) prevent the default action of reloding the page
    window.event.preventDefault()
    // grab the element from html that triggered this event
    const form = window.event.target
    let newHouse = {
      // @ts-ignore
      rooms: form.rooms.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      address: form.address.value,
      // @ts-ignore
      sqfoot: form.sqfoot.value,
      // @ts-ignore  this converts the string to a number
      price: Number(form.price.value),
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value
    }
    carsService.createHouse(newHouse)

    // @ts-ignore
    form.reset()

    // get the modal and close (using jQuery's "$" selector) 
    $('#new-house-form').modal('hide')
  }

  deleteHouse(id){
    housesService.deleteHouse(id)
  }

  bid(id){
    housesService.bid(id)
  }
}
