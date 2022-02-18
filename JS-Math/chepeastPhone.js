let phones = [
    {name:'iphone',price:1000},
    {name:'piephone',price:1200},
    {name:'redmi',price:500},
    {name:'walton',price:20}
];
/* 
phone jokhon declear kora hoise mane holo phones er vitore joto data ace sob chole gece phone er vitore tai phone.price mane holo phones.price
*/
let chepest = phones[0];
for (const phone of phones) {
    if (phone.price<chepest.price) {
        chepest = phone;
    }
}
console.log(chepest);