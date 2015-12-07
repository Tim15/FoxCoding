function pritify(type) {
  var d = new Date
  switch (type.toLowerCase()) {
    case 'date':
      return d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear()
      break;
    case 'time':
      return d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
      break;
  }
}

function translate(type, amount) {
  switch (type) {
    case 'sec':
    case 'second':
      if (amount > 3600) {
        var hour = (amount - (amount % 3600)) / 3600
        var min = (amount - (amount % 60)) / 60
        return hour + ':' + min + ':' + amount - ((hour * 3600)(min * 60))
      } else if (amount > 60) {
        var min = (amount - (amount % 60)) / 60
        return '0:' + min + ':' + amount - (min / 60)
      } else {
        return amount
      }
      break;
  }
}
