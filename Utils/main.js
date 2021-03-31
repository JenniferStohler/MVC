  
import HousesController from "../Controller/housesController.js";

class App {
  housesController = new HousesController();
}

window["app"] = new App();