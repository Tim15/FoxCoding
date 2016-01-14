var add = {},
  pi = Math.PI,
  picometer = 0.000000000001,
  nanometer = 0.000000001,
  micrometer = 0.000001,
  millimeter = 0.001,
  centimeter = 0.01,
  decimeter = 0.1,
  meter = 1,
  decameter = 10,
  hectometer = 100,
  kilometer = 1000,
  megameter = 1000000,
  gigameter = 1000000000,
  terameter = 1000000000000,
  inch = 39.3701,
  foot = 3.28084,
  yard = 1.09362,
  sqAcre = 4046.86,
  sqHectare = 10000,
  celsius = 1,
  kelvin = -273,
  fahrenhiet = 33.8,
  mile = 1609.34;
var test, x, y, z, a = 0,
  b = 0,
  c = 0;
var d = new Date();
var monthLengths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

var Now = function() {
  if (this.month === 0) {
    this.monthName = "January";
  };
  if (this.month == 1) {
    this.monthName = "February"
  };
  if (this.month == 2) {
    this.monthName = "March"
  };
  if (this.month == 3) {
    this.monthName = "April"
  };
  if (this.month == 4) {
    this.monthName = "May"
  };
  if (this.month == 5) {
    this.monthName = "June"
  };
  if (this.month == 6) {
    this.monthName = "July"
  };
  if (this.month == 7) {
    this.monthName = "August"
  };
  if (this.month == 8) {
    this.monthName = "September"
  };
  if (this.month == 9) {
    this.monthName = "October"
  };
  if (this.month == 10) {
    this.monthName = "November"
  };
  if (this.month == 11) {
    this.monthName = "December"
  };
  if (this.month == 0) {
    this.monthNameShort = "Jan."
  };
  if (this.month == 1) {
    this.monthNameShort = "Feb."
  };
  if (this.month == 2) {
    this.monthNameShort = "Mar."
  };
  if (this.month == 3) {
    this.monthNameShort = "Apr."
  };
  if (this.month == 4) {
    this.monthNameShort = "May"
  };
  if (this.month == 5) {
    this.monthNameShort = "June"
  };
  if (this.month == 6) {
    this.monthNameShort = "July"
  };
  if (this.month == 7) {
    this.monthNameShort = "Aug."
  };
  if (this.month == 8) {
    this.monthNameShort = "Sept."
  };
  if (this.month == 9) {
    this.monthNameShort = "Oct."
  };
  if (this.month == 10) {
    this.monthNameShort = "Nov."
  };
  if (this.month == 11) {
    this.monthNameShort = "Dec."
  };
  if (this.weekDay == 0) {
    this.dayOfWeek = "Sunday"
  };
  if (this.weekDay == 1) {
    this.dayOfWeek = "Monday"
  };
  if (this.weekDay == 2) {
    this.dayOfWeek = "Tuesday"
  };
  if (this.weekDay == 3) {
    this.dayOfWeek = "Wednesday"
  };
  if (this.weekDay == 4) {
    this.dayOfWeek = "Thursday"
  };
  if (this.weekDay == 5) {
    this.dayOfWeek = "Friday"
  };
  if (this.weekDay == 6) {
    this.dayOfWeek = "Saturday"
  };
  if (this.weekDay == 0) {
    this.dayOfWeekShort = "Sun"
  };
  if (this.weekDay == 1) {
    this.dayOfWeekShort = "Mon"
  };
  if (this.weekDay == 2) {
    this.dayOfWeekShort = "Tue"
  };
  if (this.weekDay == 3) {
    this.dayOfWeekShort = "Wed"
  };
  if (this.weekDay == 4) {
    this.dayOfWeekShort = "Thu"
  };
  if (this.weekDay == 5) {
    this.dayOfWeekShort = "Fri"
  };
  if (this.weekDay == 6) {
    this.dayOfWeekShort = "Sat"
  };
  this.monthDay = d.getDate() - 1;
  this.dayOfYear = d.getDate() - 1 + monthLengths[d.getMonth()]
  this.weekDay = d.getDay();
  this.weekDayName = d.dayOfWeek;
  this.weekDayNameShort = d.dayOfWeekShort;
  this.year = d.getFullYear();
  this.hour = d.getHours();
  this.milisec = d.getMilliseconds();
  this.min = d.getMinutes();
  this.month = d.getMonth();
  this.monthName = d.monthName;
  this.monthNameShort = d.monthNameShort;
  this.sec = d.getSeconds();
  this.timezoneoffset = d.getTimezoneOffset();
  this.timezone = d.getTimezoneOffset() / 60;
  this.settings = {};
  this.settings.dateFormat = ['#M#', '#d#', '#Y#'];
  this.settings.hourFormat = d.getHours();
  this.specialday = false
  this.specialDays = [
    ['New Year', '1/5', 'each'],
    ['Martin Luther King Day', '1/18', 'each'],
    ['Presedents\' Day', '2/15', 'each'],
    ['Memorial Day', '5/30', 'each'],
    ['Independence Day', '7/4', 'each'],
    ['Labor Day', '9/5', 'each'],
    ['Columbus Day', '10/10', 'each'],
    ['Veterans Day', '11/11', 'each'],
    ['Thanksgiving Day', '11/24', 'each']
  ]
  this.add = function(amount, type) {
      switch (type.toLowerCase()) {
        case 'hour':
          Now().hour += amount;
          break;
        case 'day':
          Now().monthDay += amount;
          break;
        case 'week':

          break;
        case 'month':

          break;
        case 'year':
          Now().year += amount
          break;
      }
    },
  this.next = function(input, num) {
      Now().updateTime()
      x = d.getDate()
      y = d.getDay()
      if (num > 1) {
        z = num * 7
      } else {
        z = 0
      }
      switch (input.toLowerCase()) {
        case 'mon':
        case 'monday':
          Now().monthDay = (x + ((y - input.dayToNum) + input.dayToNum + 1))
          break;
        case 'tue':
        case 'tuesday':
          Now().monthDay = (x + ((y - input.dayToNum) + input.dayToNum + 2))
          break;
        case 'wed':
        case 'wednesday':
          Now().monthDay = (x + ((y - input.dayToNum) + input.dayToNum + 3))
          break;
        case 'thu':
        case 'thursday':
          Now().monthDay = (x + ((y - input.dayToNum) + input.dayToNum + 4))
          break;
        case 'fri':
        case 'friday':
          Now().monthDay = (x + ((y - input.dayToNum) + input.dayToNum + 5))
          break;
        case 'sat':
        case 'saturday':
          Now().monthDay = (x + ((y - input.dayToNum) + input.dayToNum + 6))
          break;
        case 'sun':
        case 'Sunday':
          Now().monthDay = (x + ((i - input.dayToNum) + input.dayToNum))
          break;
      }
    },
  this.last = function(input, num) {
      updateTime()
      x = d.getDate()
      y = d.getDay()
      if (num > 1) {
        z = num * 7
      } else {
        z = 0
      }
      switch (input.toLowerCase()) {
        case 'mon':
        case 'monday':
          Now().monthDay = (x - i - (6 - (6 - input.dayToNum())) - z)
          break;
        case 'tue':
        case 'tuesday':
          Now().monthDay = (x + (-i + (6 - (6 - input.dayToNum()))) - z)
          break;
        case 'wed':
        case 'wednesday':
          Now().monthDay = (x + (-i + (6 - (6 - input.dayToNum()))) - z)
          break;
        case 'thu':
        case 'thursday':
          Now().monthDay = (x + (-i + (6 - (6 - input.dayToNum()))) - z)
          break;
        case 'fri':
        case 'friday':
          Now().monthDay = (x + (-i + (6 - (6 - input.dayToNum()))) - z)
          break;
        case 'sat':
        case 'saturday':
          Now().monthDay = (x + (-i + (6 - (6 - input.dayToNum()))) - z)
          break;
        case 'sun':
        case 'Sunday':
          Now().monthDay = (x + (-i + (6 - (6 - input.dayToNum()))) - z)
          break;
      }
    },
  this.is = function(type, time) {
      var TTTT = type.iparse()
      if (type == undefined) {

      } else {
        TTTT.dayToNum()
        if (true) {

        }
      }
    },
  this.get = function(object, date) {
      var TTTT = gparse(object)
      if (date == undefined) {
        return Now()[TTTT]
      } else {
        return date[TTTT]
      }
    },
  this.compare = function(d1, d2) {

    }
  this.new = function(type, a1, a2, a3, a4) {
    switch (type.toLowerCase()) {
      case 'special':
      case 'holiday':
        this.specialDays.push([a1, [a2], a3])
        break;
    }
  }
  this.leapYear = this.year.LeapYear();
  this.date = this.month + '/' + this.monthDay + '/' + this.year;
  this.time = this.hour + ':' + this.min + ':' + this.sec;
  if (d.getFullYear().LeapYear() == true && this.dayOfYear >= 59) {
    this.dayOfYear += 1
  }
};

