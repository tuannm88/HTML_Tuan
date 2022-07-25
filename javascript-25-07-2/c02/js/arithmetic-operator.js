var subtotal = (13+1)*5; //=70
var shipping=0.5*(13+1); //=7
var total=subtotal+shipping; //=77

//write the results to the screen
var elSub=document.getElementById('subTotal');
elSub.textContent=subtotal;
var elShip=document.getElementById('shipping');
elShip.textContent=shipping;
var elTotal=document.getElementById('total');
elTotal.textContent=total;
