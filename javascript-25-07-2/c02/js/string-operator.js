// Store the greeting in a variable
var greeting = 'Howdy';
// Store the greeting in a variable
var name = 'Molly';
/*Creat the welcome message by concatenating the strings in the two variables */
var welcomeMessage = greeting + name + '!';
// Get the element tha has an id of greeting
var el=document.getElementById('greeting');
//Replace the context of this element with the personal message
el.textContent=welcomeMessage;