function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
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

//+------------------------------------------------------------------------------+
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//|+===========================XXX::::::::::::::::XXX===========================+|
//|+=##########################XXX::DATE LIBRARY::XXX##########################=+|
//|+===========================XXX::::::::::::::::XXX===========================+|
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//+------------------------------------------------------------------------------+

function tConvert(time, stuff) {
  if (time.length > 1) { // If time format correct
    if (time > 12) {
      return (time - 12).toString() + 'PM';
    } else {
      return time.toString();
    }
  }
}

function dayToNum() {
  switch (this.val.toLowerCase().trim()) {
    case 'mon':
    case 'monday':
      Now().weekDay = 1
      break;
    case 'tue':
    case 'tuesday':
      Now().weekDay = 2
      break;
    case 'wed':
    case 'wednesday':
      Now().weekDay = 3
      break;
    case 'thu':
    case 'thursday':
      Now().weekDay = 4
      break;
    case 'fri':
    case 'friday':
      Now().weekDay = 5
      break;
    case 'sat':
    case 'saturday':
      Now().weekDay = 6
      break;
    case 'sun':
    case 'Sunday':
      Now().weekDay = 0
      break;
    case 'jan':
    case 'january':
      Now().month = 0
      break;
    case 'feb':
    case 'february':
      Now().month = 1
      break;
    case 'mar':
    case 'march':
      Now().month = 2
      break;
    case 'apr':
    case 'april':
      Now().month = 3
      break;
    case 'may':
      Now().month = 4
      break;
    case 'june':
      Now().month = 5
      break;
    case 'july':
      Now().month = 6
      break;
    case 'aug':
    case 'august':
      Now().month = 7
      break;
    case 'sep':
    case 'september':
      Now().month = 8
      break;
    case 'oct':
    case 'october':
      Now().month = 9
      break;
    case 'nov':
    case 'november':
      Now().month = 10
      break;
    case 'dec':
    case 'december':
      Now().month = 11
      break;
  }
}
Number.prototype.LeapYear = function() {
  if (this.year % 2 == 0) {
    if (this.year % 100 == 0) {
      if (this.year % 400 == 0) {
        this.val = true
        this.leapYear = true
      } else {
        this.val = false
        this.leapYear = false
      }
    } else {
      this.val = true
      this.leapYear = true
    }
  } else {
    this.val = false
    this.leapYear = false
  }
}

