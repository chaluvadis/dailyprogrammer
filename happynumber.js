/**
 * Happy Case
 * 68 = 6*6 + 8*8 = 36 + 64 = 100
 * 100 = 1*1 + 0*0 + 0*0 = 1
 */

square = function (x) { return x * x; }

happy = function (num) {
    var sum = 0;
    while (num >= 1) {
        var last_digit = num % 10;
        num = parseInt(num / 10);
        sum = sum + square(last_digit);
    }
    return sum;
}

isHappy = function(n) {
    return (n ==1 || (n> 4 && isHappy(happy(n))));
}

console.log(isHappy(100) == 1 ? "Happy Number" : "Not a happy number") ;
console.log(isHappy(19) == 1 ? "Happy Number" : "Not a happy number") ;
console.log(isHappy(5) == 1 ? "Happy Number" : "Not a happy number") ;
console.log(isHappy(7) == 1 ? "Happy Number" : "Not a happy number") ;
console.log(isHappy(9) == 1 ? "Happy Number" : "Not a happy number") ;
