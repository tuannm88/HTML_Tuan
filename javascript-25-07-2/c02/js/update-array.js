//Creat the array an assign it values
var color = ['white', 'black','custom'];
// Update the third item in the array
color[2]='beige';
//Get the element with an id of colors
var el = document.getElementById(  'color');
// Replace element with third item from the array
el.textContent = color[2];