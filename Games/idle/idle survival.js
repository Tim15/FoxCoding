var save;
var increment = 1000;

var amount = {
  food: 0,
  wood: 0,
  meat: 0,
  herbs: 0,
  skins: 0,
  stone: 0,
  coal: 0,
  iron: 0,
  gold: 0,
};

function update() {
  amount.food = amount.meat

};

function gather(type, number) {
  switch (type) {
    case 'food':

    break;
    case 'wood':
      amount.wood += number
    break;
    case 'stone':
      amount.wood += number
    break;
  };
}

window.setInterval(function() {

  update()

}, increment);
