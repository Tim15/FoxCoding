var 

var person = {
  damage: 1,
  totalHP: 1,
  hp: 1,
  lvl: 1
};
var fist = {
  dmg: 1,
  Weight: 0,
  cooldown: 0.5,
};
var stick = {
  dmg: 2,
  weight: 1,
  cooldown: 2,
};
var knife = {
  dmg: 3,
  weight: 2,
  cooldown: 4,
};
var spear = {
  dmg: 4,
  weight: 3,
  cooldown: 6,
};
var sword = {
  dmg: 5,
  weight: 4,
  cooldown: 8,
};
var axe = {
  dmg: 6,
  weight: 5,
  cooldown: 10,
};
var opponent = {
  type: '',
  hp: 0,
  dmg: 0,
  lvl: 0,
  maxspeed: 0,
  minspeed: 0,
  done: 0
};

var num = 0;
var i;
var weapons = [fist];
var cooldown = 0;
var type;
var x;
var fight = false;
var world = []
var row = [];
var land = '';

function a(a, b, c) {
  if (x < 0.61) {
    i = a
  } else if (x < 0.86) {
    i = b
  } else {
    i = c
  }
}

function b() {
  if (x < 0.21) {
    i = ';'
  } else if (x < 0.61) {
    i = ','
  } else {
    i = '.'
  }
}

if (true) {
  function check() {
    if (person.hp <= 0) {
      fight = false;
    } else if (opponent.hp < 0) {
      fight = false;
    } else {
      fight = true;
    }
    document.getElementById('youCalc').innerHtml = 'Health:' + person.hp + '<br>' + 'Damage:' + person.dmg;
    document.getElementById('themCalc').innerHtml = 'Health:' + opponent.hp + '<br>' + 'Done:' + opponent.done + '<br>' + 'Damage:' + opponent.dmg
  }

  function createworld() {
    for (var i = 0; i < 20; i++) {
      for (var i = 0; i < 20; i++) {
        x = Math.random().toFixed(2)
        if (row.length = 0) {
          b()
        } else if (world.length >= 1 && world.length <= 21) {
          if (row[row.length - 1] == ';') {
            a(';', ',', '.')
          } else if (row[row.length - 1] == ',') {
            a(',', '.', ';')
          } else {
            a('.', ',', ';')
          }
        }
        row.push(x)
      }
      for (var i = 0; i < row.length; i++) {
        world.push(row[i]);
      }
      row = [];
    }
    for (var i = 0; i < world.length; i++) {
    document.getElementById('world').innerHTML += world[i]
    }
  }

  function calculateOpponent() {
    check()
      //type = Math.floor((Math.random() * 10) + 1);
    switch (type) {
      case '1':
        opponent.type = 'PLACE HOLDER';
        opponent.maxspeed = 6;
        opponent.minspeed = 4;
        opponent.dmg = 3
        opponent.hp = 5
        break;
      case '2':
        opponent.type = 'PLACE HOLDER';
        opponent.maxspeed = 6;
        opponent.minspeed = 4;
        opponent.dmg = 3
        opponent.hp = 5
        break;
      case '3':

        break;
    }
    console.log(opponent.type + '|' +
      opponent.maxspeed + '|' +
      opponent.minspeed + '|' +
      opponent.dmg + '|' +
      opponent.hp)
    check()
  }

  function get(weapon) {
    check()
    weapons.push(weapon);
    check()
  }

  function deal() {
    check()
    num = 0
    person.dmg = 0
    for (i = 0; i < weapons.length; i++) {
      person.dmg += weapons[num].dmg;
      num++;
    }
    if (fight == true) {
      if (cooldown == 0) {
        opponent.hp -= person.dmg;
      }
      num = 0;
      person.cooldown = 0
      for (i = 0; i < weapons.length; i++) {
        cooldown += weapons[num].cooldown;
        num++;
      }
    }
    check()
  }

  function engage() {
    check()
    fight = true
    person.hp = person.totalHP
    x = Math.random()
    check()
  }
}
window.setInterval(function() {
  check()
  if (cooldown > 0) {
    cooldown -= 1;
  }
  if (fight == true) {
    if (opponent.done == 0) {
      person.hp -= opponent.dmg;
      x = Math.random()
      if (x < 0.3) {
        opponent.done = opponent.minspeed;
      } else if (x < 0.7) {
        opponent.done = (opponent.minspeed + (opponent.maxspeed - opponent.minspeed));
      } else {
        opponent.done = opponent.maxspeed;
      }
    } else {
      opponent.done -= 1
    }
  }
  check()
}, 1000);
