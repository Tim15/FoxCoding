//*******************************************************************************
//*******************************************************************************
//****************************Resources******************************************
//*******************************************************************************
//*******************************************************************************
var resourcesave

var population = {
  total: 1,
  freespace: 0,
  employed: 0,
  unemployed: 0,
  hunger: 0,
}

var amount = {
  wood: 0,
  // TODO: special resource
  food: 0,
  herbs: 0,
  stone: 0,
  ore: 0,
  iron: 0,
  gold: 0,
  steel: 0,
  coal: 0,
  wool: 0,
  string: 0,
  spears:0,
  swords:0,
  crudestonetools: 0,
  basicstonetools: 0,
  advancedstonetools: 0,
  crudeirontools: 0,
  basicirontools: 0,
  advancedstonetools: 0,
}

var buildings = {
tent: {amount: 0,cost: {wood: 5,skins: 7},freespace: 1},
house: {amount: 0,cost: {wood: 20,stone: 10},freespace: 2}
}
var worker = {amount: 0, cost: {food: 20}, hunger: 0.5,
farmer: {amount: 0,cost: {food: 25,},gather: 1,},
woodcutter: {amount: 0,cost: {food: 25,}, gather: 0.75,},
miner: {amount: 0, cost: {food: 25}, gather: 0.5,},
scientist: {amount: 0, gather: 1},
builder: {amount: 0,cost: {food: 25,wood: 10,stone: 5}, gather: 0.5,}
}
//*******************************************************************************
//*******************************************************************************
//****************************BASE FUNCTIONS*************************************
//*******************************************************************************
//*******************************************************************************

var html = {
  disablebutton: function(id) {
    this.getElement(id).disabled = "disabled";
  },
  setinnerhtml: function(id, value) {
    document.getElementById(id).innerHTML = value;
  },
}

function calculate() {
  html.setinnerhtml('foodstoresamount', amount.food)
  html.setinnerhtml('woodstoresamount', amount.wood)
  html.setinnerhtml('stonestoresamount', amount.stone)
  html.setinnerhtml('sciencestoresamount', amount.science)
  html.setinnerhtml('farmer.amount', worker.farmer.amount)
  html.setinnerhtml('woodcutter.amount', worker.woodcutter.amount)
  html.setinnerhtml('miner.amount', worker.miner.amount)
  html.setinnerhtml('miner.amount', worker.scientistamount)
  population.hunger = ((worker.hunger * (population.total - 1)) + 0)
}

function save() {
 resourcesave = {
   food: amount.food,
   stone: amount.stone,
   wood: amount.wood,

 }
}

paneSelect('village')

function dev() {
  amount.food = 10000000000;
  amount.stone = 10000000000;
  amount.wood = 10000000000;
  population.freespace = 10000000000;
}

