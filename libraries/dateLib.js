//REVIEW: Done
var d = new Date();
var date = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();
var dATE = d.getMonth() + '/' + d.getDate() + '/' + findAtNum(d.getFullYear(), [2, 3]);
var Time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
var time = tConvert(d.getHours()) + ':' + d.getMinutes() + ':' + d.getSeconds();
var test, x, y, z;
var Now = {
  date: date,
  time: Time,
  monthDay: d.getDate(),
  weekDay: d.getDay(),
  year: d.getFullYear(),
  hour: d.getHours(),
  milisec: d.getMilliseconds(),
  min: d.getMinutes(),
  month: d.getMonth(),
  sec: d.getSeconds(),
  futureMonthDay: 0,
  futureWeekDay: 0,
  futureYear: 0,
  futureHour: 0,
  futureMilisec: 0,
  futureMin: 0,
  futureMonth: 0,
  futureSec: 0
}
var anchorNow = Now

//REVIEW: Done
String.prototype.allReplace = function(obj) {
  var retStr = this;
  for (x in obj) {
    retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
  }
  return retStr;
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
  switch(this.val.toLowerCase()){
    case 'mon':
    case 'monday':
    this.val = 1
      break;
    case 'tue':
    case 'tuesday':
    this.val = 2
      break;
    case 'wed':
    case 'wednesday':
    this.val = 3
      break;
    case 'thu':
    case 'thursday':
    this.val = 4
      break;
    case 'fri':
    case 'friday':
    this.val = 5
      break;
    case 'sat':
    case 'saturday':
    this.val = 6
      break;
    case 'sun':
    case 'Sunday':
    this.val = 0
      break;
  }
}

//REVIEW: Done
Date.prototype.getMonthNames = function() {
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
};
Date.prototype.getShortMonthNames = function() {
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
};
Date.prototype.getWeekNames = function() {
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
};
Date.prototype.getShortWeekNames = function() {
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
};
Date.prototype.updateTime = function() {
  d.getShortWeekNames()
  d.getWeekNames()
  d.getShortMonthNames()
  d.getMonthNames()
  now.date = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear()
  now.time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  now.monthDay = d.getDate()
  now.weekDay = d.getDay()
  now.year = d.getFullYear()
  now.hour = d.getHours()
  now.milisec = d.getMilliseconds()
  now.min = d.getMinutes()
  now.month = d.getMonth()
  now.sec = d.getSeconds()

};

//REVIEW: Not done
//TODO: Add thing that need to be replaced with vals
function constructNext(format) {
  format.allReplace({});
}

//REVIEW: Not done
// TODO: Add ways to return vaues & add the ways to get values
function add(amount, type) {
  switch(type.toLowerCase()){
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
function is(type, time){

}

// REVIEW: not done
function get(object, type){

}

// REVIEW: Done
// NOTE: Output text
// NOTE: Maybe add more values, or syntax
function decrypt(input) {
  d.getShortWeekNames()
  d.getWeekNames()
  d.getShortMonthNames()
  d.getMonthNames()
  return input.allReplace({
    '%d%': date,
    '%D%': dATE,
    '%T%': Time,
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

// REVIEW: Not started
// TODO: Find a way to input different types of values, and symplify them, and return the result
function symplify(){
  var TIME = this
}
window.onload = function(argument) {
  now.getShortWeekNames()
  now.getWeekNames()
  now.getShortMonthNames()
  now.getMonthNames()
}
