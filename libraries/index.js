var pi = Math.PI
var picometer = 0.000000000001
var nanometer = 0.000000001
var micrometer = 0.000001
var millimeter = 0.001
var centimeter = 0.01
var decimeter = 0.1
var meter = 1
var decameter = 10
var hectometer = 100
var kilometer = 1000
var megameter = 1000000
var gigameter = 1000000000
var terameter = 1000000000000
var inch = 39.3701
var foot = 3.28084
var yard = 1.09362
var mile = 1609.34
var sqAcre = 4046.86
var sqHectare = 10000
var celsius = 1
var kelvin = -273
var fahrenhiet = 33.8
var a = 0
var b = 0
var c = 0

function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}
Number.prototype.add = function(input) {
  if (isArray(this)) {
    for (var i = 0; i < this.length; i++) {
      this += this[i]
    }
  } else {
    this += this
  }
}
Number.prototype.subtract = function() {
  if (isArray(this)) {
    for (var i = 0; i < this.length; i++) {
      this -= this[i]
    }
  } else {
    this -= this
  }
}
Number.prototype.multipy = function() {
  if (isArray(this)) {
    for (var i = 0; i < this.length; i++) {
      this *= this[i]
    }
  } else {
    this *= this
  }
}
Number.prototype.divide = function() {
  if (isArray(this)) {
    for (var i = 0; i < this.length; i++) {
      this /= this[i]
    }
  } else {
    this /= this
  }
}
Array.prototype.min = function() {
  return Math.min.apply(null, this)
};
Array.prototype.max = function() {
  return Math.max.apply(null, this)
};
Number.prototype.circumference = function(type) {
  switch (type.toLowerCase()) {
    case 'radius':
      this = this * 2 * pi
      break;
    case 'diameter':
      this = this * pi
      break;
    case 'area':
      this = Math.sqrt(this / pi) * 2 * pi
      break;
    case 'circumference':
      this = this
      break;
  }
}
Number.prototype.area = function(type) {
  switch (type.toLowerCase()) {
    case 'radius':
      this = Math.pow(this, 2) * pi
      break;
    case 'diameter':
      this = Math.pow((this / 2), 2) * pi
      break;
    case 'area':
      this = this
      break;
    case 'circumference':
      this = Math.pow((this / pi / 2), 2)
      break;
  }
}
Number.prototype.diameter = function(type) {
  switch (type.toLowerCase()) {
    case 'radius':
      this = this * 2
      break;
    case 'diameter':
      this = this
      break;
    case 'area':
      this = Math.sqrt(this / pi) * 2
      break;
    case 'circumference':
      this = this / pi
      break;
  }
}
Number.prototype.diameter = function(type) {
  switch (type.toLowerCase()) {
    case 'radius':
      this = this
      break;
    case 'diameter':
      this = this / 2
      break;
    case 'area':
      this = Math.sqrt(this / pi)
      break;
    case 'circumference':
      this = (this / pi) / 2
      break;
  }
}
Number.prototype.convert = function(type1, type2) {
  this = ([type2] / [type1]) * this
}
