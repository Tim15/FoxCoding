var i = 0;
var x = 0;
var id = ['wood', 'food', 'stone'];
var amount = {
  wood: 0,
  stone: 0,
  food: 0,
};
var gather = {
  wood: 1,
  stone: 0.5,
  food: 1,
};
var distanceTraveled = 0;

function check() {
  document.getElementById('wood-amount').innerHTML = amount.wood;
  document.getElementById('food-amount').innerHTML = amount.food;
  document.getElementById('stone-amount').innerHTML = amount.stone;
    //document.getElementById('event ').display = 'none'
}

function dev() {
  amount.stone = 100000;
  amount.wood = 100000;
  amount.food = 100000;
  check();
}

function paneSelect(name) {
  check();
  if (name == 'cave') {
    document.getElementById('cavepane').style.display = 'block';
    document.getElementById('camppane').style.display = 'none';
    document.getElementById('worldpane').style.display = 'none';
    document.getElementById('villagespane').style.display = 'none';
    document.getElementById('tradepane').style.display = 'none';
    document.getElementById('selectcave').className = 'paneSelector selected';
    document.getElementById('selectcamp').className = 'paneSelector nextOnRight';
    document.getElementById('selectworld').className = 'paneSelector';
    document.getElementById('selectvillages').className = 'paneSelector';
    document.getElementById('selecttrade').className = 'paneSelector';
  }
  if (name == 'camp') {
    document.getElementById('cavepane').style.display = 'none';
    document.getElementById('camppane').style.display = 'block';
    document.getElementById('worldpane').style.display = 'none';
    document.getElementById('villagespane').style.display = 'none';
    document.getElementById('tradepane').style.display = 'none';
    document.getElementById('selectcave').className = 'paneSelector nextOnLeft';
    document.getElementById('selectcamp').className = 'paneSelector selected';
    document.getElementById('selectworld').className = 'paneSelector nextOnRight';
    document.getElementById('selectvillages').className = 'paneSelector';
    document.getElementById('selecttrade').className = 'paneSelector';
  }
  if (name == 'world') {
    document.getElementById('cavepane').style.display = 'none';
    document.getElementById('camppane').style.display = 'none';
    document.getElementById('worldpane').style.display = 'block';
    document.getElementById('villagespane').style.display = 'none';
    document.getElementById('tradepane').style.display = 'none';
    document.getElementById('selectcave').className = 'paneSelector';
    document.getElementById('selectcamp').className = 'paneSelector nextOnLeft';
    document.getElementById('selectworld').className = 'paneSelector selected';
    document.getElementById('selectvillages').className = 'paneSelector nextOnRight';
    document.getElementById('selecttrade').className = 'paneSelector';
  }
  if (name == 'villages') {
    document.getElementById('cavepane').style.display = 'none';
    document.getElementById('camppane').style.display = 'none';
    document.getElementById('worldpane').style.display = 'none';
    document.getElementById('villagespane').style.display = 'block';
    document.getElementById('tradepane').style.display = 'none';
    document.getElementById('selectcave').className = 'paneSelector';
    document.getElementById('selectcamp').className = 'paneSelector';
    document.getElementById('selectworld').className = 'paneSelector nextOnLeft';
    document.getElementById('selectvillages').className = 'paneSelector selected';
    document.getElementById('selecttrade').className = 'paneSelector nextOnRight';
  }
  if (name == 'trade') {
    document.getElementById('cavepane').style.display = 'none';
    document.getElementById('camppane').style.display = 'none';
    document.getElementById('worldpane').style.display = 'none';
    document.getElementById('villagespane').style.display = 'none';
    document.getElementById('tradepane').style.display = 'block';
    document.getElementById('selectcave').className = 'paneSelector';
    document.getElementById('selectcamp').className = 'paneSelector';
    document.getElementById('selectworld').className = 'paneSelector';
    document.getElementById('selectvillages').className = 'paneSelector nextOnLeft';
    document.getElementById('selecttrade').className = 'paneSelector selected';
  }
  check();
}

var gather = function(type, num) {
  check();
  switch (type) {
    case 'wood':
      amount.wood += num;
      break;
    case 'food':
      amount.food += num;
      break;
    case 'stone':
      amount.stone += num;
      break;
  }
  check();
};

function buy(type, num, pricenum, pricetype) {
  check();
  x = 0;
  for (i = 0; i < pricenum.length; i++) {
    if (pricetype[i] >= pricenum[i]) {
      pricetype[i] -= pricenum[i] * num;
      x++;
    }
  }

  if (x == pricenum.length) {
    type += num;
  } else {
    console.log('sorry');
  }
  x = 0;
  check();
}

function event(type, other) {
  check();
  x = 0;
  if (type == 'random') {
    x = Math.random();
    if (x < 0.05) {
      say('A desprete wanderer', 'A poor traveler desprete for food, money, and lodgings offers to teach you ', ['Get wood', 'Get stone'], []);
    }
  } else {
    switch (type) {
      case 'not enough':
        say('You don\'t');
        break;
    }
  }
  x = 0;
  check();
}

function say(title, discription, buttontitles, buttonworkings) {
  x = [];
  for (var i = 0; i < buttontitles.length; i++) {
    x.push('<button onclick="' + buttonworkings[i] + '">' + buttontitles[i] + '</button>');
  }
  document.getElementById('event').innerHTML = '<h3>' + title + '</h3>\n<br>\n<p>' + discription + '</p>\n<br>\n<br>' + x + '';
}
window.onload = function() {
  paneSelect('cave');
  check();
  //gather('wood', 1);
};
window.setInterval(function() {

}, 1000);
