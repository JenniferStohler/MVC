import { ProxyState } from "../Utils/app.js";
import { valuesService } from "../Service/ValuesService.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let template = `<div class="row" id="houses">
  <!-- <div class="col-md-4 mb-3">
      <div class="card shadow">
          <img class="card-img-top" src="//placehold.it/200x200" alt="">
          <div class="card-body">
              <h4 class="card-title">ROOMS | BATHROOMS | ADDRESS</h4>
              <p class="card-text">SQUARE FEET - PRICE</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger">Delete</button>
              <button type="button" class="btn btn-info">Bid</button>
          </div>
      </div>
  </div> 
</div>`
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