function paneSelect(name) {
  calculate()
  if (name == 'village') {
    document.getElementById('villagepane').style.display = 'block';
    document.getElementById('townhallpane').style.display = 'none';
    document.getElementById('labpane').style.display = 'none';
    document.getElementById('placeholderpane').style.display = 'none';
    document.getElementById('tradepane').style.display = 'none';
    document.getElementById('selectvillage').className = 'paneSelector selected';
    document.getElementById('selecttownhall').className = 'paneSelector';
    document.getElementById('selectlab').className = 'paneSelector';
    document.getElementById('selectplaceholder').className = 'paneSelector';
    document.getElementById('selecttrade').className = 'paneSelector';
  }
  if (name == 'townhall') {
    document.getElementById('villagepane').style.display = 'none';
    document.getElementById('townhallpane').style.display = 'block';
    document.getElementById('labpane').style.display = 'none';
    document.getElementById('placeholderpane').style.display = 'none';
    document.getElementById('tradepane').style.display = 'none';
    document.getElementById('selectvillage').className = 'paneSelector';
    document.getElementById('selecttownhall').className = 'paneSelector selected';
    document.getElementById('selectlab').className = 'paneSelector';
    document.getElementById('selectplaceholder').className = 'paneSelector';
    document.getElementById('selecttrade').className = 'paneSelector';
  }
  if (name == 'lab') {
    document.getElementById('villagepane').style.display = 'none';
    document.getElementById('townhallpane').style.display = 'none';
    document.getElementById('labpane').style.display = 'block';
    document.getElementById('placeholderpane').style.display = 'none';
    document.getElementById('tradepane').style.display = 'none';
    document.getElementById('selectvillage').className = 'paneSelector';
    document.getElementById('selecttownhall').className = 'paneSelector';
    document.getElementById('selectlab').className = 'paneSelector selected';
    document.getElementById('selectplaceholder').className = 'paneSelector';
    document.getElementById('selecttrade').className = 'paneSelector';
  }
  if (name == 'placeholder') {
    document.getElementById('villagepane').style.display = 'none';
    document.getElementById('townhallpane').style.display = 'none';
    document.getElementById('labpane').style.display = 'none';
    document.getElementById('placeholderpane').style.display = 'block';
    document.getElementById('tradepane').style.display = 'none';
    document.getElementById('selectvillage').className = 'paneSelector';
    document.getElementById('selecttownhall').className = 'paneSelector';
    document.getElementById('selectlab').className = 'paneSelector';
    document.getElementById('selectplaceholder').className = 'paneSelector selected';
    document.getElementById('selecttrade').className = 'paneSelector';
  }
  if (name == 'trade') {
    document.getElementById('villagepane').style.display = 'none';
    document.getElementById('townhallpane').style.display = 'none';
    document.getElementById('labpane').style.display = 'none';
    document.getElementById('placeholderpane').style.display = 'none';
    document.getElementById('tradepane').style.display = 'block';
    document.getElementById('selectvillage').className = 'paneSelector';
    document.getElementById('selecttownhall').className = 'paneSelector';
    document.getElementById('selectlab').className = 'paneSelector';
    document.getElementById('selectplaceholder').className = 'paneSelector';
    document.getElementById('selecttrade').className = 'paneSelector selected';
  }
  calculate()
}

function prettify(input) {
  var output = Math.round(input * 1000000) / 1000000;
  return output;
}

function gather(type, number) {
  switch (type) {
    case 'food':
      calculate()
      amount.food += number;
      calculate()
      break;
    case 'food':
      calculate()
      amount.wood += number;
      calculate()
      break;
    case 'stone':
      calculate()
      amount.stone += number;
      calculate()
      break;
    case 'science':
      calculate()
      amount.science += number;
      calculate()
      break;
  }
}

function buildsmallhouse(number) {
  calculate()
  if (amount.wood >= buildings.house.cost.wood * number && amount.stone >= buildings.house.cost.stone * number) {
    population.freespace += (buildings.housefreespace * number);
    buildings.houseamount += number;
  }
  calculate()
}

function hire(type, number) {
  calculate()
  if (type == 'worker') {
    if (population.freespace >= number && amount.food * number >= worker.cost.food * number) {
      population.freespace -= number
      population.unemployed += number
    }
  }
  if (population.unemployed >= number) {
    switch (type) {
      case 'farmer':
        calculate()
        if (amount.food >= worker.farmer.cost.food * number) {
          worker.farmer.amount += number;
          html.setinnerhtml('farmer.amount', worker.miner.amount)
        };
        calculate()
        break;
      case 'woodcutter':
        calculate()
        if (amount.food >= worker.woodcutter.cost.food) {
          worker.woodcutter.amount += number;
          html.setinnerhtml('woodcutter.amount', worker.miner.amount)
        };
        calculate()
        break;
      case 'miner':
        calculate()
        if (amount.food >= worker.miner.cost.food) {
          worker.miner.amount += number;
          etinnerhtml('miner.amount', worker.miner.amount)
        };
        calculate()
        break;
      case 'builder':
        calculate()
        if (amount.food >= builder.cost.food && amount.wood >= builder.cost.wood && stoneamount.food >= builder.cost.stone && freespace) {
          builder.amount += number;
          html.setinnerhtml('builder.amount', worker.miner.amount)
        } else {

        }
        calculate()
        break;
      default:

    };
  };
};

calculate()

window.setInterval(function() {

  calculate()
  gather('food', ((worker.farmer.gather * worker.farmer.amount) - population.hunger))
  gather('wood', (worker.woodcutter.gather * worker.woodcutter.amount))
  gather('stone', (worker.miner.gather * worker.miner.amount))
  calculate()

}, 1000);
