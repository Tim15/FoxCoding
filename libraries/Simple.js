var add = {},
  pi = Math.PI,
  strConversions = {
    'picometer': {
      value: 0.000000000001,
      type: 'length/Distance'
    },
    'nanometer': {
      value: 0.000000001,
      type: 'length/Distance'
    },
    'micrometer': {
      value: 0.000001,
      type: 'length/Distance'
    },
    'millimeter': {
      value: 0.001,
      type: 'length/Distance'
    },
    'centimeter': {
      value: 0.01,
      type: 'length/Distance'
    },
    'decimeter': {
      value: 0.1,
      type: 'length/Distance'
    },
    'meter': {
      value: 1,
      type: 'length/Distance'
    },
    'decameter': {
      value: 10,
      type: 'length/Distance'
    },
    'hectometer': {
      value: 100,
      type: 'length/Distance'
    },
    'kilometer': {
      value: 1000,
      type: 'length/Distance'
    },
    'megameter': {
      value: 1000000,
      type: 'length/Distance'
    },
    'gigameter': {
      value: 1000000000,
      type: 'length/Distance'
    },
    'terameter': {
      value: 1000000000000,
      type: 'length/Distance'
    },
    'inch': {
      value: 0.0254,
      type: 'length/Distance'
    },
    'foot': {
      value: 0.3048,
      type: 'length/Distance'
    },
    'yard': {
      value: 0.9144,
      type: 'length/Distance'
    },
    'mile': {
      value: 1609.34,
      type: 'length/Distance'
    },
    'nautical mile': {
      value: 1852,
      type: 'length/Distance'
    },
    'sqPicometer': {
      value: 0.000000000001,
      type: 'area'
    },
    'sqNanometer': {
      value: 0.000000001,
      type: 'area'
    },
    'sqMicrometer': {
      value: 0.000001,
      type: 'area'
    },
    'sqMillimeter': {
      value: 0.001,
      type: 'area'
    },
    'sqCentimeter': {
      value: 0.01,
      type: 'area'
    },
    'sqDecimeter': {
      value: 0.1,
      type: 'area'
    },
    'sqMeter': {
      value: 1,
      type: 'area'
    },
    'sqDecameter': {
      value: 10,
      type: 'area'
    },
    'sqHectometer': {
      value: 100,
      type: 'area'
    },
    'sqKilometer': {
      value: 1000,
      type: 'area'
    },
    'sqMegameter': {
      value: 1000000,
      type: 'area'
    },
    'sqGigameter': {
      value: 1000000000,
      type: 'area'
    },
    'sqTerameter': {
      value: 1000000000000,
      type: 'area'
    },
    'sqInch': {
      value: 0.0254,
      type: 'area'
    },
    'sqFoot': {
      value: 0.3048,
      type: 'area'
    },
    'sqYard': {
      value: 0.9144,
      type: 'area'
    },
    'sqMile': {
      value: 1609.34,
      type: 'area'
    },
    'sqNautical mile': {
      value: 1852,
      type: 'area'
    },
    'sqAcre': {
      value: 4046.86,
      type: 'area'
    },
    'sqHectare': {
      value: 10000,
      type: 'area'
    },
    'celsius': {
      value: 1,
      type: 'temperature'
    },
    'kelvin': {
      value: -274.15,
      type: 'temperature'
    },
    'fahrenhiet': {
      value: 33.8,
      type: 'temperature'
    },
    'bit': {
      value: 1,
      type: 'data/storage'
    },
    'byte': {
      value: 0.125,
      type: 'data/storage'
    },
  },
  test,
  x,
  y,
  z,
  a = 0,
  b = 0,
  c = 0,
  monthLengths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

function isArray(myArray) {
  return Object.prototype.toString.call(myArray) === '[object Array]';
}

function findAtNum(input, numbers) {
  x = '';
  for (var i = 0; i < numbers.length; i++) {
    x = x + ((input + "").charAt(numbers[i])).toString();
  }
  return x
}

function allIndexOf(str, toSearch) {
  var pos, indices = [];
  for (pos = str.indexOf(toSearch); pos !== -1; pos = str.indexOf(toSearch, pos + 1)) {
    indices.push(pos);
  }
  return indices;
}

function replaceAll(input, obj) {
  var retStr = input.toString();
  for (x in obj) {
    retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
  }
  return retStr;
};

function encodeStringToBase(num, input) {
  if (((num & (num - 1) == 0) || num == 26)) {
    throw ': Base number not valid, use a power of two, or base 26'
  } else {
    if (num == 26) {
      return replaceAll(input, {
        'A': '1'
      })
    } else {
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
      var charCodes = []
      var index = ''
      var holder = []
      var stuff
      var ffuts = ''
      var bit = Math.log(num) / Math.log(2)
      for (var i = 0; i < input.length; i++) {
        charCodes.push(input.charCodeAt(i))
      }
      for (var i = 0; i < charCodes.length; i++) {
        ffuts = ''
        stuff = Number(charCodes[i]).toString(2).length % 8
        for (var j = 0; j < 8 - stuff; j++) {
          ffuts += '0'
        }
        index += ffuts + Number(charCodes[i]).toString(2)
      }
      var hi = new RegExp('.{1,' + bit.toString() + '}', 'g')
      holder = index.match(hi);
      ffuts = ''
      for (var i = 0; i < 6 - (holder[holder.length - 1].length % 6); i++) {
        ffuts += '0'
      }
      holder[holder.length - 1] += ffuts
      for (var i = 0; i < holder.length; i++) {
        holder[i] = parseInt(holder[i], 2)
        holder[i] = chars[holder[i]]
      }
      holder = holder.join('')
      stuff = holder.length % 4
      ffuts = ''
      for (var j = 0; j < stuff; j++) {
        ffuts += '='
      }
      holder += ffuts
      return holder
      console.log(holder);
    }
  }
}

//+------------------------------------------------------------------------------+
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//|+===========================XXX::::::::::::::::XXX===========================+|
//|+=##########################XXX::DATE LIBRARY::XXX##########################=+|
//|+===========================XXX::::::::::::::::XXX===========================+|
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//+------------------------------------------------------------------------------+



//+------------------------------------------------------------------------------+
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//|+===========================XXX:::::::::::::::::XXX==========================+|
//|+=##########################XXX::REGEX LIBRARY::XXX#########################=+|
//|+===========================XXX:::::::::::::::::XXX==========================+|
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//+------------------------------------------------------------------------------+

