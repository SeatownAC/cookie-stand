'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', 
'5pm', '6pm', '7pm']
;
var allLocations = [];

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
           this.randCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour +1)) + this.minCustHour);
           console.log(this.randCustHour[i]);

       }
   };
   this.calcCookiesPerHour = function() {
       for (var j = 0; j < hours.length; j++) {
           this.cookiesPerHour.push(Math.round(this.avgCookiesPerHour * this.randCustHour[j]));
           console.log(this.cookiesPerHour[j]);
           this.totalCookies += this.cookiesPerHour[j];
       }

   };
   this.calcRandCustPerHour();
   this.calcCookiesPerHour();

}

function makeStands() {
   new Location('First and Pike', 23, 65, 6.3);
   new Location('Seatac Airport', 3, 24, 1.2);
   new Location('Seattle Center', 11, 38, 3.7);
   new Location('Capitol Hill', 20, 38, 2.3);
   new Location('Alki', 2, 16, 4.6);
};
makeStands();

function makeHeaderRow(hours) {
   var cookieshops = document.getElementById('cookieshops');
   var trEl = document.createElement('tr');
   
   var thEmpty = document.createElement('th');
   thEmpty.textContent = '';
   //var thEl = document.createElement('th');
   trEl.appendChild(thEmpty);
   
   

   for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
   
}

   var thElm = document.createElement('th');
   thElm.textContent= 'Daily Location Totals';
   trEl.appendChild(thElm);
   cookieshops.appendChild(trEl);
};

   makeHeaderRow(hours);

   
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

    }   
   for (var j = 0; j < allLocations.length; j++) {
   makeDataRow(j);
   
}

function makeTotalRow() {
   var cookieshops = document.getElementById('cookieshops');
   var trEl = document.createElement('tr');
   

   var tdEl = document.createElement('td');
   tdEl.textContent= 'Total';
   trEl.setAttribute ('id', 'endRow');
   trEl.appendChild(tdEl);

   var totalCookiesPerHour = 0;

   var finalTotal = 0;

   for (var i = 0; i < hours.length; i++) {
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



}

makeTotalRow();


var storeForm = document.getElementById('store-form'); 
console.log (storeForm);
function handleSubmitForm(event) {
    event.preventDefault(); 

    // var trEl = document.createElement('tr');
    // var tdEl = document.createElement('td');
    // tdEl.textContent= allLocations[j].name;
    var cookieshops = document.getElementById('cookieshops');

    if(!event.target.name.value || !event.target.mincusthour.value || !event.target.maxcusthour.value || !event.target.avgcookiesperhour.value) {
        return alert('Wrong, stupid!');
    }

    var name = event.target.name.value;
    var minCustHour = parseInt(event.target.mincusthour.value);
    var maxCustHour = parseInt(event.target.maxcusthour.value);
    var avgCookiesPerHour = parseFloat(event.target.avgcookiesperhour.value);

  
    new Location(name, minCustHour, maxCustHour, avgCookiesPerHour); 

    var endRow = document.getElementById('endRow');
    cookieshops.removeChild(endRow);

    makeDataRow(allLocations.length - 1);
    makeTotalRow();

    event.target.name.value = null;
    event.target.minCustHour.value = null;
    event.target.maxCustHour.value = null;
    event.target.avgCookiesPerHour.value = null;

// for(var i = cookieshops.rows.length; i=0; i--) {
//     cookieshops.deleteRow(i-1)
//     makeHeaderRow()
//     makeDataRow()
//     makeTotalRow()
// }
//    console.log(currentStore);
  
//     currentStore.calcRandCustPerHour();
//     currentStore.calcCookiesPerHour();
//     //makeStands();
    //makeTotalRow.reset();
}
storeForm.addEventListener('submit', handleSubmitForm);
