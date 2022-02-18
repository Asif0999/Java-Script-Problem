function avarage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = sum + element;
        var output = sum / 2;
        
    }
    return output;
}
var last = avarage([50,40,20]);
console.log(last);

/* 
array er modde ghor ber korar code 
*/