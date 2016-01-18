var amount = {
    wood: 0,
    stone: 0,
    food: 0,
  }
var workers = {}
var buildings = {}
var stats = {
  deaths: 0,
  population: 1,
  totalspace: 1,
  space: 0,
  achievements: [],
  totalHunger: 0,
  hunger: 0,
}
var world = {
  gatherAmount: {
    wood: 1,
    stone: 0.5,
    food: 1,
  },
  famine: false,
  famineTime: 0,
}
var saveData = []
var saveString = ''
var events = {

}
function save(){
  for (var x in amount) {
    saveData.push("amount." + x.toString() + ": " + amount[x].toString())
  }
  for (var x in workers) {
    saveData.push("workers." + x.toString() + ": " + workers[x].toString())
  }
  for (var x in buildings) {
    saveData.push("buildings." + x.toString() + ": " + buildings[x].toString())
  }
  for (var x in stats) {
    saveData.push("stats." + x.toString() + ": " + stats[x].toString())
  }
  window.saved = window.btoa(saveData.join(''))
}
function calc(){
  stats.space = stats.totalspace - (stats.population)
  stats.totalHunger = stats.population * (stats.hunger)
  if(world.famine == true){
    world.gatherAmount.food = 0.25
  }
  if(world.sickness == true){
    kill(1)
  }
}
function gather(type, input) {
  amount[type] += input
}
function build(type, input) {
  buildings[type] += input
}
function event(type) {
  var rav = []
  if (type == 'random') {

  } else {
    rav[0] = events.type.name
    rav[1] = events.type.description
  }
}
function kill(amount) {
  stats.deaths -= amount
  stats.deaths += amount
}
