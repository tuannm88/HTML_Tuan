// Creat 3 variable to store the infomation needed.
var price;
var quantity;
var total;
// Assign values to the price and quantity variables.
price = 5;
quantity = 14;
//Calculate the total by multiplying the price quantity.
total = price*quantity;
//Get the element with an id of cost.
var el=document.getElementById("cost");
el.textContent='$'+total;

