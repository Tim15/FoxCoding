var food = {
  amount: 10,
  upgrade: 1,
};
var wood = {
  amount: 10,
  upgrade: 1,
};
var stone = {
  amount: 10,
  upgrade: 1,
};
var leaf = {
  upgrade: 1,
  upgradecost: 50,
};
var field = {
  amount: 0,
  gather: 0,
  cost: {
    stone: 5,
    wood: 5,
    food: 10
  },
  fps: 0,
  upgrade: 1,
  upgradecost: 50,
};
var ljc = {
  amount: 0,
  gather: 0,
  cost: {
    stone: 2,
    wood: 10,
    food: 5
  },
  sps: 0,
  upgrade: 1,
  upgradecost: 50,
}
var mine = {
  amount: 0,
  gather: 0,
  cost: {
    stone: 2,
    wood: 10,
    food: 5
  },
  sps: 0,
  upgrade: 1,
  upgradecost: 50,
}
var builder = {
  amount: 0,
  gather: 0,
  cost: 100,
  fps: 0,
  upgrade: 1,
  upgradecost: 50,
};

document.getElementById("food").innerHTML = food.amount;
document.getElementById("wood").innerHTML = wood.amount;
document.getElementById("stone").innerHTML = stone.amount;

function calculate() {
  field.fps = field.upgrade * field.amount;
  field.fps = field.upgrade * field.amount;
  field.fps = field.upgrade * field.amount;
  document.getElementById("food").innerHTML = food.amount;
  document.getElementById("wood").innerHTML = wood.amount;
  document.getElementById("stone").innerHTML = stone.amount;
  document.getElementById("field").innerHTML = field.amount;
  document.getElementById("ljc").innerHTML = ljc.amount;
  document.getElementById("mine").innerHTML = mine.amount;
  document.getElementById("fieldfps").innerHTML = field.amount;
  document.getElementById("ljcwps").innerHTML = ljc.amount;
  document.getElementById("minesps").innerHTML = mine.amount;
  field.gather = prettify(field.amount);
  mine.gather = prettify(mine.amount);
  ljc.gather = prettify(ljc.amount);
}

function prettify(input) {
  var output = Math.round(input * 1000000) / 1000000;
  return output;
}

function gatherfood(number) {
  food.amount = food.amount + number;
  document.getElementById("food").innerHTML = food.amount;
  calculate()
};

function minestone(number) {
  stone.amount = stone.amount + number;
  document.getElementById("stone").innerHTML = stone.amount;
  calculate()
};

function chopwood(number) {
  wood.amount = wood.amount + number;
  document.getElementById("wood").innerHTML = wood.amount;
  calculate()
};

function buildmine(number) {
  if ((wood.amount * number) >= (mine.cost.wood * number) && (food.amount * number) >= (mine.cost.food * number) && (stone.amount * number) >= (mine.cost.stone * number)) {
    mine.amount = mine.amount * number;
    food.amount = food.amount - mine.cost.food;
    stone.amount = stone.amount - mine.cost.stone;
    wood.amount = wood.amount - mine.cost.wood;
    document.getElementById('wood').innerHTML = food.amount;
    document.getElementById('stone').innerHTML = stone.amount;
    document.getElementById('food').innerHTML = food.amount;
    document.getElementById('mine').innerHTML = mine.amount;
    calculate()
  };
};

function buyfield(number) {
  if ((wood.amount * number) >= (field.cost.wood * number) && (food.amount * number) >= (field.cost.food * number) && (stone.amount * number) >= (field.cost.stone * number)) {
    field.amount = field.amount * number;
    stone.amount = stone.amount - field.cost.stone;
    food.amount = food.amount - field.cost.food;
    wood.amount = wood.amount - field.cost.wood;
    document.getElementById('wood').innerHTML = food.amount;
    document.getElementById('stone').innerHTML = stone.amount;
    document.getElementById('food').innerHTML = food.amount;
    document.getElementById('field').innerHTML = field.amount;
    calculate()
  };
};

function constructcabin(number) {
  if ((wood.amount * number) >= (ljc.cost.wood * number) && (food.amount * number) >= (ljc.cost.food * number) && (stone.amount * number) >= (ljc.cost.stone * number)) {
    ljc.amount = ljc.amount * number;
    stone.amount = stone.amount - ljc.cost.stone;
    food.amount = food.amount - ljc.cost.food;
    wood.amount = wood.amount - ljc.cost.wood;
    document.getElementById('wood').innerHTML = wood.amount;
    document.getElementById('stone').innerHTML = stone.amount;
    document.getElementById('food').innerHTML = food.amount;
    document.getElementById('ljc').innerHTML = field.amount;
    calculate()
  };
};

window.setInterval(function() {

  calculate();
  gatherfood(field.gather);
  minestone(mine.gather);
  chopwood(ljc.gather)

}, 1000);

/*var nextCost = Math.floor(10 * Math.pow(1.1,food));
document.getElementById('cursorCost').innerHTML = nextCost;*/
