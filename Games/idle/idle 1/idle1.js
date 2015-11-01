var unit = {
    amount: 0,
};
var intevalspeed = 1000

function calculate() {
document.getElementById('unitamount').innerHTML = unit.amount
}

function prettify(input) {
  var output = Math.round(input * 1000000) / 1000000;
  return output;
}

function getunit(number) {
  unit.amount = unit.amount + number;
  document.getElementById("unitamount").innerHTML = unit.amount;
  calculate()
};

window.setInterval(function() {

  calculate()

}, 1000);

/*var nextCost = Math.floor(10 * Math.pow(1.1,unit));
document.getElementById('cursorCost').innerHTML = nextCost;*/
