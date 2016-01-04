//XXX MATH VARS XXX
var test, x, y, z, a = 0,
  b = 0,
  c = 0;
var d = new Date();
var Now = {
  monthDay: d.getDate(),
  weekDay: d.getDay(),
  weekDayName: d.dayOfWeek,
  weekDayNameShort: d.dayOfWeekShort,
  year: d.getFullYear(),
  hour: d.getHours(),
  milisec: d.getMilliseconds(),
  min: d.getMinutes(),
  month: d.getMonth(),
  monthName: d.monthName,
  monthNameShort: d.monthNameShort,
  sec: d.getSeconds(),
  timezoneoffset: d.getTimezoneOffset(),
  timezone: d.getTimezoneOffset() / 60,
  settings: {
    dateFormat: ['#M#', '#d#', '#Y#'],
    hourFormat: tConvert(d.getHours()),
  },
  add: {},
  getMonthNames: function() {
    if (Now.month === 0) {
      Now.monthName = "January";
    };
    if (Now.month == 1) {
      Now.monthName = "February"
    };
    if (Now.month == 2) {
      Now.monthName = "March"
    };
    if (Now.month == 3) {
      Now.monthName = "April"
    };
    if (Now.month == 4) {
      Now.monthName = "May"
    };
    if (Now.month == 5) {
      Now.monthName = "June"
    };
    if (Now.month == 6) {
      Now.monthName = "July"
    };
    if (Now.month == 7) {
      Now.monthName = "August"
    };
    if (Now.month == 8) {
      Now.monthName = "September"
    };
    if (Now.month == 9) {
      Now.monthName = "October"
    };
    if (Now.month == 10) {
      Now.monthName = "November"
    };
    if (Now.month == 11) {
      Now.monthName = "December"
    };
  },
  getShortMonthNames: function() {
    if (Now.month == 0) {
      Now.monthNameShort = "Jan."
    };
    if (Now.month == 1) {
      Now.monthNameShort = "Feb."
    };
    if (Now.month == 2) {
      Now.monthNameShort = "Mar."
    };
    if (Now.month == 3) {
      Now.monthNameShort = "Apr."
    };
    if (Now.month == 4) {
      Now.monthNameShort = "May"
    };
    if (Now.month == 5) {
      Now.monthNameShort = "June"
    };
    if (Now.month == 6) {
      Now.monthNameShort = "July"
    };
    if (Now.month == 7) {
      Now.monthNameShort = "Aug."
    };
    if (Now.month == 8) {
      Now.monthNameShort = "Sept."
    };
    if (Now.month == 9) {
      Now.monthNameShort = "Oct."
    };
    if (Now.month == 10) {
      Now.monthNameShort = "Nov."
    };
    if (Now.month == 11) {
      Now.monthNameShort = "Dec."
    };
  },
  getWeekNames: function() {
    if (Now.weekDay == 0) {
      Now.dayOfWeek = "Sunday"
    };
    if (Now.weekDay == 1) {
      Now.dayOfWeek = "Monday"
    };
    if (Now.weekDay == 2) {
      Now.dayOfWeek = "Tuesday"
    };
    if (Now.weekDay == 3) {
      Now.dayOfWeek = "Wednesday"
    };
    if (Now.weekDay == 4) {
      Now.dayOfWeek = "Thursday"
    };
    if (Now.weekDay == 5) {
      Now.dayOfWeek = "Friday"
    };
    if (Now.weekDay == 6) {
      Now.dayOfWeek = "Saturday"
    };
  },
  getShortWeekNames: function() {
    if (Now.weekDay == 0) {
      Now.dayOfWeekShort = "Sun"
    };
    if (Now.weekDay == 1) {
      Now.dayOfWeekShort = "Mon"
    };
    if (Now.weekDay == 2) {
      Now.dayOfWeekShort = "Tue"
    };
    if (Now.weekDay == 3) {
      Now.dayOfWeekShort = "Wed"
    };
    if (Now.weekDay == 4) {
      Now.dayOfWeekShort = "Thu"
    };
    if (Now.weekDay == 5) {
      Now.dayOfWeekShort = "Fri"
    };
    if (Now.weekDay == 6) {
      Now.dayOfWeekShort = "Sat"
    };
  },
  add: function(amount, type) {
    switch (type.toLowerCase()) {
      case 'hour':
        Now.hour += amount;
        break;
      case 'day':
        Now.monthDay += amount;
        break;
      case 'week':

        break;
      case 'month':

        break;
      case 'year':
        Now.year += amount
        break;
    }
  },
  next: function(input, num) {
    Now.updateTime()
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
        Now.monthDay = (x + ((y - input.dayToNum) + input.dayToNum + 1))
        break;
      case 'tue':
      case 'tuesday':
        Now.monthDay = (x + ((y - input.dayToNum) + input.dayToNum + 2))
        break;
      case 'wed':
      case 'wednesday':
        Now.monthDay = (x + ((y - input.dayToNum) + input.dayToNum + 3))
        break;
      case 'thu':
      case 'thursday':
        Now.monthDay = (x + ((y - input.dayToNum) + input.dayToNum + 4))
        break;
      case 'fri':
      case 'friday':
        Now.monthDay = (x + ((y - input.dayToNum) + input.dayToNum + 5))
        break;
      case 'sat':
      case 'saturday':
        Now.monthDay = (x + ((y - input.dayToNum) + input.dayToNum + 6))
        break;
      case 'sun':
      case 'Sunday':
        Now.monthDay = (x + ((i - input.dayToNum) + input.dayToNum))
        break;
    }
  },
  last: function(input, num) {
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
        Now.monthDay = (x - i - (6 - (6 - input.dayToNum())) - z)
        break;
      case 'tue':
      case 'tuesday':
        Now.monthDay = (x + (-i + (6 - (6 - input.dayToNum()))) - z)
        break;
      case 'wed':
      case 'wednesday':
        Now.monthDay = (x + (-i + (6 - (6 - input.dayToNum()))) - z)
        break;
      case 'thu':
      case 'thursday':
        Now.monthDay = (x + (-i + (6 - (6 - input.dayToNum()))) - z)
        break;
      case 'fri':
      case 'friday':
        Now.monthDay = (x + (-i + (6 - (6 - input.dayToNum()))) - z)
        break;
      case 'sat':
      case 'saturday':
        Now.monthDay = (x + (-i + (6 - (6 - input.dayToNum()))) - z)
        break;
      case 'sun':
      case 'Sunday':
        Now.monthDay = (x + (-i + (6 - (6 - input.dayToNum()))) - z)
        break;
    }
  },
  is: function(type, time) {
    var TTTT = type.iparse()
    if (type == undefined) {

    } else {
      TTTT.dayToNum()
      if (true) {

      }
    }
  },
  get: function(object, date) {
    var TTTT = object.gparse()
    if (date == undefined) {
      return TTTT
    } else {

    }
  },
  compare: function(d1, d2) {

  },
};
var anchorNow = Now,
  date = decrypt(Now.settings.dateFormat),
  time = Now.hourFormat + ':' + d.getMinutes() + ':' + d.getSeconds();
