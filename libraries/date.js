function isArray(myArray) {
  return Object.prototype.toString.call(myArray) === '[object Array]';
}

function replaceAll(input, obj) {
  var retStr = input.toString();
  for (x in obj) {
    retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
  }
  return retStr;
};

/*  this.settings = {}
    this.settings.monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    this.settings.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    this.settings.shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    this.settings.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    this.settings.shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    this.settings.seasons = ['Winter', 'Spring', 'Summer', 'Fall']
    this.settings.shortSeasons = ['W', 'S', 'S', 'F']
    this.settings.keyWords = {
      'T': 'time',
      'D': 'date',
      'ms': 'millisecond',
      's': 'second',
      'm': 'minute',
      'h': 'hour',
      'w': 'weekDay',
      'd': 'day',
      'M': 'month',
      'S': 'season',
      'y': 'smallYear',
      't': 'timezoneOffset',
      'z': 'timezone',
      'l': 'leapyear',
      'yy': 'dayOfYear',
      'dd': 'dayName',
      'ddd': 'shortDayName',
      'MM': 'monthName',
      'MMM': 'shortMonthName',
      'time': 'time',
      'date': 'date',
      'millisec': 'millisecond',
      'sec': 'second',
      'min': 'minute',
      'offset': 'timezoneOffset',
      'z': 'timezone',
      'leap': 'leapyear',
      'dN': 'dayName',
      'dn': 'shortDayName',
      'MN': 'monthName',
      'Mn': 'shortMonthName',
      'time': 'time',
      'date': 'date',
      'millisecond': 'millisecond',
      'second': 'second',
      'minute': 'minute',
      'hour': 'hour',
      'weekDay': 'weekDay',
      'day': 'day',
      'month': 'month',
      'season': 'season',
      'smallYear': 'smallYear',
      'timezoneOffset': 'timezoneOffset',
      'timezone': 'timezone',
      'leapyear': 'leapyear',
      'dayOfYear': 'dayOfYear',
      'dayName': 'dayName',
      'shortDayName': 'shortDayName',
      'monthName': 'monthName',
      'shortMonthName': 'shortMonthName',
    }
    this.settings.hourFormat = D.getHours()
    this.settings.dateFormat = [D.getMonth(), D.getDate(), D.getFullYear()]
    this.settings.timeFormat = [this.settings.hourFormat, D.getMinutes(), D.getSeconds()]
*/

/*  this._year_ = D.getFullYear()
        this._leapYear_ = ((this._year_ % 2 == 0) ? ((this._year_ % 100 == 0)? ((this._year_ % 400 == 0) ? (true) : (false)) : (true)) : (false))
        if(this.leapYear) {
          this.settings.monthLengths[1] = 29
        } else {
          this.settings.monthLengths[1] = 29
        }
        this._date_ = this.settings.dateFormat[0] + '/' + this.settings.dateFormat[1] + '/' + this.settings.dateFormat[2];
        this._time_ = this.settings.timeFormat[0] + ':' + this.settings.timeFormat[1] + ':' + this.settings.timeFormat[2];
        this._hour_ = this.settings.hourFormat
        this._minute_ = D.getMinutes()
        this._second_ = D.getSeconds()
        this._millisecond_ = D.getMilliseconds()
        this._day_ = D.getDate()
        this._weekDay_ = D.getDay()
        this._dayName_ = this.settings.dayNames[D.getMonth()]
        this._dayNameShort_ = this.settings.shortDayNames[D.getDay()]
        this._month_ = D.getMonth()
        this._monthName_ = this.settings.monthNames[D.getMonth()]
        this._monthNameShort_ = this.settings.shortMonthNames[D.getDay()]
        this._shortYear_ = this._year_ % 100
        this._millisecond_ = D.getMilliseconds()
        this._timezone_ = D.getTimezoneOffset() / 60
        this._timezoneOffset_ = D.getTimezoneOffset()
        this._season_ = Math.ceil(((this._month_ + 1) / 3)) - 1
        this._seasonNorth_ = this.settings.seasons[this._season_]
        this._seasonSouth_ = this.settings.seasons[this._season_]*/

