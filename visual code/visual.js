var answer = 0;
var array_data = [];
var min = 0;
var max = 0;

function fourBasic(type, input) {
  switch (type) {
    case 'a':
      for (var i = 1; i < input.length; i++) {
        input[0] += input[i]
      }
      answer = input[0]
      break;
    case 's':
      for (var i = 1; i < input.length; i++) {
        input[0] -= input[i]
      }
      answer = input[0]
      break;
    case 'm':
      for (var i = 1; i < input.length; i++) {
        input[0] *= input[i]
      }
      answer = input[0]
      break;
    case 'd':
      for (var i = 1; i < input.length; i++) {
        input[0] /= input[i]
      }
      answer = input[0]
      break;
  }
  answer = 0
}

function get_rand(type, min, max) {
  switch (type) {
    case 'arb':
    answer = Math.random() * (max - min) + min;
      break;
    case 'int':
    answer = Math.random() * (max - min) + min;
      break;
  }
  answer = 0;
}
