// let number = [40,50,45,85,45,10];
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
    
//     sum = sum + element;
    
    
// }
// console.log(sum);

function sumOftotal(arry) {
    let sum = 0;
    for (let i = 0; i < arry.length; i++) {
        const element = arry[i];
        sum = sum + element;
        
    }
    return sum;
}
var number = [50,30];
let total = sumOftotal(number);
console.log(total);
/* 
array er modde jogfol ber kora 
*/