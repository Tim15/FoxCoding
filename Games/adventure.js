var i = 0;
var x = 0;
var id = ['wood', 'food', 'stone']
var amount = {
  wood: 0,
  stone: 0,
  food: 0,
}
var gather = {
  wood: 1,
  stone: 0.5,
  food: 1,
}
var distanceTraveled = 0

function calculate() {
    //document.getElementById('wood').innerHTML = amount.wood
}

function paneSelect(name) {
  calculate()
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
  calculate()
}

function gather(type, num) {
    switch (type) {
      case 'wood':
        amount.wood += num
      break;
      case 'food':
        amount.food += num
      break;
      case 'stone':
        amount.stone += num
      break;
      case '':

      break;
      case '':

      break;
      case '':

      break;
      case '':

      break;
    }
}

function buy(type, num, pricenum, pricetype) {
  x = 0
  for (i = 0; i < pricenum.length; i++) {
    if (pricetype[i] >= pricenum[i]) {
      x++
    }
  }

  if (x == pricenum.length) {
    type += num
  }
}
window.onload = function(){
  paneSelect('cave')
}
window.setInterval(function () {

}, 1000);