Now.date = date;
Now.time = time;
Now.leapYear = leapYear(Now.year);
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

Now.updateTime = function() {
  Now.getShortWeekNames()
  Now.getWeekNames()
  Now.getShortMonthNames()
  Now.getMonthNames()
  anchorNow.date = date
  anchorNow.time = time
  anchorNow.monthDay = d.getDate()
  anchorNow.weekDay = d.getDay()
  anchorNow.weekDayName = d.dayOfWeek
  anchorNow.weekDayNameShort = d.dayOfWeekShort
  anchorNow.year = d.getFullYear()
  anchorNow.hour = d.getHours()
  anchorNow.milisec = d.getMilliseconds()
  anchorNow.min = d.getMinutes()
  anchorNow.month = d.getMonth()
  anchorNow.monthName = d.monthName
  anchorNow.monthNameShort = d.monthNameShort
  anchorNow.sec = d.getSeconds()
  anchorNow.leapYear = leapYear(d.getFullYear())
  anchorNow.timezoneoffset = d.getTimezoneOffset()
  anchorNow.timezone = d.getTimezoneOffset() / 60
  simplify()
};
Now.reset = function() {
  Now.updateTime()
  Now = anchorNow
}

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
      Now.weekDay = 1
      break;
    case 'tue':
    case 'tuesday':
      Now.weekDay = 2
      break;
    case 'wed':
    case 'wednesday':
      Now.weekDay = 3
      break;
    case 'thu':
    case 'thursday':
      Now.weekDay = 4
      break;
    case 'fri':
    case 'friday':
      Now.weekDay = 5
      break;
    case 'sat':
    case 'saturday':
      Now.weekDay = 6
      break;
    case 'sun':
    case 'Sunday':
      Now.weekDay = 0
      break;
    case 'jan':
    case 'january':
      Now.month = 0
      break;
    case 'feb':
    case 'february':
      Now.month = 1
      break;
    case 'mar':
    case 'march':
      Now.month = 2
      break;
    case 'apr':
    case 'april':
      Now.month = 3
      break;
    case 'may':
      Now.month = 4
      break;
    case 'june':
      Now.month = 5
      break;
    case 'july':
      Now.month = 6
      break;
    case 'aug':
    case 'august':
      Now.month = 7
      break;
    case 'sep':
    case 'september':
      Now.month = 8
      break;
    case 'oct':
    case 'october':
      Now.month = 9
      break;
    case 'nov':
    case 'november':
      Now.month = 10
      break;
    case 'dec':
    case 'december':
      Now.month = 11
      break;
  }
}

