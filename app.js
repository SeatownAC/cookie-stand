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
      var pike = document.getElementById("fnp");
      var fandp = document.getElementById("fnp-list");
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

  var seaTac = {
    name: "Seatac",
    //creating key value pairs inside of my object they are called properties
    minCustHour: 3,
    maxCustHour: 24,
    avgCookiesPerHour: 1.2,
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
      var seaTacHead = document.getElementById("seatac head");
      var seaTacList = document.getElementById("seatac list");
      //calling the methods in the object literal
      this.calcRandCustHour();
      this.calcCookiesSoldByHour();
      var h3El = document.createElement("h3");
      //give text to the new h3 element
      h3El.textContent = this.name;
      seaTacHead.appendChild(h3El);
      for (var k = 0; k < hours.length; k++) {
        //stepping through the hours array
        var liEl = document.createElement("li");
        //creating li elements with text of the hours
        liEl.textContent =
          hours[k] + ": " + this.cookiesSoldByHour[k] + "cookies";
        console.log(liEl);
        seaTacList.appendChild(liEl);
      }
    }
  };
  seaTac.render();

  var seaCenter = {
    name: "Seacenter",
    //creating key value pairs inside of my object they are called properties
    minCustHour: 11,
    maxCustHour: 38,
    avgCookiesPerHour: 3.7,
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
      var seaCenterHead = document.getElementById("seacenter head");
      var seaCenterList = document.getElementById("seacenter list");
      //calling the methods in the object literal
      this.calcRandCustHour();
      this.calcCookiesSoldByHour();
      var h3El = document.createElement("h3");
      //give text to the new h3 element
      h3El.textContent = this.name;
      seaCenterHead.appendChild(h3El);
      for (var k = 0; k < hours.length; k++) {
        //stepping through the hours array
        var liEl = document.createElement("li");
        //creating li elements with text of the hours
        liEl.textContent =
          hours[k] + ": " + this.cookiesSoldByHour[k] + "cookies";
        console.log(liEl);
        seaCenterList.appendChild(liEl);
      }
    }
  };
  seaCenter.render();

  var capHill = {
    name: "Cap Hill",
    //creating key value pairs inside of my object they are called properties
    minCustHour: 20,
    maxCustHour: 38,
    avgCookiesPerHour: 2.3,
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
      var capHillHead = document.getElementById("caphill head");
      var capHillList = document.getElementById("caphill list");
      //calling the methods in the object literal
      this.calcRandCustHour();
      this.calcCookiesSoldByHour();
      var h3El = document.createElement("h3");
      //give text to the new h3 element
      h3El.textContent = this.name;
      capHillHead.appendChild(h3El);
      for (var k = 0; k < hours.length; k++) {
        //stepping through the hours array
        var liEl = document.createElement("li");
        //creating li elements with text of the hours
        liEl.textContent =
          hours[k] + ": " + this.cookiesSoldByHour[k] + "cookies";
        console.log(liEl);
        capHillList.appendChild(liEl);
      }
    }
  };
  capHill.render();

  var alki = {
    name: "Alki",
    //creating key value pairs inside of my object they are called properties
    minCustHour: 2,
    maxCustHour: 16,
    avgCookiesPerHour: 4.6,
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
      var alkiHead = document.getElementById("alki head");
      var alkiList = document.getElementById("alki list");
      //calling the methods in the object literal
      this.calcRandCustHour();
      this.calcCookiesSoldByHour();
      var h3El = document.createElement("h3");
      //give text to the new h3 element
      h3El.textContent = this.name;
      alkiHead.appendChild(h3El);
      for (var k = 0; k < hours.length; k++) {
        //stepping through the hours array
        var liEl = document.createElement("li");
        //creating li elements with text of the hours
        liEl.textContent =
          hours[k] + ": " + this.cookiesSoldByHour[k] + "cookies";
        console.log(liEl);
        alkiList.appendChild(liEl);
      }
    }
  };
  alki.render();


  

  
  


  

  
  


  

  
  


  

  
  