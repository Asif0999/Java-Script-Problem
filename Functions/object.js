var computer = {
    price: 35000,
    storage: '200gb',
    ram: 2,
    generation: 3 
} 
// var see = computer.price;
// console.log(see)


// how to change object property and there is three way to change the object property
computer.price=10000;


computer['price'] = 38000;


var changePrice = 'price';
computer[changePrice]=4500;
console.log(computer)