function decrypt(input) {
  var f = new Now()
  return replaceAll(input, {
    '%d%': f.date,
    '%t%': f.time,
    '#m#': d.getMilliseconds(),
    '#mm#': d.getMinutes(),
    '#M#': d.getMonth(),
    '#NM#': f.monthName,
    '#nM#': f.monthNameShort,
    '#d#': d.getDay(),
    '#Nd#': f.dayOfWeek,
    '#nd#': f.dayOfWeekShort,
    '#D#': d.getDate(),
    '#h#': d.getHours(),
    '#Y#': d.getFullYear(),
    '#y#': findAtNum(d.getFullYear(), [2, 3]),
    '#c#': findAtNum(d.getFullYear(), [0]) + 1
  });
}

function iparse() {
  var parsed = this.toLowerCase().trim()
  switch (parsed) {
    case 'today':
      this.val = Now().weekDay
      break;
    case 'year':
    case 'thisyear':
      this.val = Now().year
      break;
    case 'month':
    case 'thismonth':
      this.val = Now().month
      break;
    case 'week':

      break;
  }
}

function gparse(input) {
  asdf = new Now()
  var parsed = input.toLowerCase().trim()
  switch (parsed) {
    case 'day':
    case 'today':
    case 'daynum':
    case 'daynumber':
      return 'weekDay'
      break;
    case 'dayname':
    case 'todayname':
    case 'nameoftoday':
    case 'nameofday':
      return 'weekDayName'
      break;
    case 'shortdayname':
    case 'daynameshort':
    case 'todaynameshort':
    case 'shorttodayname':
    case 'nameoftodayshort':
    case 'shortnameoftoday':
    case 'nameofdayshort':
    case 'shortnameofday':
      return 'weekDayNameShort'
      break;
    case 'month':
    case 'thismonth':
    case 'monthnum':
    case 'monthnumber':
      return 'month'
      break;
    case 'monthname':
    case 'nameofmonth':
      return 'monthName'
      break;
    case 'shortmonthname':
    case 'monthnameshort':
    case 'monthnameshort':
    case 'shortmonthname':
    case 'nameofmonthshort':
    case 'shortnameofmonth':
    case 'nameofmonthshort':
    case 'shortnameofmonth':
      return 'monthNameShort'
      break;
  }
}