RegExp.prototype.setFlags = function(flags) {
  var arr = this.toString()
  arr = this.toString().replace(/\/(.+)\/((([igm])(?!.*\4))*)/g, '$2');
  this.val = this.toString().replace(/\/(.+)\/(([igm])(?!.*\1))*/g, '$1')
  return new RegExp(this.val, flags)
};
RegExp.prototype.addFlags = function(flags) {
  var arr = this.toString()
  arr = this.toString().replace(/\/(.+)\/((([igm])(?!.*\4))*)/g, '$2');
  this.val = this.toString().replace(/\/(.+)\/(([igm])(?!.*\1))*/g, '$1')
  for (var i = 0; i < flags.length; i++) {
    arr = arr + flags[i]
  }
  arr = arr.split('').sort().join('')
  var unique = '';
  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) == -1) {
      unique += arr[i];
    }
  }
  arr = unique;
  return new RegExp(this.val, arr)
};
RegExp.prototype.removeFlags = function(flags) {
  var arr = this.toString()
  arr = this.toString().replace(/\/(.+)\/((([igm])(?!.*\4))*)/g, '$2');
  this.val = this.toString().replace(/\/(.+)\/(([igm])(?!.*\1))*/g, '$1')
  for (var i = 0; i < flags.length; i++) {
    arr = arr.replace(flags[i], '')
  }
  return new RegExp(this.val, arr)
};
RegExp.prototype.getFlags = function() {
  var arr = this.toString()
  arr = this.toString().replace(/\/(.+)\/((([igm])(?!.*\4))*)/g, '$2');
  return arr
};
var Regex = function(input) {
  this.group = function(input) {
    return '(' + input + ')'
  },
  this.Set = function(input) {
    return '[' + input + ']'
  },
  this.NegatedSet = function(input) {
    return '[^' + input + ']'
  },
  this.range = function() {
    var arr = ''
    for (var i = 0; i < arguments.length; i += 2) {
      arr += arguments[i][i] + '-' + arguments[i][i + 1]
    }
    return '[' + arr + ']'
  },
  this.anyWord = function() {
    return '\\w'
  }
  this.anyNumber = function() {
    return '\\d'
  }
  this.anyWhitespace = function() {
    return '\\s'
  }
  this.anyCharacter = function() {
    return '.'
  }
  this.anyBoundry = function() {
    return '\\b'
  }
  this.notWord = function() {
    return '\\W'
  }
  this.notNumber = function() {
    return '\\D'
  }
  this.notWhitespace = function() {
    return '\\S'
  }
  this.notBoundry = function() {
    return '\\B'
  }
  this.nonCaptureGroup = function(input) {
    return '(?:' + input + ')'
  }
  this.negativeLookahead = function(input) {
    return '(?!' + input + ')'
  }
  this.escape = function(type, input) {
    switch (type.toLowerCase()) {
      case 'char':
      case 'character':
        return '\\' + input
        break;
      case 'octal':
      case 'oct':
        return '\\' + input
        break;
      case 'hex':
        return '\\x' + input
        break;
      case 'unicode':
        return '\\u' + input
        break;
      case 'control':
        return '\\c' + input.toUpperCase()
        break;
      case 'tab':
        return '\\t'
        break;
      case 'verticalTab':
        return '\\v'
        break;
      case 'lineFeed':
        return '\\n' + input.toUpperCase()
        break;
      case 'formFeed':
        return '\\f'
        break;
      case 'carriageReturn':
        return '\\r'
        break;
      case 'null':
        return '\\0'
        break;
    }
  }
  this.reference = function(input) {
    return '\\' + input
  }
  this.lookahead = function(input) {
    return '(?=' + input + ')'
  }
  this.beginning = function() {
    return '^'
  }
  this.end = function() {
    return '$'
  }
  this.oneOrMore = function() {
    return '+'
  }
  this.zeroOrMore = function() {
    return '*'
  }
  this.numToNum = function(val1, val2) {
    return '{' + val1 + ',' + val2 + '}'
  }
  this.numOrMore = function(val1) {
    return '{' + val1 + ',}'
  }
  this.oneOrZero = function(val1) {
    return '?'
  }
  this.or = function(val1) {
    return '|'
  }
}
var regex = new Regex

//+------------------------------------------------------------------------------+
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//|+==========================XXX::::::::::::::::::XXX==========================+|
//|+=#########################XXX::STRING LIBRARY::XXX#########################=+|
//|+==========================XXX::::::::::::::::::XXX==========================+|
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//+------------------------------------------------------------------------------+