var Now = function(input, format) {
  var D = new Date
  this.settings = {}
    this.settings.monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    this.settings.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    this.settings.shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    this.settings.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    this.settings.shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    this.settings.seasons = ['Winter', 'Spring', 'Summer', 'Fall']
    this.settings.shortSeasons = ['W', 'S', 'S', 'F']
    this.settings.formatWords = {
      shift: {
        next: 'next',
        last: 'last',
        this: 'this',
      },
      edge: {
        begining: 'begining',
        end: 'end',
        last: 'last',
        first: 'first',
        start: 'start'
      },
      direction: {

      },
      unit: {
        milliseconds: 'milliseconds',
        seconds: 'seconds',
        minutes: 'minutes',
        hours: 'hours',
        days: 'days',
        months: 'months',
        years: 'years',
      },
    }
  this.just = {}
  var formatObj = {
    '': '',
  }
  this.total = 0
  this.settings.supportedFormats = {}
  if (input != null && format != null) {

  } else if (input != null) {
    if (typeof input == 'string') {
      if (input.toLowerCase() == 'now') {
        this.total = 0
        this.Year = {}
          this.Year.value = D.getFullYear()
          this.Year.multiplyer = 365.25 * 24 * 60 * 60 * 1000
          this.Year.milli = this.Year.value * this.Year.multiplyer
        this.LeapYear = ((this.Year_ % 2 == 0) ? ((this.Year_ % 100 == 0)? ((this.Year_ % 400 == 0) ? (true) : (false)) : (true)) : (false))
          if(this.LeapYear) {
            this.settings.monthLengths[1] = 28
          } else {
            this.settings.monthLengths[1] = 29
          }
        this.Month = {}
          this.Month.value = D.getMonth()
          this.Month.multiplyer = this.settings.monthLengths[D.getMonth()] * 24 * 60 * 60 * 1000
          this.Month.milli = (this.Month.value + 1) * this.Month.multiplyer
        this.Date = {}
          this.Date.value = D.getDate()
          this.Date.multiplyer = 24 * 60 * 60 * 1000
          this.Date.milli = (this.Date.value + 1) * this.Date.multiplyer
        this.Hour = {}
          this.Hour.value = D.getHours()
          this.Hour.multiplyer = 60 * 60 * 1000
          this.Hour.milli = (this.Hour.value + 1) * this.Hour.multiplyer
        this.Minute = {}
          this.Minute.value = D.getMinutes()
          this.Minute.multiplyer = 60 * 1000
          this.Minute.milli = (this.Minute.value + 1) * this.Minute.multiplyer
        this.Second = {}
          this.Second.value = D.getSeconds()
          this.Second.multiplyer = 1000
          this.Second.milli = (this.Second.value + 1) * this.Second.multiplyer
        this.Millisecond = {}
          this.Millisecond.value = D.getMilliseconds()
          this.Millisecond.multiplyer = 1
          this.Millisecond.milli = (this.Millisecond.value + 1) * this.Millisecond.multiplyer
        this.WeekDay = {}
          this.WeekDay.value = D.getDay()
      } else if (input.toLowerCase() == 'today') {
        //
      }
    } else if (typeof input == 'number') {
      this.just = {called:'now', input:input}
    } else if (isArray(input)) {
      var inputLength = 0
      for (var i = 0; i < input.length; i++) {
        inputLength++
      }
    } else if (typeof input == 'object') {
      var refObj = {
      'T': 'time',
      'D': 'date',
      'ms': 'millisecond',
      's': 'second',
      'm': 'minute',
      'h': 'hour',
      'w': 'weekDay',
      'd': 'day',
      'M': 'month',
      'S': 'season',
      'y': 'smallYear',
      't': 'timezoneOffset',
      'z': 'timezone',
      'l': 'leapyear',
      'yy': 'dayOfYear',
      'dd': 'dayName',
      'ddd': 'shortDayName',
      'MM': 'monthName',
      'MMM': 'shortMonthName',
      'time': 'time',
      'date': 'date',
      'millisec': 'millisecond',
      'sec': 'second',
      'min': 'minute',
      'offset': 'timezoneOffset',
      'z': 'timezone',
      'leap': 'leapyear',
      'dN': 'dayName',
      'dn': 'shortDayName',
      'MN': 'monthName',
      'Mn': 'shortMonthName',
      'time': 'time',
      'date': 'date',
      'millisecond': 'millisecond',
      'second': 'second',
      'minute': 'minute',
      'hour': 'hour',
      'weekDay': 'weekDay',
      'day': 'day',
      'month': 'month',
      'season': 'season',
      'smallYear': 'smallYear',
      'timezoneOffset': 'timezoneOffset',
      'timezone': 'timezone',
      'leapyear': 'leapyear',
      'dayOfYear': 'dayOfYear',
      'dayName': 'dayName',
      'shortDayName': 'shortDayName',
      'monthName': 'monthName',
      'shortMonthName': 'shortMonthName',
    }
    var newObj;
    for (var i=0; i < Object.keys(refObj).length; i++){
      if(input.hasOwnProperty(Object.keys(refObj)[i])){
        newObj = input[Object.keys(refObj)[i]]
      }
    }
    
    }
  } else {
    this.total = 0
    this.Year = {}
      this.Year.value = D.getFullYear()
      this.Year.multiplyer = 365.25 * 24 * 60 * 60 * 1000
      this.Year.milli = this.Year.value * this.Year.multiplyer
    this.LeapYear = ((this.Year_ % 2 == 0) ? ((this.Year_ % 100 == 0)? ((this.Year_ % 400 == 0) ? (true) : (false)) : (true)) : (false))
      if(this.LeapYear) {
        this.settings.monthLengths[1] = 28
      } else {
        this.settings.monthLengths[1] = 29
      }
    this.Month = {}
      this.Month.value = D.getMonth()
      this.Month.multiplyer = this.settings.monthLengths[D.getMonth()] * 24 * 60 * 60 * 1000
      this.Month.milli = (this.Month.value + 1) * this.Month.multiplyer
    this.Date = {}
      this.Date.value = D.getDate()
      this.Date.multiplyer = 24 * 60 * 60 * 1000
      this.Date.milli = (this.Date.value + 1) * this.Date.multiplyer
    this.Hour = {}
      this.Hour.value = D.getHours()
      this.Hour.multiplyer = 60 * 60 * 1000
      this.Hour.milli = (this.Hour.value + 1) * this.Hour.multiplyer
    this.Minute = {}
      this.Minute.value = D.getMinutes()
      this.Minute.multiplyer = 60 * 1000
      this.Minute.milli = (this.Minute.value + 1) * this.Minute.multiplyer
    this.Minshe = {}
      this.Minshe.id = btoa(btoa(btoa(btoa(btoa(btoa(btoa('dgkdpmg+dpifjd/oifjp+oudfg/ohd/d+fghd/fgh +dfd+ f/gh')))))))
    this.Second = {}
      this.Second.value = D.getSeconds()
      this.Second.multiplyer = 1000
      this.Second.milli = (this.Second.value + 1) * this.Second.multiplyer
    this.Millisecond = {}
      this.Millisecond.value = D.getMilliseconds()
      this.Millisecond.multiplyer = 1
      this.Millisecond.milli = (this.Millisecond.value + 1) * this.Millisecond.multiplyer
    this.WeekDay = {}
      this.WeekDay.value = D.getDay()
  }
  this.toMilliseconds = function () {
    this.total = this.Year.milli + this.Month.milli + this.Date.milli + this.Hour.milli + this.Minute.milli + this.Second.milli + this.Millisecond.milli
    return this.total
  }
  this.fromMilliseconds = function () {
    this.Year.value = Math.floor(this.total/this.Year.multiplyer)
    this.total -= this.Year.multiplyer * this.Year.value
    this.Month.value = Math.floor(this.total/this.Month.multiplyer)
    this.total -= this.Month.multiplyer * this.Month.value
    this.Date.value = Math.floor(this.total/this.Date.multiplyer)
    this.total -= this.Date.multiplyer * this.Date.value
    this.Hour.value = Math.floor(this.total/this.Hour.multiplyer)
    this.total -= this.Hour.multiplyer * this.Hour.value
    this.Minute.value = Math.floor(this.total/this.Minute.multiplyer)
    this.total -= this.Minute.multiplyer * this.Minute.value
    this.Second.value = Math.floor(this.total/this.Second.multiplyer)
    this.total -= this.Second.multiplyer * this.Second.value
    this.Millisecond.value = Math.floor(this.total/this.Millisecond.multiplyer)
    this.total -= this.Millisecond.multiplyer * this.Millisecond.value
    var leeap = ((this.Year.value % 2 == 0) ? ((this.Year.value % 100 == 0)? ((this.Year.value % 400 == 0) ? (true) : (false)) : (true)) : (false))
    this.WeekDay.value = new new Date('' + this.settings.monthNames[this.Month.value].toString() + ' ' + (this.Date.value + 1).toString() + ', ' + this.Year.value.toString()).getDay()
    return this.total
  }
  this.addType = function(type, amount){
    this.toMilliseconds()
    type = type[0].toUpperCase() + type.slice(1, type.length)
    this.total += this[type].multiplyer * amount
    this.fromMilliseconds()
  }
  this.create = function (input, format) {
    if (input != null && format != null) {

    } else if (input != null){
      if (typeof input == 'string') {

      } else if (typeof input == 'number') {

      } else if (isArray(input)) {

      } else if (typeof input == 'object') {

      }
    } else {
      return this
    }
  }
  this.add = function (input, amount) {
    if (input != null && amount != null) {

    } else if (input != null){
      if (typeof input == 'string') {

      } else if (typeof input == 'number') {
        if (this.just == {}){

        }
        this.just = {type:'add', value: input, more: 'yes'}
      } else if (isArray(input)) {

      } else if (typeof input == 'object') {

      }
    } else {

    }
  }
  this.subtract = function (input) {
    if (input != null && amount != null) {

    } else if (input != null){
      if (typeof input == 'string') {

      } else if (typeof input == 'number') {

      } else if (isArray(input)) {

      } else if (typeof input == 'object') {

      }
    } else {

    }
  }
  this.next = function (input, amount) {
    if (input != null && amount != null) {

    } else if (input != null){
      if (typeof input == 'string') {

      } else if (typeof input == 'number') {

      } else if (isArray(input)) {

      } else if (typeof input == 'object') {

      }
    } else {

    }
  }
  this.last = function (input, amount) {
    if (input != null && amount != null) {

    } else if (input != null){
      if (typeof input == 'string') {

      } else if (typeof input == 'number') {

      } else if (isArray(input)) {

      } else if (typeof input == 'object') {

      }
    } else {

    }
  }
  this.is = function (input, value) {
    if (input != null && amount != null) {

    } else if (input != null){
      if (typeof input == 'string') {

      } else if (typeof input == 'number') {

      } else if (isArray(input)) {

      } else if (typeof input == 'object') {

      }
    } else {

    }
  }
  this.get = function (input) {
    if (input != null){
      if(supportedFormats[input] != undefined){
        if (typeof input == 'string') {

        } else if (typeof input == 'number') {

        } else if (isArray(input)) {

        } else if (typeof input == 'object') {

        }
      }
    } else {
      return this
    }
  }//type = type[0].toUpperCase() + type.slice(1, type.length - 1)
  this.set = function (input) {
    if (input != null){
      if(supportedFormats[input] != undefined){
        if (typeof input == 'string') {

        } else if (typeof input == 'number') {

        } else if (isArray(input)) {

        } else if (typeof input == 'object') {

        }
      }
    } else {
      return this
    }
  }
  this.startOf = function (input) {
    if (input != null){
      if (typeof input == 'string') {

      } else if (typeof input == 'number') {

      } else if (isArray(input)) {

      } else if (typeof input == 'object') {

      }
    } else {

    }
  }
  this.endOf = function (input) {
    if (input != null){
      if (typeof input == 'string') {

      } else if (typeof input == 'number') {

      } else if (isArray(input)) {

      } else if (typeof input == 'object') {

      }
    } else {

    }
  }
  this.compare = function (val1, val2, type) {
    if (val1 != null && val2 != null) {

    } else if (val1 != null){
      if (typeof val1 == 'string') {

      } else if (typeof val1 == 'number') {

      } else if (isArray(val1)) {

      } else if (typeof val1 == 'object') {
        if (val1.aiudhooainsoaunsvius == this.aiudhooainsoaunsvius){
          val1.toMilliseconds()
          this.toMilliseconds()
          var VaR = this
          VaR.total = Math.abs(Math.abs(val1.total) - Math.abs(this.total))
          return VaR.fromMilliseconds()
        }
      }
    } else {

    }
  }
}