function symplify() {
  leapyear()

  if (Now().sec > 59) {
    Now().min += 1
    Now().sec -= 60
  }
  if (Now().min > 59) {
    Now().hour += 1
    Now().min -= 60
  }
  if (Now().hour > 23) {
    Now().monthDay += 1
    Now().hour -= 24
  }
  if (Now().weekDay > 6) {
    Now().weekDay -= 7
  }
  if (month == (0 || 2 || 4 || 6 || 7 || 9 || 11)) {
    if (Now().monthDay > 30) {
      Now().monthDay -= 31
      Now().monthnum += 1
    }
  } else if (month == (3 || 5 || 8)) {
    if (Now().monthDay > 29) {
      Now().monthDay -= 30
      Now().monthnum += 1
    }
  } else {
    if (Now().leapYear == true) {
      if (Now().monthDay > 28) {
        Now().monthDay -= 29
        Now().monthnum += 1
      }
    } else {
      if (Now().monthDay > 27) {
        Now().monthDay -= 28
        Now().monthnum += 1
      }
    }
  }
}

function toDate(input) {

}

//+------------------------------------------------------------------------------+
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//|+==========================XXX::::::::::::::::::XXX==========================+|
//|+=#########################XXX::STRING LIBRARY::XXX#########################=+|
//|+==========================XXX::::::::::::::::::XXX==========================+|
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//+------------------------------------------------------------------------------+

String.prototype.goFrom = function(input) {
  return this.toString().slice(input, input.length)
};
String.prototype.goTo = function(input) {
  return this.toString().slice(0, input)
};
String.prototype.insertAt = function(input, val) {
  if (val == undefined) {
    return this.toString() + input.toString()
  } else {
    return this.toString().replace(this.charAt(val), input.toString() + this.charAt(val))
  }
};
String.prototype.charsFrom = function(val1, val2) {
  if (val1 == undefined) {
    return this.split('')
  } else if (val2 == undefined) {
    return this.toString().slice(0, input).split('')
  } else {
    return this.toString().slice(val1, val2).split('')
  }
};
String.prototype.wordsFrom = function(val1, val2) {
  if (val1 == undefined) {
    return this.split(' ')
  } else if (val2 == undefined) {
    return this.toString().slice(0, input).split(' ')
  } else {
    return this.toString().slice(val1, val2).split(' ')
  }
};
String.prototype.removeAt = function(val1, val2) {
  if (val2 == undefined) {
    return this.toString().replace(this.toString().slice(val1, this.toString().length - 1), '')
  } else {
    return this.toString().replace(this.toString().slice(val1, val2), '')
  }
};
String.prototype.every = function(regex) {
  return this.toString().match(regex)
};
String.prototype.encode = function(type) {
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
  }
};
String.prototype.decode = function(type) {
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
    case '':

      break;
  }
};
String.prototype.at = function() {
  var array = []
  for (var i = 0; i < arguments.length; i++) {
    array.push(this.charAt(arguments[i]))
  }
  return array
}
String.prototype.condense = function() {
  return this.trim()
}
String.prototype.txtcode = function() {
  return
}
String.prototype.assign = function(obj) {
  var retStr = this.toString();
  for (x in obj) {
    retStr = retStr.replace(new RegExp(x.toString(), 'g'), obj[x]);
  }
  return retStr;
};
String.prototype.add = function(num) {
  return this + ' + ' + num;
}
String.prototype.minus = function(num) {
  return this + ' - ' + num;
}
String.prototype.divide = function(num) {
  return this + ' / ' + num;
}
String.prototype.multiply = function(num) {
  return this + ' * ' + num;
}
String.prototype.fract = function(num1, num2) {
    return num1.toString() + '/' + num2.toString()
  }
  //+------------------------------------------------------------------------------+
  //|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
  //|+===========================XXX::::::::::::::::XXX===========================+|
  //|+=##########################XXX::MATH LIBRARY::XXX##########################=+|
  //|+===========================XXX::::::::::::::::XXX===========================+|
  //|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
  //+------------------------------------------------------------------------------+

