function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
Number.prototype.add = function(input) {
    if (isArray(input)) {
        for (var i = 0; i < input.length; i++) {
            this += input[i]
        }
    } else {
        this += input
    }
}
Number.prototype.subtract = function(input) {
    if (isArray(input)) {
        for (var i = 0; i < input.length; i++) {
            this -= input[i]
        }
    } else {
        this -= input
    }
}
Number.prototype.multipy = function(input) {
    if (isArray(input)) {
        for (var i = 0; i < input.length; i++) {
            this *= input[i]
        }
    } else {
        this *= input
    }
}
Number.prototype.divide = function(input) {
    if (isArray(input)) {
        for (var i = 0; i < input.length; i++) {
            this /= input[i]
        }
    } else {
        this /= input
    }
}
Array.prototype.min = function(input) {
    return Math.min.apply(null, input)
};
Array.prototype.max = function(input) {
    return Math.max.apply(null, input)
};
Number.prototype.circumference = function(type, input) {
    switch (type.toLowerCase()) {
        case 'radius':
            this = input * 2 * Math.PI
            break;
        case 'diameter':
            this = input * Math.PI
            break;
        case 'area':
            this = Math.sqrt(input / Math.PI) * 2 * Math.PI
            break;
        case 'circumference':
            this = input
//          console.log('you are an idiot')
            break;
    }
}