String.prototype.goFrom = function(input) {
  if (isArray(this)) {

  } else {
    return this.toString().slice(input, input.length)
  }
};
String.prototype.goTo = function(input) {
  if (isArray(this)) {

  } else {
    return this.toString().slice(0, input)
  }
};
String.prototype.insertAt = function(input, val) {
  if (isArray(this)) {

  } else {
    if (val == undefined) {
      return this.toString() + input.toString()
    } else {
      return this.toString().replace(this.charAt(val), this.charAt(val) + input.toString())
    }
  }
};
String.prototype.charsFrom = function(val1, val2) {
  if (isArray(this)) {

  } else {
    if (val1 == undefined) {
      return this.split('')
    } else if (val2 == undefined) {
      return this.toString().slice(0, input).split('')
    } else {
      return this.toString().slice(val1, val2).split('')
    }
  }
};
String.prototype.wordsFrom = function(val1, val2) {
  if (isArray(this)) {

  } else {
    if (val1 == undefined) {
      return this.split(' ')
    } else if (val2 == undefined) {
      return this.toString().slice(0, input).split(' ')
    } else {
      return this.toString().slice(val1, val2).split(' ')
    }
  }
};
String.prototype.removeAt = function(val1, val2) {
  if (isArray(this)) {

  } else {
    if (val2 == undefined) {
      return this.toString().replace(this.toString().slice(val1, this.toString().length - 1), '')
    } else {
      return this.toString().replace(this.toString().slice(val1, val2), '')
    }
  }
};
String.prototype.every = function(regex) {
  if (isArray(this)) {

  } else {
    return this.toString().match(regex)
  }
};
String.prototype.encode = function(type, base) {
  if (isArray(this)) {

  } else {
    switch (type.toLowerCase().trim()) {
      case 'html':
        return replaceAll(this.toString(), {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '\"': '&quot;',
          '\'': '&apos;'
        });
        break;
      case 'url':
        return replaceAll(this.toString().encodeURI(this.toString()), {
          '[': '%5B',
          ']': '%5D'
        });
        break;
      case 'base64':
        return btoa(this.toString())
        break;
      case 'regex':
      case 'regexp':
        return this.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        break;
      case 'url':
        return replaceAll(this.toString().encodeURI(this.toString()), {
          '[': '%5B',
          ']': '%5D'
        });
        break;
      case 'morse':
        replaceAll(this.tostring(), {
          'A': '.-',
          'B': '-...',
          'C': '-.-.',
          'D': '-..',
          'E': '.',
          'F': '..-.',
          'G': '--.',
          'H': '....',
          'I': '..',
          'J': '.---',
          'K': '-.-',
          'L': '.-..',
          'M': '--',
          'N': '-.',
          'O': '---',
          'P': '.--.',
          'Q': '--.-',
          'R': '.-.',
          'S': '...',
          'T': '-',
          'U': '..-',
          'V': '...-',
          'W': '.--',
          'X': '-..-',
          'Y': '-.--',
          'Z': '--..',
          '0': '-----',
          '1': '.----',
          '2': '..---',
          '3': '...--',
          '4': '....-',
          '5': '.....',
          '6': '-....',
          '7': '--...',
          '8': '---..',
          '9': '----.',
        });
        break;
    }
  }
};
String.prototype.decode = function(type) {
  if (isArray(this)) {

  } else {
    switch (type.toLowerCase().trim()) {
      case 'html':
        return this.toString().replaceAll({
          '&lt;': '<',
          '&gt;': '>',
          '&amp;': '&',
          '&quot;': '\"',
          '&apos;': '\''
        });
        break;
      case 'url':
        return this.toString().decodeURI(this.toString()).replaceAll({
          '[': '%5B',
          ']': '%5D'
        });
        break;
      case 'base64':
        return atob(this.toString())
        break;
      case 'regexp':
      case 'regex':
        return this.replace(/\\([\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
        break;
      case 'morse':
        replaceAll(this.tostring(), {
          '.-': 'A',
          '-...': 'B',
          '-.-.': 'C',
          '-..': 'D',
          '.': 'E',
          '..-.': 'F',
          '--.': 'G',
          '....': 'H',
          '..': 'I',
          '.---': 'J',
          '-.-': 'K',
          '.-..': 'L',
          '--': 'M',
          '-.': 'N',
          '---': 'O',
          '.--.': 'P',
          '--.-': 'Q',
          '.-.': 'R',
          '...': 'S',
          '-': 'T',
          '..-': 'U',
          '...-': 'V',
          '.--': 'W',
          '-..-': 'X',
          '-.--': 'Y',
          '--..': 'Z',
          '-----': '0',
          '.----': '1',
          '..---': '2',
          '...--': '3',
          '....-': '4',
          '.....': '5',
          '-....': '6',
          '--...': '7',
          '---..': '8',
          '----.': '9'
        });
        break;
    }
  }
};
String.prototype.at = function() {
  if (isArray(this)) {

  } else {
    var arr = []
    for (var i = 0; i < arguments.length; i++) {
      arr.push(this.charAt(arguments[i]))
    }
    return arr
  }
}
String.prototype.condense = function() {
  if (isArray(this)) {

  } else {
    return this.trim()
  }
}
String.prototype.txtcode = function() {
  if (isArray(this)) {

  } else {
    return
  }
}
String.prototype.assign = function(obj) {
  if (isArray(this)) {

  } else {
    var retStr = this.toString();
    for (x in obj) {
      retStr = retStr.replace(new RegExp(x.toString(), 'g'), obj[x]);
    }
    return retStr;
  }
};
String.prototype.add = function(num) {
  if (isArray(this)) {

  } else {
    return this + num;
  }
}


//+------------------------------------------------------------------------------+
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//|+===========================XXX::::::::::::::::XXX===========================+|
//|+=##########################XXX::MATH LIBRARY::XXX##########################=+|
//|+===========================XXX::::::::::::::::XXX===========================+|
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//+------------------------------------------------------------------------------+

var math = {
  eval: function(val1) {

  },
  add: function(val1, val2) {
    if (isArray(this)) {

    } else {
      return val1 + val2
    }
  },
  subtract: function(val1, val2) {
    if (isArray(this)) {

    } else {
      return val1 - val2
    }
  },
  multiply: function(val1, val2) {
    if (isArray(this)) {

    } else {
      return val1 * val2
    }
  },
  divide: function(val1, val2) {
    if (isArray(this)) {

    } else {
      return val1 * val2
    }
  },
  mod: function(val1, val2) {
    if (isArray(this)) {

    } else {
      return val1 % val2
    }
  },
  trig: {
    sin: function(val1) {
      if (isArray(this)) {

      } else {
        return Math.sin(val1)
      }
    },
    sinh: function(val1) {
      if (isArray(this)) {

      } else {
        return Math.log(val1) - (Math.log(val1) * -1) / 2;
      }
    },
    asin: function(val1) {
      if (isArray(this)) {

      } else {
        return Math.asin(val1);
      }
    },
    asinh: function(val1) {
      if (isArray(this)) {

      } else {
        if (val1 === -Infinity) {
          return val1;
        } else {
          return Math.log(val1 + Math.sqrt(val1 * val1 + 1));
        }
      }
    },
    tan: function(val1) {
      if (isArray(this)) {

      } else {
        return Math.tan(val1)
      }
    },
    tanh: function(val1) {
      if (isArray(this)) {

      } else {
        return (Math.log(val1) - Math.log(val1 * -1) / 2) / ((Math.exp(val1) + Math.exp(-val1)) / 2);
      }
    },
    atan: function(val1) {
      if (isArray(this)) {

      } else {
        return Math.atan(val1)
      }
    },
    atan2: function(val1, val2) {
      if (isArray(this)) {

      } else {
        return Math.atan2(val1, val2)
      }
    },
    atanh: function(val1) {
      if (isArray(this)) {

      } else {
        return Math.log((1 + val1) / (1 - val1)) / 2;
      }
    },
    cos: function(val1) {
      if (isArray(this)) {

      } else {
        return Math.cos(val1)
      }
    },
    cosh: function(val1) {
      if (isArray(this)) {

      } else {
        return ((Math.exp(val1) + Math.exp(-val1)) / 2);
      }
    },
    acos: function(val1) {
      if (isArray(this)) {

      } else {
        return Math.acos(val1)
      }
    },
    acosh: function(val1) {
      if (isArray(this)) {

      } else {
        return Math.log(val1 + Math.sqrt(val1 * val1 - 1));
      }
    },
    sec: function(val1) {
      if (isArray(this)) {

      } else {
        return 1 / Math.cos(val1)
      }
    },
    sech: function(val1) {
      if (isArray(this)) {

      } else {
        return 1 / ((Math.exp(val1) + Math.exp(-val1)) / 2)
      }
    },
    asec: function(val1) {
      if (isArray(this)) {

      } else {
        return 1 / Math.cos(val1) * -1
      }
    },
    cosec: function(val1) {
      if (isArray(this)) {

      } else {
        return 1 / Math.sin(val1)
      }
    },
    cot: function(val1) {
      if (isArray(this)) {

      } else {
        return Math.cos(val1) / Math.sin(val1)
      }
    },
    coth: function(val1) {
      if (isArray(this)) {

      } else {
        return ((Math.exp(val1) + Math.exp(-val1)) / 2) / (Math.log(val1) - Math.log(val1 * -1) / 2);
      }
    },
    acot: function(val1) {
      if (isArray(this)) {

      } else {
        return (Math.cos(val1) / Math.sin(val1)) * -1
      }
    },
    acoth: function(val1) {
      if (isArray(this)) {

      } else {
        return ((Math.exp(val1) + Math.exp(-val1)) / 2) / (Math.log(val1) - Math.log(val1 * -1) / 2) * -1;
      }
    },
    csc: function(val1) {
      if (isArray(this)) {

      } else {
        return 1 / Math.sin(val1)
      }
    },
    csch: function(val1) {
      if (isArray(this)) {

      } else {
        return 1 / Math.log(val1) - Math.log(val1 * -1) / 2;
      }
    },
    acsc: function(val1) {
      if (isArray(this)) {

      } else {
        return (1 / Math.sin(val1)) * -1
      }
    },
    acsch: function(val1) {
      if (isArray(this)) {

      } else {
        return (1 / Math.log(val1) - Math.log(val1 * -1) / 2) * -1;
      }
    },
    hyp: function(opp, adj) {
      if (isArray(this)) {

      } else {
        return Math.sqrt(Math.pow(opp, 2) + Math.pow(adj, 2));
      }
    },
    opp: function(hyp, adj) {
      if (isArray(this)) {

      } else {
        return Math.sqrt(Math.pow(hyp, 2) - Math.pow(adj, 2));
      }
    },
    adj: function(hyp, opp) {
      if (isArray(this)) {

      } else {
        return Math.sqrt(Math.pow(hyp, 2) - Math.pow(opp, 2));
      }
    },
  },
  sqrt: function(val1) {
    if (val1 === -Infinity) {
      return val1;
    } else {
      return Math.sqrt(val1);
    }
  },
  cbrt: function(val1) {
    if (isArray(this)) {

    } else {
      var y = Math.pow(Math.abs(val1), 1 / 3);
      return val1 < 0 ? -y : y;
    }
  },
  slope: function(type, y, m, x, b) {
    if (isArray(this)) {

    } else {
      if (y == '?') {
        return (m * x) + b
      } else if (m == '?') {
        return (y - b) / x
      } else if (x == '?') {
        return (y - b) / m
      } else if (b == '?') {
        return y - (x * m)
      }
    }
  },
  pointSlope: function(type, m, y, y1, x, x1) {
    if (isArray(this)) {

    } else {
      if (y == '?') {
        return m * (x - x1) - y1
      } else if (y1 == '?') {
        return m * (x - x1) - y
      } else if (x == '?') {
        return (y - y1) - (m * (-1 * x1))/m
      } else if (x1 == '?') {
        return (y - y1) - (m * (-1 * x))/m
      } else if (m == '?') {
        return (y - y1)/(x - x1)
      }
    }
  },
  lim: function(n, c, f) {
    if (isArray(this)) {

    } else {
      if (f(c) != (Infinity || NaN)) {
        return f(c)
      } else {

      }
    }
  },
  summ: function(n, i, m) {
    if (isArray(this)) {

    } else {
      var arr = 0
      for (var i = 0; i < n; i++) {
        arr += i(m)
        m++
      }
      return arr;
    }
  },
  fact: function(n) {
    if (isArray(this)) {

    } else {
      var arr = 1
      for (var i = 0; i < n; i++) {
        arr *= (n - i)
      }
      return arr;
    }
  },
  perm: function(n, r) {
    if (isArray(this)) {

    } else {
      var arr = 1
      var rra = 1
      for (var i = 0; i < n; i++) {
        arr *= (n - i)
        rra *= ((n - r) - i)
      }
      return arr / rra
    }
  },
  combin: function(n, r) {
    if (isArray(this)) {

    } else {
      var arr = 1
      var rra = 1
      for (var i = 0; i < n; i++) {
        arr *= (n - i)
        rra *= ((n - r) - i)
        rar *= (r - i)
      }
      return (arr / rra) / rar
    }
  },
  abs: function(val1) {
    if (isArray(this)) {

    } else {
      return Math.abs(val1)
    }
  },
  ceil: function(val1) {
    if (isArray(this)) {

    } else {
      return Math.ceil(val1)
    }
  },
  exp: function(val1) {
    if (isArray(this)) {

    } else {
      return Math.exp(val1)
    }
  },
  floor: function(val1) {
    if (isArray(this)) {

    } else {
      return Math.floor(val1)
    }
  },
  prim: function(a, p) {
    if (isArray(this)) {

    } else {
      return Math.pow(a, p - 1) % p === 1;
    }
  },
  trunc: function(val1) {
    if (isArray(this)) {

    } else {
      return val1 < 0 ? Math.ceil(val1) : Math.floor(val1)
    }
  },
  sign: function(val1) {
    if (isArray(this)) {

    } else {
      val1 = +val1; // convert to a number
      if (val1 === 0 || isNaN(x)) {
        return val1;
      }
      return x > 0 ? 1 : -1;
    }
  },
  toBase: function(num, b1, b2) {
    if (isArray(this)) {

    } else {
      var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      var b = 0
      var c = 0
      var d = 0
      var e = 0
      var f = 0
      var g = 0
      num = num.toString()
      num = num.replace(/ /, "");
      num = num.toUpperCase();
      c = 0;
      //	return b1+b2;
      for (d = num.length, e = 1; d >= 1; d--, e *= b1) {
        b = num.charAt(d - 1);
        for (f = 0; f < b1 + 1; f++) {
          if (f == b1) {
            c = "bad imput number";
            return c;
          }
          if (b == a.charAt(f))
            break;
        }
        c += f * e;
      }
      num = c;
      if (num == 0) return "0";
      c = "";
      for (e = 1; e <= num; e *= b2);
      if (num != e) e /= b2;
      for (g = e; g >= 1; g /= b2) {
        d = Math.floor(num / g);
        c += a.charAt(d);
        num -= d * g;
      }
      if (parseInt(c) == NaN || (parseInt(c) != NaN && c.length != parseInt(c).toString().length)) {
        return c;
      } else {
        return parseInt(c);
      }
    }
  },
  triangularNum: function(num) {
    return (Math.pow(num, 2) + num) / 2
  },
  log: function(val1, val2) {
    if (val2 == undefined) {
      return Math.log(val1)
    } else {
      return Math.log(val2) / Math.log(val1)
    }
  },
  dist: function(val1, val2) {
    if (val2 == undefined) {
      return Math.abs(val1)
    } else {
      return Math.abs(Math.abs(val1) - Math.abs(val2))
    }
  },
  random: function(val1, val2) {
    Math.floor(val1 + (1 + val2 - val1) * Math.random())
  },
  pAdicDist: function(val1, val2) {
    if (val2 == undefined) {
      return Math.abs(val1)
    } else {
      return Math.abs(Math.abs(val1) - Math.abs(val2))
    }
  },
  cis: function(val1, val2) {
    if (val2 == undefined) {
      return Math.abs(val1)
    } else {
      return Math.abs(Math.abs(val1) - Math.abs(val2))
    }
  },
}
var triangle = function() {
  this.a = '?',
    this.b = '?',
    this.c = '?',
    this.C = '?',
    this.A = '?',
    this.B = '?',
    this.perimeter = '?'
}
var rectangle = function() {
  this.l = '?',
    this.w = '?',
    this.perimeter = '?',
    this.area = '?'
}
var circle = function() {
  this.r = '?',
    this.d = '?',
    this.circumference = '?',
    this.area = '?'
}

function solveTri(obj) {
  var sides = (obj.a != '?') + (obj.b != '?') + (obj.c != '?'); // Testing how many sides we know
  var angles = (obj.A != '?') + (obj.B != '?') + (obj.C != '?'); // Testing how many angles we know
  var status; // Making a variable and status

  if (sides + angles != 3)
    throw "Give exactly 3 pieces of information"; // If there are more or less than 3 make an error
  else if (sides == 0)
    throw "Give at least one side length"; // If there are no side, give at least 1

  else if (sides == 3) {
    status = "Side side side (SSS) case"; // Solve using 3 sides
    if (obj.a + obj.b <= obj.c || obj.b + obj.c <= obj.a || obj.c + obj.a <= obj.b)
      throw status + " - No solution"; // If two sides added is less than, or equal to another side, there is no solution https://www.khanacademy.org/math/in-seventh-grade-math/triangle-pror/sum-length-triangle/v/triangle-inqequality-theorem
    obj.A = solveAngle(obj.b, obj.c, obj.a); // Solve the angle A, using sides, see function: solveAngle
    obj.B = solveAngle(obj.c, obj.a, obj.b); // Solve the angle B, using sides, see function: solveAngle
    obj.C = solveAngle(obj.a, obj.b, obj.c); // Solve the angle C, using sides, see function: solveAngle
    // Heron's formula https://www.khanacademy.org/math/geometry/basic-geometry/heron-formula-tutorial/v/heron-s-formula
    var s = (obj.a + obj.b + obj.c) / 2; // s = one half of the perimeter
    obj.area = Math.sqrt(s * (s - obj.a) * (s - obj.b) * (s - obj.c)); // area = the square root of s times (s minus side a) times (s minus side b) times (s minus side c)

  } else if (angles == 2) {
    status = "Angle side angle (ASA) case"; // Solve using an angle between two sides
    // Find missing angle
    if (obj.A == '?') obj.A = 180 - obj.B - obj.C; // If angle A is unknown it is 180 minus the sum of the other two angles
    if (obj.B == '?') obj.B = 180 - obj.C - obj.A; // If angle B is unknown it is 180 minus the sum of the other two angles
    if (obj.C == '?') obj.C = 180 - obj.A - obj.B; // If angle C is unknown it is 180 minus the sum of the other two angles
    if (obj.A <= 0 || obj.B <= 0 || C <= 0)
      throw status + " - No solution"; // If any of the angles are less than, or equal to 0  there is no solution
    var sinA = Math.sin(degToRad(obj.A)); // Finding the sin of the radian of A
    var sinB = Math.sin(degToRad(obj.B)); // Finding the sin of the radian of B
    var sinC = Math.sin(degToRad(obj.C)); // Finding the sin of the radian of C
    // Use law of sines to find sidesobj.
    var ratio; // side / sin(angle)
    if (obj.a != '?') {
      ratio = obj.a / sinA;
      obj.area = obj.a * ratio * sinB * sinC / 2;
    }
    if (obj.b != '?') {
      ratio = obj.b / sinB;
      obj.area = obj.b * ratio * sinC * sinA / 2;
    }
    if (obj.c != '?') {
      ratio = obj.c / sinC;
      obj.area = obj.c * ratio * sinA * sinB / 2;
    }
    if (obj.a == '?') obj.a = ratio * sinA;
    if (obj.b == '?') obj.b = ratio * sinB;
    if (obj.c == '?') obj.c = ratio * sinC;

  } else if (obj.A != '?' && obj.a == '?' || obj.B != '?' && obj.b == '?' || obj.C != '?' && obj.c == '?') {
    status = "Side angle side (SAS) case";
    if (obj.A != '?' && obj.A >= 180 || obj.B != '?' && obj.B >= 180 || obj.C != '?' && obj.C >= 180)
      throw status + " - No solution";
    if (obj.a == '?') obj.a = solveSide(obj.b, obj.c, obj.A);
    if (obj.b == '?') obj.b = solveSide(obj.c, obj.a, obj.B);
    if (obj.c == '?') obj.c = solveSide(obj.a, obj.b, obj.C);
    if (obj.A == '?') obj.A = solveAngle(obj.b, obj.c, obj.a);
    if (obj.B == '?') obj.B = solveAngle(obj.c, obj.a, obj.b);
    if (obj.C == '?') obj.C = solveAngle(obj.a, obj.b, obj.c);
    if (obj.A != '?') obj.area = obj.b * obj.c * Math.sin(degToRad(obj.A)) / 2;
    if (obj.B != '?') obj.area = obj.c * obj.a * Math.sin(degToRad(obj.B)) / 2;
    if (obj.C != '?') obj.area = obj.a * obj.b * Math.sin(degToRad(obj.C)) / 2;

  } else {
    status = "Side side angle (SSA) case - ";
    var knownSide, knownAngle, partialSide;
    if (obj.a != '?' && obj.A != '?') {
      knownSide = obj.a;
      knownAngle = obj.A;
    }
    if (obj.b != '?' && obj.B != '?') {
      knownSide = obj.b;
      knownAngle = obj.B;
    }
    if (obj.c != '?' && obj.C != '?') {
      knownSide = obj.c;
      knownAngle = obj.C;
    }
    if (obj.a != '?' && obj.A == '?') partialSide = obj.a;
    if (obj.b != '?' && obj.B == '?') partialSide = obj.b;
    if (obj.c != '?' && obj.C == '?') partialSide = obj.c;
    if (knownAngle >= 180)
      throw status + "No solution";
    var ratio = knownSide / Math.sin(degToRad(knownAngle));
    var temp = partialSide / ratio; // sin(partialAngle)
    var partialAngle, unknownSide, unknownAngle;
    if (temp > 1 || knownAngle >= 90 && knownSide <= partialSide)
      throw status + "No solution";
    else if (temp == 1 || knownSide >= partialSide) {
      status += "Unique solution";
      partialAngle = radToDeg(Math.asin(temp));
      unknownAngle = 180 - knownAngle - partialAngle;
      unknownSide = ratio * Math.sin(degToRad(unknownAngle)); // Law of sines
      obj.area = knownSide * partialSide * Math.sin(degToRad(unknownAngle)) / 2;
    } else {
      status += "Two solutions";
      var partialAngle0 = radToDeg(Math.asin(temp));
      var partialAngle1 = 180 - partialAngle0;
      var unknownAngle0 = 180 - knownAngle - partialAngle0;
      var unknownAngle1 = 180 - knownAngle - partialAngle1;
      var unknownSide0 = ratio * Math.sin(degToRad(unknownAngle0)); // Law of sines
      var unknownSide1 = ratio * Math.sin(degToRad(unknownAngle1)); // Law of sines
      partialAngle = [partialAngle0, partialAngle1];
      unknownAngle = [unknownAngle0, unknownAngle1];
      unknownSide = [unknownSide0, unknownSide1];
      obj.area = [knownSide * partialSide * Math.sin(degToRad(unknownAngle0)) / 2,
        knownSide * partialSide * Math.sin(degToRad(unknownAngle1)) / 2
      ];
    }
    if (obj.a != '?' && obj.A == '?') obj.A = partialAngle;
    if (obj.b != '?' && obj.B == '?') obj.B = partialAngle;
    if (obj.c != '?' && obj.C == '?') obj.C = partialAngle;
    if (obj.a == '?' && obj.A == '?') {
      obj.a = unknownSide;
      obj.A = unknownAngle;
    }
    if (obj.b == '?' && obj.B == '?') {
      obj.b = unknownSide;
      obj.B = unknownAngle;
    }
    if (obj.c == '?' && obj.C == '?') {
      obj.c = unknownSide;
      obj.C = unknownAngle;
    }
  }
  obj.perimeter = obj.a + obj.b + obj.c
  var Sratios = Math.sin(A).toString() + Math.sin(B).toString() + Math.sin(C).toString()
  var Cratios = Math.cos(A).toString() + Math.cos(B).toString() + Math.cos(C).toString()
  var Tratios = Math.tan(A).toString() + Math.tan(B).toString() + Math.tan(C).toString()
  var CSratios = math.csc(A).toString() + math.csc(B).toString() + math.csc(C).toString()
  var SEratios = math.sec(A).toString() + math.sec(B).toString() + math.sec(C).toString()
  var COratios = math.cot(A).toString() + math.cot(B).toString() + math.cot(C).toString()
}

function solveRect(obj) {
  if (obj.l != '?' && obj.w != '?') {
    obj.perimeter = (obj.l * 2) + (obj.w * 2)
    obj.area = obj.l * obj.w
  } else if (obj.l != '?' && obj.perimeter != '?') {
    obj.w = (obj.perimeter - (obj.l * 2)) / 2
    obj.area = (obj.w * obj.l)
  } else if (obj.w != '?' && obj.perimeter != '?') {
    obj.l = (obj.perimeter - (obj.w * 2)) / 2
    obj.area = (obj.l * obj.w)
  } else if (obj.l != '?' && obj.area != '?') {
    obj.w = (obj.perimeter - (obj.l * 2)) / 2
    obj.perimeter = (obj.w * obj.l)
  } else if (obj.w != '?' && obj.perimeter != '?') {
    obj.l = (obj.area - (obj.w * 2)) / 2
    obj.area = (obj.l * obj.w)
  }
}

function solveCircle(obj) {
  if (obj.r != '?') {
    obj.d = obj.r * 2
    obj.circumference = 2 * Math.PI * obj.r
    obj.area = Math.pi * Math.pow(obj.r, 2)
  } else if (obj.d != '?') {
    obj.r = obj.d / 2
    obj.circumference = 2 * Math.PI * obj.r
    obj.area = Math.pi * Math.pow(obj.r, 2)
  } else if (obj.circumference != '?') {
    obj.r = (obj.circumference / Math.PI) / 2
    obj.d = obj.r * 2
    obj.area = Math.pi * Math.pow(obj.r, 2)
  } else if (obj.area != '?') {
    obj.r = Math.sqrt(obj.area) / Math.PI
    obj.d = obj.r * 2
    obj.circumference = 2 * Math.PI * obj.r
  }
}

function solveSide(a, b, C) {
  C = degToRad(C);
  if (C > 0.001) {
    return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C));
  } else {
    return Math.sqrt((a - b) * (a - b) + a * b * C * C * (1 - C * C / 12));
  }
}

function solveAngle(a, b, c) {
  var temp = (a * a + b * b - c * c) / (2 * a * b);
  if (-1 <= temp && temp <= 0.9999999)
    return radToDeg(Math.acos(temp));
  else if (temp <= 1) // Explained in http://www.nayuki.io/page/numerically-stable-law-of-cosines
    return radToDeg(Math.sqrt((c * c - (a - b) * (a - b)) / (a * b)));
  else
    throw "No solution";
}

function degToRad(x) {
  return x / 180 * Math.PI;
}

function radToDeg(x) {
  return x / Math.PI * 180;
}
var convert = function(amount, val1, val2) {
  if (val1.type == val2.type) {
    return val1.value * amount / val2.value
  } else {
    return null
  }
}

function Calculate(input) {


  var output = eval(a);
  return output;
}
var Equation = {
  type: 'equation',
  A: '?',
  B: '?',
  C: '?',
  D: '?',
  E: '?',
  F: '?',
  G: '?',
  H: '?',
  I: '?',
  J: '?',
  K: '?',
  L: '?',
  M: '?',
  N: '?',
  O: '?',
  P: '?',
  Q: '?',
  R: '?',
  S: '?',
  T: '?',
  U: '?',
  V: '?',
  W: '?',
  X: '?',
  Y: '?',
  Z: '?',
  a: '?',
  b: '?',
  c: '?',
  d: '?',
  e: '?',
  f: '?',
  g: '?',
  h: '?',
  i: '?',
  j: '?',
  k: '?',
  l: '?',
  m: '?',
  n: '?',
  o: '?',
  p: '?',
  q: '?',
  r: '?',
  s: '?',
  t: '?',
  u: '?',
  v: '?',
  w: '?',
  x: '?',
  y: '?',
  z: '?',
};
var solve = function(Eq, rav, obj) {
    var end = false
    var fc = Eq.charAt(0);
    if (!fc.match(/[a-z0-9\.\+\-\(]/i)) {
      throw 'You can\'t have ' + fc + ' as your first character, you need a letter, number or one of these . + - ('
      end = true
    }
    if (!end) {
      for (var x in obj) {
        if (obj.hasOwnProperty(x)) {
          Eq = Eq.replace(x, obj.x)
        }
      }
      var qe
      var EQ
      var eq = Eq.split(' = ')
      eq[0] = '(' + eq[0] + ')' + ' - (' + eq[1] + ')';
      eq[1] = '0'
      Eq = eq.join(' = ')
      Eq = Eq.replace(/(\))(?=([a-z]|(\d+(\.?\d)*)))/ig, '$1 * ');
      Eq = Eq.replace(/(([a-z]|(\d+(\.?\d)*)))(?=\()/ig, '$1 * ');
      Eq = Eq.replace(/((?:\d+\.?\d*)|\w+|\((?:(?:[^\(\)]*(?:\([^\(\)]*\)))*)\))\s*\^\s*((?:\d+\.?\d*)|\w+|\((?:(?:[^\(\)]*(?:\([^\(\)]*\)))*)\))/g, 'Math.pow($1, $2)')
      Eq = Eq.replace(/(abs)|(acos)|(asin)|(atan)|(atan2)|(ceil)|(cos)|(exp)|(floor)|(log)|(max)|(min)|(random)|(round)|(sin)|(sqrt)|(tan)|(e)|(pi)/ig, 'Math.$1')
      Eq = Eq.replace(/\-\s*([a-z]|(\d+(\.?\d)*))+/ig, ' + (-$1)')
      Eq = Eq.replace(/((\d+)(\.?\d)*)/ig, '$2 + 0$3')
      eq = Eq.match(/[0](\.?\d)+/g)
      Eq = Eq.replace(/[0](\.?\d)+/g, '')
      qe = Eq.match(/(\d+)+/g)
/*      var j
      for (var i = 0; i < Eq.length; i++) {
        if(Eq[i] == '('){
          j++
        } else if (Eq[i] == '('true) {
          j--
        } else if(j == 0 & Eq[i] == ) {

        }
      }
      for (var i = 0; i < eq.length; i++) {
        Eq = Eq.replace(eq[i], eval(eq[i]))
      }*/
      console.log(Eq)
      console.log(eq)
      return Eq
    }
  }
/*
  for (var rra = -Infinity; arr < Infinity; arr += 0.1) {
      if(Math.abs(funct(arr)) < 0.1) {
        console.log("Root = " + Math.round(arr, 2));
      }
    }
  */
  //+------------------------------------------------------------------------------+
  //|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
  //|+===========================XXX:::::::::::::::::XXX==========================+|
  //|+=##########################XXX::LOGIC LIBRARY::XXX#########################=+|
  //|+===========================XXX:::::::::::::::::XXX==========================+|
  //|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
  //+------------------------------------------------------------------------------+

function lvar(argument) {
  this.max = 0
  this.min = 0
  this.not = []
  this.val = []
}
String.prototype.parse = function(type, val1) {
    if (type.toString().toLowerCase() == 'js') {
      if (val1 == undefined) {
        return this.toLowerCase().replaceAll({
          'or': '||',
          'not': '!',
          'and': '&&'
        });
      } else {
        return val1.toLowerCase().replaceAll({
          'or': '||',
          'not': '!',
          'and': '&&'
        });
      }
    }
  }
  //NOTE: the and, and the xnor functions don't work, the and was edited
function leval(val1) {
  if (val1 == undefined) {
    return this.replace(this[0], '\'+').replace(this[this.length - 1], '+\'')
  } else {
    return val1
  }
}
var and = function(val1, val2) {
  return val1 && val2
}
var or = function(val1, val2) {
  return val1 || val2
}
var not = function(val1) {
  return !val1
}
var nor = function(val1, val2) {
  return !(val1 || val2)
}
var nand = function(val1, val2) {
  return !(val1 && val2)
}
var xor = function(val1, val2) {
  return val1 != val2
}
var xnor = function(val1, val2) {
  if (val1 == true && val2 == true || val1 == false && val2 == false) {
    return true
  } else {
    return false
  }
}
Boolean.prototype.and = function(val1) {
  return val1 && this
}
Boolean.prototype.or = function(val1) {
  return val1 || this
}
Boolean.prototype.not = function() {
  return !this
}
Boolean.prototype.nor = function(val1) {
  return !(val1 || this)
}
Boolean.prototype.nand = function(val1) {
  return !(val1 && this)
}
Boolean.prototype.xor = function(val1) {
  return val1 != this
}
Boolean.prototype.xnor = function(val1) {
  if (val1 == true && this == true || val1 == false && this == false) {
    return true
  } else {
    return false
  }
}
function toBinary(input) {
  var arr = []
  for (var i = 0; i < input.length; i++) {
    arr.push((input[i] + false))
  }
  return arr
}
function toBoolean(input) {
  var arr = []
  for (var i = 0; i < input.length; i++) {
    arr.push(input[i] == 1)
  }
  return arr
}
function t() {
  return true
}
function f() {
  return false
}
function eq(val1, val2) {
  return val1 === val2
}
function gt(val1, val2) {
  return val1 > val2
}
function lt(val1, val2) {
  return val1 < val2
}
function ne(val1, val2) {
  return val1 != val2
}
Boolean.prototype.eq = function(val1) {
  return this === val1
}
Boolean.prototype.gt = function(val1) {
  return this > val1
}
Boolean.prototype.lt = function(val1) {
  return this < val1
}
Boolean.prototype.ne = function(val1) {
  return this != val1
}
Boolean.prototype.isTrue = function() {
  if (this == true) {
    return true
  } else {
    return false
  }
}
Boolean.prototype.isFalse = function() {
  if (this != true) {
    return true
  } else {
    return false
  }
}
var isTrue = function() {
  if (this == true) {
    return true
  } else {
    return false
  }
}
var isFalse = function() {
  if (this != true) {
    return true
  } else {
    return false
  }
}

//+------------------------------------------------------------------------------+
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//|+===========================XXX:::::::::::::::::XXX==========================+|
//|+=##########################XXX::ARRAY LIBRARY::XXX#########################=+|
//|+===========================XXX:::::::::::::::::XXX==========================+|
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//+------------------------------------------------------------------------------+

Array.prototype.min = function() {
  return Math.min.apply(null, this)
};
Array.prototype.max = function() {
  return Math.max.apply(null, this)
};
Array.prototype.addAll = function() {
  for (var i = 1; i < this.length; i++) {
    this[0] += this[i]
  }
  return this[0]
};
Array.prototype.addToEach = function(value) {
  for (var i = 0; i < this.length - 1; i++) {
    this[i] += value
  }
  return this
};
Array.prototype.addArray = function(array) {
  for (var i = 0; i < this.length; i++) {
    this[i] += array[i]
  }
  return this
};
Array.prototype.subtractToEach = function(value) {
  for (var i = 0; i < this.length; i++) {
    this[i] -= value
  }
  return this
};
Array.prototype.subtractArray = function(array) {
  for (var i = 0; i < this.length; i++) {
    this[i] -= array[i]
  }
  return this
};
Array.prototype.multipyToEach = function(value) {
  for (var i = 0; i < this.length; i++) {
    this[i] *= value
  }
  return this
};
Array.prototype.multipyArray = function(array) {
  for (var i = 0; i < this.length; i++) {
    this[i] *= array[i]
  }
  return this
};
Array.prototype.divideToEach = function(value) {
  for (var i = 0; i < this.length; i++) {
    this[i] /= value
  }
  return this
};
Array.prototype.divideArray = function(array) {
  for (var i = 0; i < this.length; i++) {
    this[i] /= array[i]
  }
  return this
};
Array.prototype.findValue = function(name, value) {
  var array = $.map(this, function(v, i) {
    var haystack = v[name];
    var needle = new RegExp(value);
    // check for string in haystack
    // return the matched item if true, or null otherwise
    return needle.test(haystack) ? v : null;
  });
  return this;
}

//+------------------------------------------------------------------------------+
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//|+==========================XXX::::::::::::::::::XXX==========================+|
//|+=#########################XXX::OBJECT LIBRARY::XXX#########################=+|
//|+==========================XXX::::::::::::::::::XXX==========================+|
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//+------------------------------------------------------------------------------+

function searchObj(obj, value) {
  var comparator = function(obj, text) {
    if (obj && text && typeof obj === 'object' && typeof text === 'object') {
      for (var objKey in obj) {
        if (objKey.charAt(0) !== '$' && hasOwnProperty.call(obj, objKey) &&
          comparator(obj[objKey], text[objKey])) {
          return true;
        }
      }
      return false;
    }
    text = ('' + text).toLowerCase();
    return ('' + obj).toLowerCase().indexOf(text) > -1;
  };
  var search = function(obj, text) {
    if (typeof text == 'string' && text.charAt(0) === '!') {
      return !search(obj, text.substr(1));
    }
    switch (typeof obj) {
      case "boolean":
      case "number":
      case "string":
        return comparator(obj, text);
      case "object":
        switch (typeof text) {
          case "object":
            return comparator(obj, text);
          default:
            for (var objKey in obj) {
              if (objKey.charAt(0) !== '$' && search(obj[objKey], text)) {
                return true;
              }
            }
            break;
        }
        return false;
      case "array":
        for (var i = 0; i < obj.length; i++) {
          if (search(obj[i], text)) {
            return obj[i];
          }
        }
        return false;
      default:
        return false;
    }
  }
  return search(this, value)
}
Object.prototype.depth = function() {
  var level = 1;
  var key;
  for (key in this) {
    if (!this.hasOwnProperty(key)) continue;

    if (typeof this[key] == 'object') {
      var depth = utils.depthOf(this[key]) + 1;
      level = Math.max(depth, level);
    }
  }
  return level;
}
Object.prototype.duplicate = function() {
  return this
}
Object.prototype.has = function(name) {
  var comparator = function(obj, text) {
    if (obj && text && typeof obj === 'object' && typeof text === 'object') {
      for (var objKey in obj) {
        if (objKey.charAt(0) !== '$' && hasOwnProperty.call(obj, objKey) &&
          comparator(obj[objKey], text[objKey])) {
          return true;
        }
      }
      return false;
    }
    text = ('' + text).toLowerCase();
    return ('' + obj).toLowerCase().indexOf(text) > -1;
  };
  var search = function(obj, text) {
    if (typeof text == 'string' && text.charAt(0) === '!') {
      return !search(obj, text.substr(1));
    }
    switch (typeof obj) {
      case "boolean":
      case "number":
      case "string":
        return comparator(obj, text);
      case "object":
        switch (typeof text) {
          case "object":
            return comparator(obj, text);
          default:
            for (var objKey in obj) {
              if (objKey.charAt(0) !== '$' && search(obj[objKey], text)) {
                return true;
              }
            }
            break;
        }
        return false;
      case "array":
        for (var i = 0; i < obj.length; i++) {
          if (search(obj[i], text)) {
            return true;
          }
        }
        return false;
      default:
        return false;
    }
  }
  return search(this, value)
}

//+==============================================================================+

console.log('Logic: ' + xnor(xor(nor(and(or(f(), eq(4, 4)), not(nand(t(), ne(4, 4)))), gt(4, 4)), lt(4, 4), t())).or(true).toString());
console.log('Math: ' + eval(math.trig.sinh(4).toString()));
console.log('String: ' + 'Hello my name is fox, and I am so awesome, because I am \\ ^ $ * + ? . ( ) | { } [ ] > < & '.goFrom(2).goTo(this.length - 3).encode('regex').encode('html').encode('base64'));
console.log('Array: ' + [0, 1, 2, 3, 4].addToEach(0.5).addArray([1, 2, 3, 4, 5]).toString());
console.log('Regex: ' + /hi/gim.setFlags('g').addFlags('mg').removeFlags('mi').toString() + ':' + /hi/gim.setFlags('g').addFlags('mg').removeFlags('mi').getFlags());
console.log(solve('5.5 + 5 + 5x + xx - (5^5) + 6(5 + 5) = 5 + 5^x + 5(6 + 5) - 4', 'x'))
console.log(window.btoa('hey mom'));
console.log(encodeStringToBase(32, 'hey mom'));
console.log(Object.keys({
  1: 'hi',
  stuff: {
    'hi': 1,
    blah: 'stuff  '
  }
}))
console.log(eq(4, '4'));
