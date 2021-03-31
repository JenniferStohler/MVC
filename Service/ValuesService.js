import { ProxyState } from "../Utils/app.js";
import { valuesService } from "../Service/ValuesService.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let template = `<div class="col-md-4 mb-3">
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
  values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  <div className="card-columns values">
      ${template}
  </div>
  `
}

//Public
export default class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue() {
    valuesService.addValue()
  }

}