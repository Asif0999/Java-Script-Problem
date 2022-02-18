let names = ['shakib','jackkalis','jadeja','sureshrina','shakib','jadeja'];
function allrounder(name) {
    let reserve = [];
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        if (reserve.indexOf(element) == -1) {
            reserve.push(element)
        }
        
    }
    return reserve;
}
var output = allrounder(names);
console.log(output);