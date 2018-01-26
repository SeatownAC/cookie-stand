'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', 
'5pm', '6pm', '7pm'];

//First and Pike Location
var firstAndPike = {
    name: "First and Pike",
    //creating key value pairs inside of my object they are called properties
    minCustHour: 23,
    maxCustHour: 65,
    avgCookiesPerHour: 6.3,
    randCustHour: [],
    cookiesSoldByHour: [],
   
    //method for random customers by hour
    calcRandCustHour: function() {
      for (var i = 0; i < hours.length; i++) {
        this.randCustHour.push(
          Math.floor(
            Math.random() * (this.maxCustHour - this.minCustHour + 1)
          ) + this.minCustHour
        );
        console.log(this.randCustHour[i]);
      }
    },
    //method for cookies sold by hour
    calcCookiesSoldByHour: function() {
      for (var j = 0; j < hours.length; j++) {
        this.cookiesSoldByHour.push(
          Math.round(this.avgCookiesPerHour * this.randCustHour[j])
        );
        console.log(this.cookiesSoldByHour[j]);
      }
    },
    render: function() {
      var pike = document.getElementById("fandp");
      var fandp = document.getElementById("pike-list");
      //calling the methods in the object literal
      this.calcRandCustHour();
      this.calcCookiesSoldByHour();
      var h3El = document.createElement("h3");
      //give text to the new h3 element
      h3El.textContent = this.name;
      pike.appendChild(h3El);
      for (var k = 0; k < hours.length; k++) {
        //stepping through the hours array
        var liEl = document.createElement("li");
        //creating li elements with text of the hours
        liEl.textContent =
          hours[k] + ": " + this.cookiesSoldByHour[k] + "cookies";
        console.log(liEl);
        fandp.appendChild(liEl);
      }
    }
  };
  firstAndPike.render();
