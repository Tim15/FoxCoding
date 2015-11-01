var population = {
  total: 1,
  freespace: 0,
  employed: 0,
  unemployed: 0,
  hunger: 0,
}

var science = {
  amount: 0
}

var stone = {
  amount: 0,
};

var food = {
  amount: 0,
};

var wood = {
  amount: 0,
}

var tent = {
  amount: 0,
  cost: {
    wood: 5,
    skins: 7
  },
  freespace: 1,
}

var house = {
  amount: 0,
  cost: {
    wood: 20,
    stone: 10
  },
  freespace: 2,
}

var worker = {
  cost: {
    food: 20,
  },
  hunger: 0.5,
}

var farmer = {
  amount: 0,
  cost: {
    food: 25,
  },
  gather: 1,
}

var woodcutter = {
  amount: 0,
  cost: {
    food: 25,
  },
  gather: 0.75,
}

var miner = {
  amount: 0,
  cost: {
    food: 25,
  },
  gather: 0.5,
}

var scientist = {
  amount: 0,
  
}

var builder = {
  amount: 0,
  cost: {
    food: 25,
    wood: 10,
    stone: 5
  },
  gather: 0.5,
}

function hi() {
  this.innerHTML = this.innerHTML + 1;
}



function calculate() {
  setinnerhtml('foodstoresamount', food.amount)
  setinnerhtml('woodstoresamount', wood.amount)
  setinnerhtml('stonestoresamount', stone.amount)
  setinnerhtml('sciencestoresamount', science.amount)
  setinnerhtml('farmeramount', farmer.amount)
  setinnerhtml('woodcutteramount', woodcutter.amount)
  setinnerhtml('mineramount', miner.amount)
  setinnerhtml('mineramount', scientist.amount)
  population.hunger = ((worker.hunger * (population.total - 1)) + 0)
}

function setinnerhtml(id, value) {
  document.getElementById('id').innerHTML = value;
}


paneSelect('village')

function dev() {
  food.amount = 10000000000;
  stone.amount = 10000000000;
  wood.amount = 10000000000;
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
      food.amount += number;
      calculate()
      break;
    case 'food':
      calculate()
      wood.amount += number;
      calculate()
      break;
    case 'stone':
      calculate()
      stone.amount += number;
      calculate()
      break;
    case 'science':
      calculate()
      science.amount += number;
      calculate()
      break;
  }
}

function buildsmallhouse(number) {
  calculate()
  if (wood.amount >= house.cost.wood * number && stone.amount >= house.cost.wood * number) {
    population.freespace += (house.freespace * number);
    house.amount += number;
  }
  calculate()
}

function hire(type, number) {
  calculate()
  if (type == 'worker') {
    if (population.freespace >= number && food.amount * number >= worker.cost.food * number) {
      population.freespace -= number
      population.unemployed += number
    }
  }
  if (population.unemployed >= number) {
    switch (type) {
      case 'farmer':
        calculate()
        if (food.amount >= farmer.cost.food * number) {
          farmer.amount += number;
          setinnerhtml('mineramount', miner.amount)
          document.getElementById('farmeramount').innerHTML = farmer.amount;
        };
        calculate()
        break;
      case 'woodcutter':
        calculate()
        if (food.amount >= woodcutter.cost.food) {
          woodcutter.amount += number;
          setinnerhtml('mineramount', miner.amount)
          document.getElementById('woodcutteramount').innerHTML = woodcutter.amount;
        };
        calculate()
        break;
      case 'miner':
        calculate()
        if (food.amount >= miner.cost.food) {
          miner.amount += number;
          etinnerhtml('mineramount', miner.amount)
        };
        calculate()
        break;
      case 'builder':
        calculate()
        if (food.amount >= builder.cost.food && wood.amount >= builder.cost.wood && stonefood.amount >= builder.cost.stone && freespace) {
          builder.amount += number;
          setinnerhtml('mineramount', miner.amount)
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
  gather('food', ((farmer.gather * farmer.amount) - population.hunger))
  gather('wood', (woodcutter.gather * woodcutter.amount))
  gather('stone', (miner.gather * miner.amount))
  calculate()

}, 1000);
