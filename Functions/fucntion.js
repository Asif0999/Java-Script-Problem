// function hello(params) {
//     console.log('hello world')
// }
// hello();
function somocha(taka) {
    console.log('somocha khabo dor taka ne  ',taka)
    console.log('onek din pore khabo')
    var somochaPrice = 10;
    var totalSomocha = taka / somochaPrice;
    return totalSomocha;
}
var money = 200;
var khabosomocha = somocha(money);
console.log('total somocah paise',khabosomocha)
console.log('dor ami aka khabo na toi o ne naile pet kharap krbe')