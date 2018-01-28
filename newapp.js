'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', 
'5pm', '6pm', '7pm']
;
var allLocations = [];

var totalCookiesPerHour =0;

var netTotal = 0;

var avgCookiesPerHour = [];


function Location(maxCustHour, minCustHour, avgCookiesPerCustomer, name ){
    this.name = name;
    this.minCustHour = minCustHour;
    this.maxCustHour = maxCustHour;
    this.avgCookiesPerHour = avgCookiesPerHour;
    this.randCustHour = [];
    this.cookiesSoldByHour = [];
    this.totalCookies = 0;
    allLocations.push(this);
}

function makeStands() {
    new Location('First and Pike', 23, 65, 6.3);
    new Location('Seatac Airport', 3, 24, 1.2);
    new Location('Seattle Center', 11, 38, 3.7);
    new Location('Capitol Hill', 20, 38, 2.3);
    new Location('Alki', 2, 16, 4.6);
};
makeStands();

function makeHeaderRow() {
    var cookieStands = document.getElementById('cookiestands');
    var trEl = document.createElement('tr');
    
    trEl.appendChild(thEl);
    
}
    for (var i = 0; i < hours.length; i++) {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    document.textContent=hours[i];
    trEl.appendChild(thEl);
    
}
    var thEl = document.createElement('th');
    thEl.textContent= 'Daily Location Totals';
    tableEl.appendChild(trEl);

    console.log(makeHeaderRow)

makeHeaderRow()

