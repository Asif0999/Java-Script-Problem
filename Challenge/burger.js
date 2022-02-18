function burgarStore(foodname,quantity) {
    if (foodname.toLowerCase()!='burger') {
        var wrong = 'sorry we are sell only burger'
        return wrong;
    }
    var price = 50*quantity;
    var massage = 'Order Sucessfull, Your order is :  ' + foodname + '  Total price is :' + price+'$';
    return massage;
}
var bname = 'Burger';
var qname = 4;
var last = burgarStore(bname,qname);
console.log(last);