function leapYear() {
  if (Now.year % 2 == 0) {
    if (Now.year % 100 == 0) {
      if (Now.year % 400 == 0) {
        this.val = true
        Now.leapYear = true
      } else {
        this.val = false
        Now.leapYear = false
      }
    } else {
      this.val = true
      Now.leapYear = true
    }
  } else {
    this.val = false
    Now.leapYear = false
  }
}

function decrypt(input) {
  Now.getShortWeekNames();
  Now.getWeekNames();
  Now.getShortMonthNames();
  Now.getMonthNames();
  return replaceAll(input, {
    '%d%': date,
    '%t%': time,
    '#m#': d.getMilliseconds(),
    '#mm#': d.getMinutes(),
    '#M#': d.getMonth(),
    '#NM#': Now.monthName,
    '#nM#': Now.monthNameShort,
    '#d#': d.getDay(),
    '#Nd#': Now.dayOfWeek,
    '#nd#': Now.dayOfWeekShort,
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
      this.val = Now.weekDay
      break;
    case 'year':
    case 'thisyear':
      this.val = Now.year
      break;
    case 'month':
    case 'thismonth':
      this.val = Now.month
      break;
    case 'week':

      break;
  }
}

function gparse() {
  var parsed = this.toLowerCase().trim()
  switch (parsed) {
    case 'day':
    case 'today':
    case 'daynum':
    case 'daynumber':
      this.val = Now.weekDay
      break;
    case 'dayname':
    case 'todayname':
    case 'nameoftoday':
    case 'nameofday':
      this.val = Now.weekDayName
      break;
    case 'shortdayname':
    case 'daynameshort':
    case 'todaynameshort':
    case 'shorttodayname':
    case 'nameoftodayshort':
    case 'shortnameoftoday':
    case 'nameofdayshort':
    case 'shortnameofday':
      this.val = Now.weekDayNameShort
      break;
    case 'month':
    case 'thismonth':
    case 'monthnum':
    case 'monthnumber':
      this.val = Now.month
      break;
    case 'monthname':
    case 'nameofmonth':
      this.val = Now.monthName
      break;
    case 'shortmonthname':
    case 'monthnameshort':
    case 'monthnameshort':
    case 'shortmonthname':
    case 'nameofmonthshort':
    case 'shortnameofmonth':
    case 'nameofmonthshort':
    case 'shortnameofmonth':
      this.val = Now.monthNameShort
      break;
  }
}

function symplify() {
  leapyear()
  if (Now.sec > 59) {
    Now.min += 1
    Now.sec -= 60
  }
  if (Now.min > 59) {
    Now.hour += 1
    Now.min -= 60
  }
  if (Now.hour > 23) {
    Now.monthDay += 1
    Now.hour -= 24
  }
  if (Now.weekDay > 6) {
    Now.week += 1
    Now.weekDay -= 7
  }
  if (month == (0 || 2 || 4 || 6 || 7 || 9 || 11)) {
    if (Now.monthDay > 30) {
      Now.monthDay -= 31
      Now.monthnum += 1
    }
  } else if (month == (3 || 5 || 8)) {
    if (Now.monthDay > 29) {
      Now.monthDay -= 30
      Now.monthnum += 1
    }
  } else {
    if (Now.leapYear == true) {
      if (Now.monthDay > 28) {
        Now.monthDay -= 29
        Now.monthnum += 1
      }
    } else {
      if (Now.monthDay > 27) {
        Now.monthDay -= 28
        Now.monthnum += 1
      }
    }
  }
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

Number.prototype.add = function(input) {
  return this.val + input
}
Number.prototype.subtract = function(input) {
  return this.val - input
}
Number.prototype.multipy = function(input) {
  return this.val * input
}
Number.prototype.divide = function(input) {
  return this.val / input
}
Number.prototype.convert = function(type1, type2) {
  this.val = ([type2] / [type1]) * this.val
}

function fract(val1, val2) {
  return val1.toString() + '/' + val2.toString()
};
/*
Number.prototype.circumference = function(type) {
  switch (type.toLowerCase()) {
    case 'radius':
      this.val = this * 2 * pi
      break;
    case 'diameter':
      this.val = this * pi
      break;
    case 'area':
      this.val = Math.sqrt(this / pi) * 2 * pi
      break;
    case 'circumference':
      this.val = this
      break;
  }
}
Number.prototype.area = function(type) {
  switch (type.toLowerCase()) {
    case 'radius':
      this.val = Math.pow(this, 2) * pi
      break;
    case 'diameter':
      this.val = Math.pow((this / 2), 2) * pi
      break;
    case 'area':
      this.val = this
      break;
    case 'circumference':
      this.val = Math.pow((this / pi / 2), 2)
      break;
  }
}
Number.prototype.diameter = function(type) {
  switch (type.toLowerCase()) {
    case 'radius':
      this.val = this * 2
      break;
    case 'diameter':
      this.val = this
      break;
    case 'area':
      this.val = Math.sqrt(this / pi) * 2
      break;
    case 'circumference':
      this.val = this / pi
      break;
  }
}
Number.prototype.diameter = function(type) {
  switch (type.toLowerCase()) {
    case 'radius':
      this.val = this
      break;
    case 'diameter':
      this.val = this / 2
      break;
    case 'area':
      this.val = Math.sqrt(this / pi)
      break;
    case 'circumference':
      this.val = (this / pi) / 2
      break;
  }
}
Number.prototype.squareArea = function(input, type) {
  switch (type.toLowerCase()) {
    case 'width':
    case 'height':
      this.val = this / 2
      break;
    case 'area':
      this.val = this
      break;
    case 'perimiter':
      throw 'There is not enough data to calculate the area of this square'
      break;
  }
}
*/

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

function leval(val1) {
  if (val1 == undefined) {
    return this.replace(this[0], '\'+').replace(this[this.length - 1], '+\'')
  } else {
    return val1
  }
}
function and(val1, val2) {
  if (val2 == undefined) {
    return (this.val && val1)
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
  if (val2 == undefined) {
    return (this.val || val1) && (this.val && val1)
  } else {
    return (val1 || val2) || (val1 && val2)
  }
}
Boolean.prototype.n1a2 = function(val1, val2) {
  if (val2 == undefined) {
    return !this.val && val1
  } else {
    return !val1 && val2
  }
}
Boolean.prototype.n2a1 = function(val1, val2) {
  if (val2 == undefined) {
    return this.val && !val1
  } else {
    return val1 && !val2
  }
}
Boolean.prototype.n1e2 = function(val1, val2) {
  if (val2 == undefined) {
    return this.val != val1
  } else {
    return val1 != val2
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
// TODO: work on logic xnor
console.log('Logic: ' + and(false.or(true), true.nand(false).not()).nor(false).xor(false).xnor(true).toString());
console.log('Date: ' + decrypt('Today is #Nd#, #NM# #D#, #Y#').toString());
console.log('Math: ' + eval(fract(5 + 5 /*.multiply(5)*/ , 5 /*.divide(5).subtract(5)*/ ).toString()));
console.log('String: ' + 'Hello my name is fox, and I am so awesome, because I am \\ ^ $ * + ? . ( ) | { } [ ] > < & '.goFrom(2).goTo(this.length - 3).encode('regex').encode('html').encode('base64'));
console.log('Array: ' + [0, 1, 2, 3, 4].addToEach(0.5).addArray([1, 2, 3, 4, 5]).toString());
