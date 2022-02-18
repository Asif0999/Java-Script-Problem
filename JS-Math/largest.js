function largest(large) {
    let sum = large[0];
    for (let i = 0; i < large.length; i++) {
        var element = large[i];
        
        if (element<sum) {
            sum = element;
        }
        
    }
    return sum;
}
var output = largest([40,50,60,80,90,40,30]);
console.log(output);


/* 
Array er modde sobche soto element konta ber korar code
*/