//+------------------------------------------------------------------------------+
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//|+===========================XXX::::::::::::::::XXX===========================+|
//|+=##########################XXX::MATH LIBRARY::XXX##########################=+|
//|+===========================XXX::::::::::::::::XXX===========================+|
//|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//+------------------------------------------------------------------------------+

var conversions = [
  [
    ['inch', 'in'], inch
  ]
]

var math = {
  eval: function(val1, val2) {

  },
  add: function(val1, val2) {
    return val1 + val2
  },
  subtract: function(val1, val2) {
    return val1 - val2
  },
  multiply: function(val1, val2) {
    return val1 * val2
  },
  divide: function(val1, val2) {
    return val1 * val2
  },
  mod: function(val1, val2) {
    return val1 % val2
  },
  trig: {
    sin: function(val1) {
      return Math.sin(val1)
    },
    sinh: function(val1) {
      return Math.log(val1) - Math.log(val1 * -1) / 2;
    },
    asin: function(val1) {
      return Math.asin(val1);
    },
    asinh: function(val1) {
      if (x === -Infinity) {
        return x;
      } else {
        return Math.log(val1 + Math.sqrt(val1 * val1 + 1));
      }
    },
    tan: function(val1) {
      return Math.tan(val1)
    },
    tanh: function(val1) {
      return (Math.log(val1) - Math.log(val1 * -1) / 2) / ((Math.exp(x) + Math.exp(-x)) / 2);
    },
    atan: function(val1) {
      return Math.atan(val1)
    },
    atan2: function(val1, val2) {
      return Math.atan2(val1, val2)
    },
    atanh: function(val1) {
      return Math.log((1 + x) / (1 - x)) / 2;
    },
    cos: function(val1) {
      return Math.cos(val1)
    },
    cosh: function(val1) {
      return ((Math.exp(val1) + Math.exp(-val1)) / 2);
    },
    acos: function(val1) {
      return Math.acos(val1)
    },
    acosh: function(val1) {
      return Math.log(val1 + Math.sqrt(val1 * val1 - 1));
    },
    sec: function(val1) {
      return 1/ Math.cos(val1)
    },
    sech: function(val1) {
      return 1/ ((Math.exp(val1) + Math.exp(-val1)) / 2)
    },
    asec: function(val1) {
      return 1/Math.cos(val1) * -1
    },
    cosec: function(val1) {
      return 1/ Math.sin(val1)
    },
    cot: function(val1) {
      return Math.cos(val1) / Math.sin(val1)
    },
    coth: function(val1) {
      return ((Math.exp(x) + Math.exp(-x)) / 2) / (Math.log(val1) - Math.log(val1 * -1) / 2);
    },
    acot: function(val1) {
      return (Math.cos(val1) / Math.sin(val1)) * -1
    },
    acoth: function(val1) {
      return ((Math.exp(x) + Math.exp(-x)) / 2) / (Math.log(val1) - Math.log(val1 * -1) / 2) * -1;
    },
    csc: function(val1) {
      return 1 / Math.sin(val1)
    },
    csch: function(val1) {
      return 1 / Math.log(val1) - Math.log(val1 * -1) / 2;
    },
    acsc: function(val1) {
      return (1 / Math.sin(val1)) * -1
    },
    acsch: function(val1) {
      return (1 / Math.log(val1) - Math.log(val1 * -1) / 2) * -1;
    },
    hyp: function(opp, adj) {
      return Math.sqrt(Math.pow(opp, 2) + Math.pow(adj, 2));
    },
    opp: function(hyp, adj) {
      return Math.sqrt(Math.pow(hyp, 2) - Math.pow(adj, 2));
    },
    adj: function(hyp, opp) {
      return Math.sqrt(Math.pow(hyp, 2) - Math.pow(opp, 2));
    },
  },
  sqrt: function(val1) {
    if (x === -Infinity) {
      return x;
    } else {
      return Math.sqrt(val1);
    }
  },
  cbrt: function(val1) {
    var y = Math.pow(Math.abs(val1), 1 / 3);
    return val1 < 0 ? -y : y;
  },
  line: function(m, x, b) {
    return (m * x) + b
  },
  lim: function(n, c, f) {
    if (f(c) != (Infinity || NaN)){
      return f(c)
    } else {

    }
  },
  summ: function(n, i, m) {
    var arr = 0
    for (var i = 0; i < n; i++) {
      arr += i(m)
      m++
    }
    return arr;
  },
  fact: function(n) {
    var arr = 1
    for (var i = 0; i < n; i++) {
      arr *= (n - i)
    }
    return arr;
  },
  perm: function(n, r) {
    var arr = 1
    var rra = 1
   for (var i = 0; i < n; i++) {
          arr *= (n - i)
          rra *= ((n-r) - i)
    }
    return arr/rra
  },
  combin: function(n, r) {
    var arr = 1
    var rra = 1
   for (var i = 0; i < n; i++) {
          arr *= (n - i)
          rra *= ((n-r) - i)
          rar *= (r - i)
    }
    return (arr/rra)/rar
  },
  abs: function(val1) {
    return Math.abs(val1)
  },
  ceil: function(val1) {
    return Math.ceil(val1)
  },
  exp: function(val1) {
    return Math.exp(val1)
  },
  floor: function(val1) {
    return Math.floor(val1)
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
  var sides  = (obj.a != '?') + (obj.b != '?') + (obj.c != '?');  // Testing how many sides we know
	var angles = (obj.A != '?') + (obj.B != '?') + (obj.C != '?');  // Testing how many angles we know
	var status; // Making a variable and status

	if (sides + angles != 3)
		throw "Give exactly 3 pieces of information";// If there are more or less than 3 make an error
	else if (sides == 0)
		throw "Give at least one side length";// If there are no side, give at least 1

	else if (sides == 3) {
		status = "Side side side (SSS) case";// Solve using 3 sides
		if (obj.a + obj.b <= obj.c || obj.b + obj.c <= obj.a || obj.c + obj.a <= obj.b)
			throw status + " - No solution";// If two sides added is less than, or equal to another side, there is no solution https://www.khanacademy.org/math/in-seventh-grade-math/triangle-pror/sum-length-triangle/v/triangle-inqequality-theorem
		obj.A = solveAngle(obj.b, obj.c, obj.a);// Solve the angle A, using sides, see function: solveAngle
		obj.B = solveAngle(obj.c, obj.a, obj.b);// Solve the angle B, using sides, see function: solveAngle
		obj.C = solveAngle(obj.a, obj.b, obj.c);// Solve the angle C, using sides, see function: solveAngle
		// Heron's formula https://www.khanacademy.org/math/geometry/basic-geometry/heron-formula-tutorial/v/heron-s-formula
		var s = (obj.a + obj.b + obj.c) / 2;// s = one half of the perimeter
		obj.area = Math.sqrt(s * (s - obj.a) * (s - obj.b) * (s - obj.c));// area = the square root of s times (s minus side a) times (s minus side b) times (s minus side c)

	} else if (angles == 2) {
		status = "Angle side angle (ASA) case";// Solve using an angle between two sides
		// Find missing angle
		if (obj.A == '?') obj.A = 180 - obj.B - obj.C;// If angle A is unknown it is 180 minus the sum of the other two angles
		if (obj.B == '?') obj.B = 180 - obj.C - obj.A;// If angle B is unknown it is 180 minus the sum of the other two angles
		if (obj.C == '?') obj.C = 180 - obj.A - obj.B;// If angle C is unknown it is 180 minus the sum of the other two angles
		if (obj.A <= 0 || obj.B <= 0 || C <= 0)
			throw status + " - No solution";// If any of the angles are less than, or equal to 0  there is no solution
		var sinA = Math.sin(degToRad(obj.A));// Finding the sin of the radian of A
		var sinB = Math.sin(degToRad(obj.B));// Finding the sin of the radian of B
		var sinC = Math.sin(degToRad(obj.C));// Finding the sin of the radian of C
		// Use law of sines to find sidesobj.
		var ratio;  // side / sin(angle)
		if (obj.a != '?') { ratio = obj.a / sinA; obj.area = obj.a * ratio * sinB * sinC / 2; }
		if (obj.b != '?') { ratio = obj.b / sinB; obj.area = obj.b * ratio * sinC * sinA / 2; }
		if (obj.c != '?') { ratio = obj.c / sinC; obj.area = obj.c * ratio * sinA * sinB / 2; }
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
		if (obj.a != '?' && obj.A != '?') { knownSide = obj.a; knownAngle = obj.A; }
		if (obj.b != '?' && obj.B != '?') { knownSide = obj.b; knownAngle = obj.B; }
		if (obj.c != '?' && obj.C != '?') { knownSide = obj.c; knownAngle = obj.C; }
		if (obj.a != '?' && obj.A == '?') partialSide = obj.a;
		if (obj.b != '?' && obj.B == '?') partialSide = obj.b;
		if (obj.c != '?' && obj.C == '?') partialSide = obj.c;
		if (knownAngle >= 180)
			throw status + "No solution";
		var ratio = knownSide / Math.sin(degToRad(knownAngle));
		var temp = partialSide / ratio;  // sin(partialAngle)
		var partialAngle, unknownSide, unknownAngle;
		if (temp > 1 || knownAngle >= 90 && knownSide <= partialSide)
			throw status + "No solution";
		else if (temp == 1 || knownSide >= partialSide) {
			status += "Unique solution";
			partialAngle = radToDeg(Math.asin(temp));
			unknownAngle = 180 - knownAngle - partialAngle;
			unknownSide = ratio * Math.sin(degToRad(unknownAngle));  // Law of sines
			obj.area = knownSide * partialSide * Math.sin(degToRad(unknownAngle)) / 2;
		} else {
			status += "Two solutions";
			var partialAngle0 = radToDeg(Math.asin(temp));
			var partialAngle1 = 180 - partialAngle0;
			var unknownAngle0 = 180 - knownAngle - partialAngle0;
			var unknownAngle1 = 180 - knownAngle - partialAngle1;
			var unknownSide0 = ratio * Math.sin(degToRad(unknownAngle0));  // Law of sines
			var unknownSide1 = ratio * Math.sin(degToRad(unknownAngle1));  // Law of sines
			partialAngle = [partialAngle0, partialAngle1];
			unknownAngle = [unknownAngle0, unknownAngle1];
			unknownSide = [unknownSide0, unknownSide1];
			obj.area = [knownSide * partialSide * Math.sin(degToRad(unknownAngle0)) / 2,
			        knownSide * partialSide * Math.sin(degToRad(unknownAngle1)) / 2];
		}
		if (obj.a != '?' && obj.A == '?') obj.A = partialAngle;
		if (obj.b != '?' && obj.B == '?') obj.B = partialAngle;
		if (obj.c != '?' && obj.C == '?') obj.C = partialAngle;
		if (obj.a == '?' && obj.A == '?') { obj.a = unknownSide; obj.A = unknownAngle; }
		if (obj.b == '?' && obj.B == '?') { obj.b = unknownSide; obj.B = unknownAngle; }
		if (obj.c == '?' && obj.C == '?') { obj.c = unknownSide; obj.C = unknownAngle; }
	}
  obj.perimeter = obj.a + obj.b + obj.c
  var Sratios = Math.sin(A).toString() + Math.sin(B).toString() + Math.sin(C).toString()
  var Cratios = Math.cos(A).toString() + Math.cos(B).toString() + Math.cos(C).toString()
  var Tratios = Math.tan(A).toString() + Math.tan(B).toString() + Math.tan(C).toString()
  var CSratios = math.csc(A).toString() + math.csc(B).toString() + math.csc(C).toString()
  var SEratios = math.sec(A).toString() + math.sec(B).toString() + math.sec(C).toString()
  var COratios = math.cot(A).toString() + math.cot(B).toString() + math.cot(C).toString()
}

function solveRect(obj){
  if (obj.l != '?' && obj.w != '?'){
    obj.perimeter = (obj.l * 2) + (obj.w * 2)
    obj.area = obj.l * obj.w
  } else if (obj.l != '?' && obj.perimeter != '?'){
    obj.w = (obj.perimeter - (obj.l * 2)) / 2
    obj.area = (obj.w * obj.l)
  } else if (obj.w != '?' && obj.perimeter != '?'){
    obj.l = (obj.perimeter - (obj.w * 2)) / 2
    obj.area = (obj.l * obj.w)
  } else if (obj.l != '?' && obj.area != '?'){
    obj.w = (obj.perimeter - (obj.l * 2)) / 2
    obj.perimeter = (obj.w * obj.l)
  } else if (obj.w != '?' && obj.perimeter != '?'){
    obj.l = (obj.area - (obj.w * 2)) / 2
    obj.area = (obj.l * obj.w)
  }
}

function solveCircle(obj){
  if (obj.r != '?'){
    obj.d = obj.r * 2
    obj.circumference = 2 * Math.PI * obj.r
    obj.area = Math.pi * Math.pow(obj.r, 2)
  } else if (obj.d != '?'){
      obj.r = obj.d / 2
      obj.circumference = 2 * Math.PI * obj.r
      obj.area = Math.pi * Math.pow(obj.r, 2)
  } else if (obj.circumference != '?'){
      obj.r = (obj.circumference/Math.PI)/2
      obj.d = obj.r * 2
      obj.area = Math.pi * Math.pow(obj.r, 2)
  } else if (obj.area != '?'){
      obj.r = Math.sqrt(obj.area)/Math.PI
      obj.d = obj.r * 2
      obj.circumference = 2 * Math.PI * obj.r
  }
}



function solveSide(a, b, C) {
	C = degToRad(C);
	if (C > 0.001){
		return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C));
	} else {
		return Math.sqrt((a - b) * (a - b) + a * b * C * C * (1 - C * C / 12));
    }
}

