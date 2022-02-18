let array = [10,50,12,85,-96,41];
function checkList(input) {
    var box = [];
    for (let i = 0; i < input.length; i++) {
        var element = input[i];
        // console.log(element);
        if (element>0) {
            box.push(element)
        } else {
            break;
        }
        
    }
    return box;
}
let output = checkList(array);
console.log(output);