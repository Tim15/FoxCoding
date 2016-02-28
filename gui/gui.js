class panel {
  constructor(height, width, title, type) {

  }
}

//GAME FUNCTIONS
/*
Resources should follow this spec:
var resource = {
  name: "wood",
  cost: 5,
  gatherRate: 1,
  startAmount: 10
}
*/
class ResourceManager {
  constructor(types){
    for (var i = 0; i < types.length; i++) {
      this[types[i].name] = types[i];
      this[types[i].name].amount = types[i].startAmount;
    }
  }
  get(amount, type){
    this[type.name].amount += amount;
  }
  lose(type) {

  }

  buy(type){

  }
  sell(type) {

  }
}
