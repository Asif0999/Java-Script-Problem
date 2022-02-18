function pageRequremants(firstQuantity,secondQuantity,thirdQuantity) {
    const firstPageNeed = 100;
    const secondPageNeed = 200;
    const thirdPageNeed = 300;
    
    let first = firstPageNeed*firstQuantity;
    let second = secondPageNeed*secondQuantity;
    let third = thirdPageNeed*thirdQuantity;

    var totalPrice = first+second+third;
    return totalPrice;
}
let output = pageRequremants(5,10,5);
console.log(output);