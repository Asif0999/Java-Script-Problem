function animalCount(miles) {
    if (miles<=10) {
        return 'stay safe and wear mask always';
    }
    else if(miles<=20){
        return 'welcome to our jungle'
    }
    else if(miles<=30){
        return 'kuttai kamor dibo joldi bair ho'
    }
    else{
        return 'abar aysos aikhane beta bair ho '
    }
}
const output = animalCount(40);
console.log(output);