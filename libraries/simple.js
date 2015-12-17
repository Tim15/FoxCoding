String.prototype.allReplace = function(obj) {
  var retStr = this;
  for (x in obj) {
    retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
  }
  return retStr;
};

function For(condition, interval, code) {
  for (var i = 0; condition; interval) {
    code
  }
}

function If(condition, code) {
  if (condition) {
    code
  }
}

function Ifelse(condition, code1, code2) {
  if (condition) {
    code1
  } else {
    code2
  }
}

function Elseif(conditions, code) {
  if (conditions[0]) {
    code[0]
  }
  for (var i = 1; i < conditions.length; i++) {
    conditions[i]
  }
}

function While(condition, code) {
  while (condition) {
    code
  }
}

function Switch(object, conditions, code) {
  for (var i = 0; i < conditions.length; i++) {
    if (conditions[i] == object) {
      code[i]
    }
  }
}

function Calculate(input) {
  a = input.replace(/abs/g, "Math.abs");
  a = a.replace(/acos/g, "Math.acos");
  a = a.replace(/asin/g, "Math.asin");
  a = a.replace(/atan/g, "Math.atan");
  a = a.replace(/atan2/g, "Math.atan2");
  a = a.replace(/ceil/g, "Math.ceil");
  a = a.replace(/cos/g, "Math.cos");
  a = a.replace(/exp/g, "Math.exp");
  a = a.replace(/floor/g, "Math.floor");
  a = a.replace(/log/g, "math.log");
  a = a.replace(/max/g, "Math.max");
  a = a.replace(/min/g, "Math.min");
  a = a.replace(/pow/g, "Math.pow");
  a = a.replace(/random/g, "Math.random");
  a = a.replace(/round/g, "Math.round");
  a = a.replace(/sin/g, "Math.sin");
  a = a.replace(/sqrt/g, "Math.sqrt");
  a = a.replace(/tan/g, "Math.tan");
  a = a.replace(/E/g, "Math.E");
  a = a.replace(/e/g, "Math.E");
  a = a.replace(/pi/g, "Math.PI");
  a = a.replace(/Pi/g, "Math.PI");
  a = a.replace(/PI/g, "Math.PI");

  var output = eval(a);
  return output;
}

function wait(length, code) {
  setTimeout(function() {
    code
  }, length);
}

function toRegexp(input) {
  var edit = input.allReplace({
    ')or(': '|',
    'anything in[': '[',
    'not in[': '[^',
    ' to ': '-',
    ' between ': '.',
    'non-letter or num': '\\W',
    'letter or num': '\\w',
    'non-number': '\\D'
    'number': '\\d',
    'non-whitespace': '\\S',
    'whitespace': '\\s',
    'non-begining or end': '\\B',
    'begining or end': '\\b',
    'NUL-': '\\',
    'newline': '\\n',
    'form feed': '\\f',
    'vertical tab': '\\v',
    'tab': '\\t',
    'oct Char-': '\\',
    'hex Char-': '\\x',
    'unicode Char-': '\\u',
    'with at least one': '+',
    'with at least zero': '*',
    'with one or zero': '?',
    ' times{': '{',
    'at the end': '$',
    'in the begining': '^',
    'Is foolowed by': '?=',
    'Is not foolowed by': '?!'
  });
  return new RegExp(edit);
}
