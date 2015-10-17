var food = {
    amount: 0,
    upgrade: 1,
    upgradecost: 50,
};
var drone = {
    amount: 0,
    gather: 0,
    cost: 10,
    fps: 0,
    upgrade: 1,
    upgradecost: 50,
};
var hive = 0;
var hiveup = 1;
var hivefps;
var hivecost = 100;

function calculate() {
  drone.fps = drone.upgrade  * drone.amount;
  document.getElementById('dronefoodps').innerHTML = drone.fps;
  document.getElementById('hivedroneps').innerHTML = hiveup * hive;
  drone.gather = prettify(drone.amount * food.upgrade)
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

function buycart(number) {
  if (food.amount >= food.upgradecost) {
    food.upgrade = food.upgrade + number;
    food.amount = food.amount - food.upgradecost;
    document.getElementById('food').innerHTML = food.amount;
    calculate()
  };
};

function buydrone(number) {
  if (food.amount >= drone.cost) {
    drone.amount = drone.amount + number;
    food.amount = food.amount - drone.cost;
    document.getElementById('food').innerHTML = food.amount;
    document.getElementById('drone').innerHTML = drone.amount;
    calculate()
  };
};

function hatchdrone(number) {
  drone.amount = drone.amount + number;
  document.getElementById('drone').innerHTML = drone.amount;
  calculate()
};

function buyhive(number) {
  if (food.amount >= hivecost) {
    hive = hive + number;
    food.amount = food.amount - hivecost;
    document.getElementById('food').innerHTML = food.amount;
    document.getElementById('hive').innerHTML = hive;
    calculate()
  };
};
window.setInterval(function() {

  calculate()
  gatherfood(drone.gather);
  hatchdrone(hive);

}, 1000);

/*var nextCost = Math.floor(10 * Math.pow(1.1,food));
document.getElementById('cursorCost').innerHTML = nextCost;*/