/*  var toNumObj = {
    'jan(ruary)?': '0',
    'Apr(ruary)?': '1',
    'mar(ch)?': '2',
    'apr(il)?': '3',
    'may': '4',
    'june': '5',
    'july(ruary)?': '6',
    'aug(ruary)?': '7',
    'sept(ruary)?': '8',
    'oct(ruary)?': '9',
    'nov(ruary)?': '10',
    'dec(ruary)?': '11',
    'sun(day)?': '0',
    'mon(day)?': '1',
    'tue(sday)?': '2',
    'wed(nesday)?': '3',
    'thu(rsday)?': '4',
    'fri(day)?': '5',
    'sat(urday)?': '6',
  }
  var data = {
    monthLengths: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    seasons: ['Winter', 'Spring', 'Summer', 'Fall'],
    shortSeasons: ['W', 'S', 'S', 'F'],
  }
  Date.prototype.stdTimezoneOffset = function() {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.min(jan.getTimezoneOffset(),jul.getTimezoneOffset()) == D.getTimezoneOffset();
  }
  var formatObj = {
    '#{time}': '_time_',
    '#{date}': '_date_',
    '#{sec}': '_second_',
    '#{min}': '_minute_',
    '#{hour}': '_hour_',
    '#{day}': '_day_',
    '#{week-day}': '_weekDay_',
    '#{month}': '_month_',
    '#{year}': '_year_',
    '#{short-year}': '_shortYear_',
  }
  if (((this._year_ % 2 == 0) ? ((this._year_ % 100 == 0)? ((this._year_ % 400 == 0) ? (true) : (false)) : (true)) : (false))) {monthLengths[1] = 29}
  var D = new Date
  this.settings = {}
  this.settings.hourFormat = D.getHours()
  this.settings.dateFormat = [D.getMonth(), D.getDate(), D.getFullYear()]
  this.settings.timeFormat = [this.settings.hourFormat, D.getMinutes(), D.getSeconds()]
  this._date_ = this.settings.dateFormat[0] + '/' + this.settings.dateFormat[1] + '/' + this.settings.dateFormat[2];
  this._time_ = this.settings.timeFormat[0] + ':' + this.settings.timeFormat[1] + ':' + this.settings.timeFormat[2];
  this._hour_ = this.settings.hourFormat
  this._minute_ = D.getMinutes()
  this._second_ = D.getSeconds()
  this._millisecond_ = D.getMilliseconds()
  this._day_ = D.getDate()
  this._weekDay_ = D.getDay()
  this._dayName_ = data.dayNames[D.getMonth()]
  this._dayNameShort_ = data.shortDayNames[D.getDay()]
  this._month_ = D.getMonth()
  this._monthName_ = data.monthNames[D.getMonth()]
  this._monthNameShort_ = data.shortMonthNames[D.getDay()]
  this._year_ = D.getFullYear()
  this._shortYear_ = this._year_ % 100
  this._millisecond_ = D.getMilliseconds()
  this._timezone_ = D.getTimezoneOffset() / 60
  this._timezoneOffset_ = D.getTimezoneOffset()
  this._leapYear_ = ((this._year_ % 2 == 0) ? ((this._year_ % 100 == 0)? ((this._year_ % 400 == 0) ? (true) : (false)) : (true)) : (false))
  this._season_ = Math.ceil(((this._month_ + 1) / 3)) - 1
  this._seasonNorth_ = data.seasons[this._season_]
  this._seasonSouth_ = data.seasons[this._season_]
  this._dst_ = D.getTimezoneOffset() < D.stdTimezoneOffset()
  this.settings.replaceValues = {
    '#{time}': this._time_,
    '#{date}': this._date_,
    '#{sec}': this._second_,
    '#{min}': this._minute_,
    '#{hour}': this._hour_,
    '#{day}': this._day_,
    '#{week-day}': this._weekDay_,
    '#{month}': this._month_,
    '#{month-name}': this._monthName_,
    '#{month-name-short}': this._monthNameShort_,
    '#{year}': this._year_,
    '#{short-year}': this._shortYear_,
    '#{leap-year}': this._leapYear_,
  }
  this.toNum = function (input) {
      var retStr = input.toString();
      for (var x in toNumObj) {
        retStr = retStr.replace(new RegExp(x, 'gi'), toNumObj[x]);
      }
      return retStr;
  }
  this.symplify = function () {
    if(this._millisecond_ >= 1000){
      this._millisecond_ -= 1000
      this._second_ += 1
    }
    if(this._second_ >= 59){
      this._second_ -= 60
      this._minute_ += 1
    }
    if(this._minute_ >= 59){
      this._minute_ -= 60
      this._hour_ += 1
    }
    if(this._hour_ >= 23){
      this._hour_ -= 24
      this._day_ += 1
      this._weekDay_ += 1
    }
    if(this._weekDay_ >= 6){
      this._weekDay_ -= 7
      this._day_ += 1
    }
    if (this._month_ == (0 || 2 || 4 || 6 || 7 || 9 || 11)) {
      if (this._day_ > 30) {
        this._day_ -= 31
        this._month_ += 1
      }
    } else if (this._month_ == (3 || 5 || 8)) {
      if (this._day_ > 29) {
        this._day_ -= 30
        this._month_ += 1
      }
    } else {
      if (this._leapYear_ == true) {
        if (this._day_ > 28) {
          this._day_ -= 29
          this._month_ += 1
        }
      } else {
        if (this._day_ > 27) {
          this._day_ -= 28
          this._month_ += 1
        }
      }
    }
    if (this._month_ > 11) {
      this._month_ -= 12
      this._year_ += 1
    }
  }
  this.get = function (input) {
    if (typeof input == 'object') {
      var arr = []
      for (var i = 0; i < input.length; i++) {
        switch (input[i].toString().toLowerCase().trim()) {
          case expression:
            break;
          default:
        }
      }
    } else if (arguments.length > 1) {
      var arr = []
      for (var i = 0; i < arguments.length; i++) {
        switch (arguments[i].toString().toLowerCase().trim()) {
          case expression:
            break;
          default:
        }
      }
    } else {
      switch (input.toString().toLowerCase().trim()) {
        case 'day':
        arr.push(this._day_)
        break;
        case 'weekday':
        arr.push(this._weekDay_)
        break;
        case 'weekdayname':
        arr.push(this._dayName_)
        break;
        case 'weekdaynameshort':
        arr.push(this._dayNameShort_)
        break;
      }
    }
    this.symplify()
  }
  this.add = function (input, format) {
    format = replaceAll(format, formatObj)
    format = format.split(' ')
    var j = 0
    for (var i = 0; i < format.length; i++) {
      if (this[format[i]] != undefined) {
        this[format[i]] += input[j]
        j++
      }
    }
    this.symplify()
    return this
  }
  this.minus = function (input, format) {
    format = replaceAll(format, formatObj)
    format = format.split(' ')
    var j = 0
    for (var i = 0; i < format.length; i++) {
      if (this[format[i]] != undefined) {
        this[format[i]] -= input[j]
        j++
      }
    }
    this.symplify()
    return this
  }
  this.next = function (input) {
    input = toNum(input)
  }
  this.last = function () {
  }
  this.is = function () {
  }
  this.startOf = function () {
  }
  this.endOf = function () {
  }
  this.set = function (input, format) {
    format = replaceAll(format, formatObj)
    format = format.split(' ')
    var j = 0
    for (var i = 0; i < format.length; i++) {
      if (this[format[i]] != undefined) {
        this[format[i]] = input[j]
        j++
      }
    }
    this.symplify()
    return this
  }
  this.date = function(arg){
    return this['_date_']
  }
  this.time = function(arg){
    return this['_time_']
  }
  this.hour = function(arg){
    return this['_hour_']
  }
  this.minute = function(arg){
    return this['_minute_']
  }
  this.second = function(arg){
    return this['_second_']
  }
  this.millisecond = function(arg){
    return this['_millisecond_']
  }
  this.day = function(arg){
    return this['_day_']
  }
  this.weekDay = function(arg){
    return this['_weekDay_']
  }
  this.dayName = function(arg){
    return this['_dayName_']
  }
  this.dayNameShort = function(arg){
    return this['_dayNameShort_']
  }
  this.month = function(arg){
    return this['_month_']
  }
  this.monthName = function(arg){
    return this['_monthName_']
  }
  this.monthNameShort = function(arg){
    return this['_monthNameShort_']
  }
  this.year = function(arg){
    return this['_year_']
  }
  this.shortYear = function(arg){
    return this['_shortYear_']
  }
  this.millisecond = function(arg){
    return this['_millisecond_']
  }
  this.timezone = function(arg){
    return this['_timezone_']
  }
  this.timezoneOffset = function(arg){
    return this['_timezoneOffset_']
  }
  this.leapYear = function(arg){
    return this['_leapYear_']
  }
  return this
}
function replaceAll(input, obj) {
  var retStr = input.toString();
  for (x in obj) {
    retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
  }
  return retStr;
};
var xx = {
  date : '1',
  time : '1',
  hour : '1',
  minute : '1',
  second : '1',
  day : '1',
  weekDay : '1',
  dayName : '1',
  dayNameShort : '1',
  month : '1',
  monthName : '1',
  monthNameShort : '1',
  year : '1',
  shortYear : '1',
  millisecond : '1',
  timezone : '1',
  timezoneOffset : '1',
  leapYear : '1',
}
function hi() {
  for (var i in xx) {
    i = i.toString()
    i[0] = i[0].toUpperCase()
    console.log('this.get' + i + ' = (arg){\nvar x = new Now()\n return x[\'' + i + '\']\n}')
  }
}
var arr = new Now()
*/


