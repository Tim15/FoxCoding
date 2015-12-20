var d = new Date();
var Now = {
  getMonthNames : function() {
    if (d.getMonth() === 0) {
      this.monthName = "January";
    };
    if (d.getMonth() == 1) {
      this.monthName = "February"
    };
    if (d.getMonth() == 2) {
      this.monthName = "March"
    };
    if (d.getMonth() == 3) {
      this.monthName = "April"
    };
    if (d.getMonth() == 4) {
      this.monthName = "May"
    };
    if (d.getMonth() == 5) {
      this.monthName = "June"
    };
    if (d.getMonth() == 6) {
      this.monthName = "July"
    };
    if (d.getMonth() == 7) {
      this.monthName = "August"
    };
    if (d.getMonth() == 8) {
      this.monthName = "September"
    };
    if (d.getMonth() == 9) {
      this.monthName = "October"
    };
    if (d.getMonth() == 10) {
      this.monthName = "November"
    };
    if (d.getMonth() == 11) {
      this.monthName = "December"
    };
  },
  getShortMonthNames : function() {
    if (d.getMonth() == 0) {
      this.monthNameShort = "Jan."
    };
    if (d.getMonth() == 1) {
      this.monthNameShort = "Feb."
    };
    if (d.getMonth() == 2) {
      this.monthNameShort = "Mar."
    };
    if (d.getMonth() == 3) {
      this.monthNameShort = "Apr."
    };
    if (d.getMonth() == 4) {
      this.monthNameShort = "May"
    };
    if (d.getMonth() == 5) {
      this.monthNameShort = "June"
    };
    if (d.getMonth() == 6) {
      this.monthNameShort = "July"
    };
    if (d.getMonth() == 7) {
      this.monthNameShort = "Aug."
    };
    if (d.getMonth() == 8) {
      this.monthNameShort = "Sept."
    };
    if (d.getMonth() == 9) {
      this.monthNameShort = "Oct."
    };
    if (d.getMonth() == 10) {
      this.monthNameShort = "Nov."
    };
    if (d.getMonth() == 11) {
      this.monthNameShort = "Dec."
    };
  },
  getWeekNames : function() {
    if (d.getDay() == 0) {
      this.dayOfWeek = "Sunday"
    };
    if (d.getDay() == 1) {
      this.dayOfWeek = "Monday"
    };
    if (d.getDay() == 2) {
      this.dayOfWeek = "Tuesday"
    };
    if (d.getDay() == 3) {
      this.dayOfWeek = "Wednesday"
    };
    if (d.getDay() == 4) {
      this.dayOfWeek = "Thursday"
    };
    if (d.getDay() == 5) {
      this.dayOfWeek = "Friday"
    };
    if (d.getDay() == 6) {
      this.dayOfWeek = "Saturday"
    };
  },
  getShortWeekNames : function() {
    if (d.getDay() == 0) {
      this.dayOfWeekShort = "Sun"
    };
    if (d.getDay() == 1) {
      this.dayOfWeekShort = "Mon"
    };
    if (d.getDay() == 2) {
      this.dayOfWeekShort = "Tue"
    };
    if (d.getDay() == 3) {
      this.dayOfWeekShort = "Wed"
    };
    if (d.getDay() == 4) {
      this.dayOfWeekShort = "Thu"
    };
    if (d.getDay() == 5) {
      this.dayOfWeekShort = "Fri"
    };
    if (d.getDay() == 6) {
      this.dayOfWeekShort = "Sat"
    };
  },
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
    yearFormat: d.getFullYear()
  }
}
var anchorNow = Now;
var date = decrypt(Now.settings.dateFormat);
var time = Now.hourFormat + ':' + d.getMinutes() + ':' + d.getSeconds();
var test, x, y, z;
Now.date = date;
Now.time = time;
Now.leapyear = leapYear(Now.year);

//REVIEW: Done
String.prototype.allReplace = function(obj) {
  var retStr = this.val;
  for (x in obj) {
    retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
  }
  this.val = retStr;
};
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

