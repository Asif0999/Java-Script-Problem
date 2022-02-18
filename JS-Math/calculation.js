let khata = 20;
let pen = 10;
let scale = 15;
function studentAccessories(khataQuantity,penQuentity,scaleQuantity) {
    var khataTotal = khata  * khataQuantity;
    var penTotal = pen * penQuentity;
    var scaleTotal = scale * scaleQuantity;
    
    var studentTotal = khataTotal + penTotal  + scaleTotal;
    return studentTotal;
}
var totalCost = studentAccessories(15,8,5);
console.log(totalCost);