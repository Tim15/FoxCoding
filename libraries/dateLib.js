var d = new Date();
var date = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();
var dATE = d.getMonth() + '/' + d.getDate() + '/' + findAtNum(d.getFullYear(), [2, 3]);
var Time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
var time = tConvert(d.getHours()) + ':' + d.getMinutes() + ':' + d.getSeconds();
var test, x, y, z;
var now = {
  date: date
  time: Time,
  monthDay: d.getDate(),
  weekDay: d.getDay(),
  year: d.getFullYear(),
  hour: d.getHours(),
  milisec: d.getMilliseconds(),
  min: d.getMinutes(),
  month: d.getMonth(),
  sec: d.getSeconds(),
  next: [],
}
String.prototype.allReplace = function(obj) {
  var retStr = this;
  for (var x in obj) {
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

Date.prototype.getMonthNames = function() {
  if (this.getMonth() === 0) {
    this.monthName = "January";
  };
  if (this.getMonth() == 1) {
    this.monthName = "February"
  };
  if (this.getMonth() == 2) {
    this.monthName = "March"
  };
  if (this.getMonth() == 3) {
    this.monthName = "April"
  };
  if (this.getMonth() == 4) {
    this.monthName = "May"
  };
  if (this.getMonth() == 5) {
    this.monthName = "June"
  };
  if (this.getMonth() == 6) {
    this.monthName = "July"
  };
  if (this.getMonth() == 7) {
    this.monthName = "August"
  };
  if (this.getMonth() == 8) {
    this.monthName = "September"
  };
  if (this.getMonth() == 9) {
    this.monthName = "October"
  };
  if (this.getMonth() == 10) {
    this.monthName = "November"
  };
  if (this.getMonth() == 11) {
    this.monthName = "December"
  };
};
Date.prototype.getShortMonthNames = function() {
  if (this.getMonth() == 0) {
    this.monthNameShort = "Jan."
  };
  if (this.getMonth() == 1) {
    this.monthNameShort = "Feb."
  };
  if (this.getMonth() == 2) {
    this.monthNameShort = "Mar."
  };
  if (this.getMonth() == 3) {
    this.monthNameShort = "Apr."
  };
  if (this.getMonth() == 4) {
    this.monthNameShort = "May"
  };
  if (this.getMonth() == 5) {
    this.monthNameShort = "June"
  };
  if (this.getMonth() == 6) {
    this.monthNameShort = "July"
  };
  if (this.getMonth() == 7) {
    this.monthNameShort = "Aug."
  };
  if (this.getMonth() == 8) {
    this.monthNameShort = "Sept."
  };
  if (this.getMonth() == 9) {
    this.monthNameShort = "Oct."
  };
  if (this.getMonth() == 10) {
    this.monthNameShort = "Nov."
  };
  if (this.getMonth() == 11) {
    this.monthNameShort = "Dec."
  };
};
Date.prototype.getWeekNames = function() {
  if (this.getDay() == 0) {
    this.dayOfWeek = "Sunday"
  };
  if (this.getDay() == 1) {
    this.dayOfWeek = "Monday"
  };
  if (this.getDay() == 2) {
    this.dayOfWeek = "Tuesday"
  };
  if (this.getDay() == 3) {
    this.dayOfWeek = "Wednesday"
  };
  if (this.getDay() == 4) {
    this.dayOfWeek = "Thursday"
  };
  if (this.getDay() == 5) {
    this.dayOfWeek = "Friday"
  };
  if (this.getDay() == 6) {
    this.dayOfWeek = "Saturday"
  };
};
Date.prototype.getShortWeekNames = function() {
  if (this.getDay() == 0) {
    this.dayOfWeekShort = "Sun"
  };
  if (this.getDay() == 1) {
    this.dayOfWeekShort = "Mon"
  };
  if (this.getDay() == 2) {
    this.dayOfWeekShort = "Tue"
  };
  if (this.getDay() == 3) {
    this.dayOfWeekShort = "Wed"
  };
  if (this.getDay() == 4) {
    this.dayOfWeekShort = "Thu"
  };
  if (this.getDay() == 5) {
    this.dayOfWeekShort = "Fri"
  };
  if (this.getDay() == 6) {
    this.dayOfWeekShort = "Sat"
  };
};

function dayToNum() {
  switch(this.toLowerCase()){
    case 'mon':
    case 'monday':
    this = 1
      break;
    case 'tue':
    case 'tuesday':
    this = 2
      break;
    case 'wed':
    case 'wednesday':
    this = 3
      break;
    case 'thu':
    case 'thursday':
    this = 4
      break;
    case 'fri':
    case 'friday':
    this = 5
      break;
    case 'sat':
    case 'saturday':
    this = 6
      break;
    case 'sun':
    case 'Sunday':
    this = 0
      break;
  }
}

function constructNext(format) {
  format.allReplace({})
}

function next(input, format) {
  x = d.getDate()
  i = d.getDay()
  switch (input.toLowerCase()) {
    case 'mon':
    case 'monday':
    now.next.push(x + ((i - input.dayToNum) + input.dayToNum + 1))
      break;
    case 'tue':
    case 'tuesday':
    now.next.push(x + ((i - input.dayToNum) + input.dayToNum + 2))
      break;
    case 'wed':
    case 'wednesday':
    now.next.push(x + ((i - input.dayToNum) + input.dayToNum + 3))
      break;
    case 'thu':
    case 'thursday':
    now.next.push(x + ((i - input.dayToNum) + input.dayToNum + 4))
      break;
    case 'fri':
    case 'friday':
    now.next.push(x + ((i - input.dayToNum) + input.dayToNum + 5))
      break;
    case 'sat':
    case 'saturday':
    now.next.push(x + ((i - input.dayToNum) + input.dayToNum + 6))
      break;
    case 'sun':
    case 'Sunday':
    now.next.push(x + ((i - input.dayToNum) + input.dayToNum))
      break;
  }
}

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