function updateTime() {
  d.getShortWeekNames()
  d.getWeekNames()
  d.getShortMonthNames()
  d.getMonthNames()
  anchorNow.date = date,
  anchorNow.time = Time,
  anchorNow.monthDay = d.getDate(),
  anchorNow.weekDay = d.getDay(),
  anchorNow.weekDayName = d.dayOfWeek,
  anchorNow.weekDayNameShort = d.dayOfWeekShort,
  anchorNow.year = d.getFullYear(),
  anchorNow.hour = d.getHours(),
  anchorNow.milisec = d.getMilliseconds(),
  anchorNow.min = d.getMinutes(),
  anchorNow.month = d.getMonth(),
  anchorNow.monthName = d.monthName,
  anchorNow.monthNameShort = d.monthNameShort
  anchorNow.sec = d.getSeconds(),
  anchorNow.leapYear = leapYear(d.getFullYear()),
  anchorNow.timezoneoffset = d.getTimezoneOffset(),
  anchorNow.timezone = d.getTimezoneOffset() / 60
};

function leapYear() {
  if (Now.year % 2 == 0){
    if (Now.year % 100 == 0){
      if (Now.year % 400 == 0){
        this.val = true
      } else {
        this.val = false
      }
    } else {
      this.val = true
    }
  } else {
    this.val = false
  }
}

function reset() {
  updateTime()
  Now = anchorNow
}

// TODO: Add ways to return vaues & add the ways to get values
function add(amount, type) {
  switch (type.toLowerCase()) {
    case 'hour':
      this.addHour = this.hour + amount;
      break;
    case 'day':
      this.addDay = this.monthDay + amount;
      break;
    case 'week':

      break;
    case 'month':

      break;
    case 'year':

      break;
  }
}

// REVIEW: Not done
// TODO: Update constructNext() to return proper format
function next(input, num) {
  updateTime()
  x = d.getDate()
  i = d.getDay()
  switch (input.toLowerCase()) {
    case 'mon':
    case 'monday':
      Now.futureMonthDay = (x + ((i - input.dayToNum) + input.dayToNum + 1))
      break;
    case 'tue':
    case 'tuesday':
      Now.futureMonthDay = (x + ((i - input.dayToNum) + input.dayToNum + 2))
      break;
    case 'wed':
    case 'wednesday':
      Now.futureMonthDay = (x + ((i - input.dayToNum) + input.dayToNum + 3))
      break;
    case 'thu':
    case 'thursday':
      Now.futureMonthDay = (x + ((i - input.dayToNum) + input.dayToNum + 4))
      break;
    case 'fri':
    case 'friday':
      Now.futureMonthDay = (x + ((i - input.dayToNum) + input.dayToNum + 5))
      break;
    case 'sat':
    case 'saturday':
      Now.futureMonthDay = (x + ((i - input.dayToNum) + input.dayToNum + 6))
      break;
    case 'sun':
    case 'Sunday':
      Now.futureMonthDay = (x + ((i - input.dayToNum) + input.dayToNum))
      break;
  }
}

// REVIEW: not done
function is(type, time) {
  var TTTT = type.iparse()
  if (type == undefined) {

  } else {
    TTTT.dayToNum()
    if (true) {

    }
  }
}

// REVIEW: not done
function get(object, date) {
  var TTTT = object.gparse()
  if (date == undefined) {
    return TTTT
  } else {

  }
}

// REVIEW: Done
// NOTE: Output text
// NOTE: Maybe add more values, or syntax
function decrypt(input) {
  Now.getShortWeekNames();
  Now.getWeekNames();
  Now.getShortMonthNames();
  Now.getMonthNames();
  return allReplace(input, {
    '%d%': date,
    '%t%': time,
    '#m#': d.getMilliseconds(),
    '#mm#': d.getMinutes(),
    '#M#': d.getMonth(),
    '#NM#': d.monthName,
    '#nM#': d.monthNameShort,
    '#d#': d.getDay(),
    '#Nd#': d.dayOfWeek,
    '#nd#': d.dayOfWeekShort,
    '#D#': d.getDate(),
    '#h#': d.getHours(),
    '#Y#': d.getFullYear(),
    '#y#': findAtNum(d.getFullYear(), [2, 3]),
    '#c#': findAtNum(d.getFullYear(), [0]) + 1
  });
}

function iparse() {
  var parsed = this.toLowerCase().trim()
  switch(parsed){
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

function gparse(){
  var parsed = this.toLowerCase().trim()
  switch(parsed){
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

// REVIEW: Not started
// TODO: Find a way to input different types of values, and symplify them, and return the result
function symplify() {
}
