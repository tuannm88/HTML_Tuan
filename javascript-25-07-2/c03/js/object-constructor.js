// Setup the object
var hotel = new Object();

hotel.name = 'Tuan';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function (){
    return this.rooms - this.booked;
};

var elname = document.getElementById('hotelName');
elname.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();