function solveAngle(a, b, c) {
	var temp = (a * a + b * b - c * c) / (2 * a * b);
	if (-1 <= temp && temp <= 0.9999999)
		return radToDeg(Math.acos(temp));
	else if (temp <= 1)  // Explained in http://www.nayuki.io/page/numerically-stable-law-of-cosines
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

Number.prototype.convert = function(type1, type2) {
  this.val = ([type2] / [type1]) * this.val
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
Boolean.prototype.and = function(val1, val2) {
  if (val2 == undefined) {
    if (this == true && val1 == true) {
      return true
    } else {
      return false
    }
  } else {
    return val1 && val2
  }
}
Boolean.prototype.or = function(val1, val2) {
  if (val2 == undefined) {
    return (this.val || val1)
  } else {
    return val1 || val2
  }
}
Boolean.prototype.not = function(val1) {
  if (val1 == undefined) {
    return !this.val
  } else {
    return !val1
  }
}
Boolean.prototype.nor = function(val1, val2) {
  if (val2 == undefined) {
    return !(this.val || val1)
  } else {
    return !(val1 || val2)
  }
}
Boolean.prototype.nand = function(val1, val2) {
  if (val2 == undefined) {
    return !(this.val && val1)
  } else {
    return !(val1 && val2)
  }
}
Boolean.prototype.xor = function(val1, val2) {
  if (val2 == undefined) {
    return !((this || val1) && (this && val1))
  } else {
    return this.val != val1
  }
}
Boolean.prototype.xnor = function(val1, val2) {
  if (this == true && val1 == true || this == false && val1 == false) {
    return true
  } else {
    return false
  }
}

function toBinary(input){
  var arr = []
  for (var i = 0; i < input.length; i++) {
    arr.push((input[i] + false))
  }
  return arr
}

function toBoolean(input){
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

function True(input) {
  if (input == true) {
    return true
  } else {
    return false
  }
}

function False(input) {
  if (input != true) {
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

//+==============================================================================+
console.log('Logic: ' + false.or(true).and(true.nand(false).not()).nor(false).xor(false).xnor(true).toString());
console.log('Date: ' + decrypt('Today is #Nd#, #NM# #D#th, #Y#').toString());
console.log('Math: ' + eval(math.add(5, 4).toString()));
console.log('String: ' + 'Hello my name is fox, and I am so awesome, because I am \\ ^ $ * + ? . ( ) | { } [ ] > < & '.goFrom(2).goTo(this.length - 3).encode('regex').encode('html').encode('base64'));
console.log('Array: ' + [0, 1, 2, 3, 4].addToEach(0.5).addArray([1, 2, 3, 4, 5]).toString());
var _ = new Now()
console.log(_.get('day'))
