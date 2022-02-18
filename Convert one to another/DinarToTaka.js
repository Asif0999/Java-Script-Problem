function convert(dinner) {
    var taka = dinner * 283.27;
    return taka;
}
var QuiteDinner = 100000;
var money = convert(QuiteDinner);
console.log(money)