'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', 
'5pm', '6pm', '7pm']
;
var allLocations = [];

var totalCookiesPerHour =0;

var finalTotal = 0;

function Location(name, minCustHour, maxCustHour,avgCookiesPerHour ){
    this.name = name;
    this.minCustHour = minCustHour;
    this.maxCustHour = maxCustHour;
    this.avgCookiesPerHour = avgCookiesPerHour;
    this.randCustHour = [];
    this.cookiesPerHour = [];
    this.totalCookies = 0;
    allLocations.push(this);
    this.calcRandCustPerHour = function() {
        for (var i =0; i < hours.length; i++) {
            this.randCustHour.push(Math.floor(Math.random()) * (this.maxCustHour - this.minCustHour))
            console.log(this.randCustHour[i]);

        }
    };
    this.calcCookiesPerHour = function() {
        for (var i = 0; i < hours.length; i++) {
            this.cookiesPerHour.push(Math.round(this.avgCookiesPerHour * this.randCustHour[i]))
            console.log(this.cookiesPerHour[i]);
            this.totalCookies += this.cookiesPerHour [i];
        }

    };
    this.calcCookiesPerHour();
    this.calcRandCustPerHour();
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
    var cookieshops = document.getElementById('cookieshops');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    

    for (var i = 0; i < hours.length; i++) {
     thEl = document.createElement('th');
     thEl.textContent = hours[i];
     trEl.appendChild(thEl);
    
}

    thEl = document.createElement('th');
    thEl.textContent= 'Daily Location Totals';
    trEl.appendChild(thEl);
};

    makeHeaderRow();

for (var j = 0; j < allLocations.length; j++) {
    function makeDataRow() {
        var cookieshops = document.getElementById('cookieshops');
        var trEl = document.createElement('tr');
        var tdEl = document.createElement('td');
        tdEl.textContent= allLocations[j].name;
        trEl.appendChild(tdEl);

        for (var i = 0; i < hours.length; i++) {
            tdEl = document.createElement('td');
            tdEl.textContent = allLocations[j].cookiesPerHour[i];
            trEl.appendChild(tdEl);
        }
        tdEl = document.createElement('td');
        tdEl.textContent = allLocations[j].totalCookies;
        trEl.appendChild(tdEl);
        cookieshops.appendChild(trEl);
    };
    makeDataRow();
};

function makeTotalRow() {
    var cookieshops = document.getElementById('cookieshops');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent= 'Total';
    trEl.appendChild(tdEl);

    for (var i = 0; i < hours.length; i++); {
    totalCookiesPerHour = 0;
    for (var j = 0; j < allLocations.length; j++) {
        totalCookiesPerHour += allLocations[j].cookiesPerHour[i];

    }
    tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesPerHour;
    trEl.appendChild(tdEl);
    finalTotal += totalCookiesPerHour;

    }
    tdEl = document.createElement('td');
    tdEl.textContent = finalTotal;
    trEl.appendChild(tdEl);
    cookieshops.appendChild(trEl);

};
makeTotalRow();