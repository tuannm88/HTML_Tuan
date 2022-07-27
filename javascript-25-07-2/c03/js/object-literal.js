// Set up the object
var hotel = {
    name : 'Quay',
    rooms : 40,
    booked : 25,
    checkAvailability : function (){
        return this.rooms - this.booked;//Need 'this' because inside function
    }
}
// Update the HTML
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRoons = document.getElementById('rooms');
elRoons.textContent = hotel.checkAvailability();