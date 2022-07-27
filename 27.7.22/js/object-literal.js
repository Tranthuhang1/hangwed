var hotel = {
    name : 'quay',
    rooms : 40,
    booked : 25,
    checkAvailability : function (){
        return this.roons - this.booked;
    }
}
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRoons = document.getElementById('rooms');
elRoons.textContent = hotel.checkAvailability();