//*******************************************************************************
//*******************************************************************************
//****************************Resources******************************************
//*******************************************************************************
//*******************************************************************************
var value;
var resourcesave;

var population = {
  total: 1,
  freespace: 0,
  employed: 0,
  unemployed: 0,
  hunger: 0,
};

var amount = {
  science: 0,
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
  spears: 0,
  swords: 0,
  crudestonetools: 0,
  basicstonetools: 0,
  advancedstonetools: 0,
  crudeirontools: 0,
  basicirontools: 0,
  advancedstonetools: 0,
};

var buildings = {
  tent: {
    amount: 0,
    cost: {
      wood: 5,
      skins: 7
    },
    freespace: 1
  },
  house: {
    amount: 0,
    cost: {
      wood: 20,
      stone: 10
    },
    freespace: 2
  }
};

var worker = {
  amount: 0,
  cost: {
    food: 20
  },
  hunger: 0.5,
  farmer: {
    amount: 0,
    cost: {
      food: 25,
    },
    gather: 1,
  },
  woodcutter: {
    amount: 0,
    cost: {
      food: 25,
    },
    gather: 0.75,
  },
  miner: {
    amount: 0,
    cost: {
      food: 25
    },
    gather: 0.5,
  },
  scientist: {
    amount: 0,
    gather: 1
  },
  builder: {
    amount: 0,
    cost: {
      food: 25,
      wood: 10,
      stone: 5
    },
    gather: 0.5,
  }
};
//*******************************************************************************
//*******************************************************************************
//****************************BASE FUNCTIONS*************************************
//*******************************************************************************
//*******************************************************************************


function calculate() {
  for (var i = 0; i < woodcutteramount.length; i++) {
    document.getElementsByClassName('farmeramount')[i].innerHTML = worker.farmer.amount;
    document.getElementsByClassName('woodcutteramount')[i].innerHTML = worker.woodcutter.amount;
    document.getElementsByClassName('mineramount')[i].innerHTML = worker.miner.amount;
    document.getElementsByClassName('smelteramount')[i].innerHTML = worker.smelter.amount;
  };
  document.getElementsByClassName('scienceamount')[i].innerHTML = amount.science;
  document.getElementsByClassName('foodamount')[i].innerHTML = amount.food;
  document.getElementsByClassName('woodamount')[i].innerHTML = amount.wood;
  document.getElementsByClassName('stoneamount')[i].innerHTML = amount.stone;
  document.getElementsByClassName('herbsamount')[i].innerHTML = amount.herbs;
  document.getElementsByClassName('oreamount')[i].innerHTML = amount.ore;
  population.hunger = ((worker.hunger * (population.total - 1)) + 0)
}

function save() {
  resourcesave = amount
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
    case 'wood':
      calculate()
      amount.wood += number;
      calculate()
      break;
    case 'stone':
      calculate()
      amount.stone += number;
      calculate()
      break;
    case 'ore':
      calculate()
      amount.ore += number;
      calculate()
      break;
    case 'skins':
      calculate()
      amount.skins += number;
      calculate()
      break;
    case 'iron':
    calculate()
    amount.iron += number
    calculate()
    break;
    case 'science':
      calculate()
      amount.science += number;
      calculate()
      break;
  }
}

function build(type, number) {
  calculate()
  switch (type) {
    case 'tent':
      if (amount.wood >= buildings.tent.cost.wood && amount.skins >= buildings.tent.cost.skins) {
        buildings.tent.amount
      }
      break;
    case 'smallhouse':
    if (amount.wood >= buildings.house.cost.wood * number && amount.stone >= buildings.house.cost.stone * number) {
      population.freespace += (buildings.housefreespace * number);
      buildings.houseamount += number;
    }
      break;
    case '':
      break;
  }
  calculate()
}

function hire(type, number) {
  calculate()
  if (type == 'worker') {
    if (population.freespace >= number && amount.food >= worker.cost.food * number) {
      worker.amount += number
      population.freespace -= number
      population.unemployed += number
    }
  }
  if (population.unemployed >= number) {
    switch (type) {
      case 'farmer':
        calculate()
        if (amount.food >= worker.farmer.cost.food * number && worker.amount) {
          population.unemployed -= number
          worker.farmer.amount += number;
        };
        calculate()
        break;
      case 'woodcutter':
        calculate()
        if (amount.food >= worker.woodcutter.cost.food) {
          population.unemployed -= number
          worker.woodcutter.amount += number;
        };
        calculate()
        break;
      case 'miner':
        calculate()
        if (amount.food >= worker.miner.cost.food) {
          population.unemployed -= number
          worker.miner.amount += number;
        };
        calculate()
        break;
      case 'builder':
        calculate()
        if (amount.food >= worker.builder.cost.food && amount.wood >= worker.builder.cost.wood && stoneamount.food >= worker.builder.cost.stone && freespace) {
          population.unemployed -= number
          worker.builder.amount += number;
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
