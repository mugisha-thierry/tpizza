
var total;

function show(){

var priceSize = parseInt(document.getElementById('size').value);
var priceCrust = parseInt(document.getElementById('crust').value);
var form = document.getElementById('form1');
var number = parseInt(document.getElementById('number').value);
var topping = [];
form.querySelectorAll('input').forEach(function(input){
    if ( input.type === 'checkbox'&& input.checked){
        topping.push(parseInt(input.value));
    }
})
var sum = topping.reduce(function(a, b){
    return a + b;
}, 0);
 total= (priceCrust + priceSize + sum)*number;
document.getElementById('messa').value ="The amount to be paid for the pizza is :"+ " " + total;
}
function address(){
    alert("fill the address from where your Pizza will be delivered")
}
$(document).ready(function () {
$('#yes').click(function () {
    $('#addr').show()

})
})

function totall(){
    document.getElementById('totalAmount').value ="The total amount to be paid for the pizza is :"+" "+ total
}
function placeOrder(){
    alert("thanks for shopping with us.")
}