console.log(isArray([]));
console.log(Number.NaN)
var arr = new Now()
function toWord(num) {
    var ones = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    var others = [
     '',
     'thousand',
     'million',
     'billion',
     'trillion',
     'quadrillion',
     'quintillion',
     'sextillion',
     'septillion',
     'octillion',
     'nonillion',
     'decillion',
     'undecillion',
     'duodecillion',
     'tredecillion',
     'quattuordecillion',
     'quindecillion',
     'sexdecillion',
     'septendecillion',
     'octodecillion',
     'novemdecillion',
     'vigintillion',
     'unvigintillion',
     'duovigintillion',
     'trevigintillion',
     'quattuorvigintillion',
     'quinvigintillion',
     'sexvigintillion',
     'septenvigintillion',
     'octovigintillion'
   ]
    num = num.toString().replace(',', '')
  for (var i = 0; i < num.length % 3; i++) {
    num = '0' + num
  }
  var split = []
  for (var i = 0; i < num.length; i+=3) {
    split.push(num.substr(i, 3))
  }
  split = split.reverse()
  var holder = []
  for (var i = 0; i < split.length; i++) {
    holder.push('')
    if(split[i][0] != 0){
      holder[i] += ones[split[i][0]] + ' hundred '
    }
    if (split[i][1] == 0) {
      holder[i] += ones[split[i][2]] + ' ' + others[i]
    } else if(split[i][1] < 2){
      holder[i] += ones[(split[i][1] * 10) + split[i][2]] + ' ' + others[i]
    } else {
      if (ones[split[i][2]] == '') {
        holder[i] += tens[split[i][1]] + ' ' + others[i]
      } else {
        holder[i] += tens[split[i][1]] + '-' + ones[split[i][2]] + ' ' + others[i]
      }
    }
  }
  holder = holder.reverse().join(', ')
  return holder
}
console.log(toWord(1400))
