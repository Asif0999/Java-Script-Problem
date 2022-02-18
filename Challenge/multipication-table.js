function multipication(digit) {
    console.log('multipication of ', digit);
    var number = 1;
while (number<=10) {
    var result = digit * number;
    console.log(digit + ' * ' + number + ' = '+ result);
    number++;
}
}
var input = 15;
multipication(input)


