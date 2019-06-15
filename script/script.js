var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//creating a variable which holds the div where my content will be displayed
var loc = document.getElementById("location");
var btn = document.getElementById("sort");
//creating my first class which i will extend later on
var ClassLocation = /** @class */ (function () {
    function ClassLocation(name, city, zipcode, address, img, creation_date, creation_time) {
        this.name = "";
        this.city = "";
        this.zipcode = "";
        this.address = "";
        this.img = "";
        this.creation_date = "";
        this.creation_time = "";
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.img = img;
        this.creation_date = creation_date;
        this.creation_time = creation_time;
    }
    //writing a function to describe how my content should be displayed
    ClassLocation.prototype.display = function () {
        return "<div class = \"col-lg-3 col-md-6 col-12\">\n\t\t<h4>Name: " + this.name + "</h4>\n\t\t<p>Location:" + this.address + ", " + this.zipcode + ", " + this.city + "</p>\n\t\t<p>Created: " + this.creation_date + " " + this.creation_time + "</p>\n\t\t<img class=\"d-sm-none d-xs-none d-lg-block\" src=\"img/" + this.img + "\">\n\t\t<div>";
    };
    return ClassLocation;
}());
// extending my super class Location to the child class Restaurant
var ClassRestaurant = /** @class */ (function (_super) {
    __extends(ClassRestaurant, _super);
    function ClassRestaurant(name, city, zipcode, address, img, homepage, number, creation_date, creation_time) {
        var _this = _super.call(this, name, city, zipcode, address, img, creation_date, creation_time) || this;
        _this.homepage = homepage;
        _this.number = number;
        return _this;
    }
    ClassRestaurant.prototype.display = function () {
        return "<div class = \"col-lg-3 col-md-6\">\n\t\t<h4>Name: " + this.name + "</h4>\n\t\t<p>Location: " + this.address + ", " + this.zipcode + ", " + this.city + ", " + this.number + "</p>\n\t\t<p>Homepage: <a href=\"" + this.homepage + "\">" + this.homepage + "</a></p>\n\t\t<p>Created: " + this.creation_date + " " + this.creation_time + "</p>\n\t\t<p><img class=\"d-sm-none d-xs-none d-lg-block\" src=\"img/" + this.img + "\"></p>\n\t\t</div>";
    };
    return ClassRestaurant;
}(ClassLocation));
// extending my super class Location to the child class Event
var ClassEvent = /** @class */ (function (_super) {
    __extends(ClassEvent, _super);
    function ClassEvent(name, city, zipcode, address, img, date, price, homepage, location, hall, creation_date, creation_time) {
        var _this = _super.call(this, name, city, zipcode, address, img, creation_date, creation_time) || this;
        _this.date = date;
        _this.price = price;
        _this.homepage = homepage;
        _this.location = location;
        _this.hall = hall;
        return _this;
    }
    ClassEvent.prototype.display = function () {
        return "<div class = \"col-lg-3 col-md-6\">\n\t\t<h4>Name: " + this.name + "</h4>\n\t\t<p>Homepage: <a href=" + this.homepage + ">" + this.homepage + "</a></p>\n\t\t<p>Date:" + this.date + "</p>\n\t\t<p>Location:" + this.location + ", " + this.hall + "," + this.address + ", " + this.zipcode + ", " + this.city + "</p>\n\t\t<p>Price: " + this.price + "</p>\n\t\t<p>Created: " + this.creation_date + " " + this.creation_time + "</p>\n\t\t<p><img class=\"d-sm-none d-xs-none d-lg-block\" src=\"img/" + this.img + "\"></p>\n\t\t<div>";
    };
    return ClassEvent;
}(ClassLocation));
//putting all the information from my classes in an array
var arr = new Array();
arr[0] = new ClassLocation("St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "church.jpg", "1.1.2001", "11:00");
arr[1] = new ClassLocation("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b", "zoo.jpg", "2.2.2002", "13:00");
arr[2] = new ClassRestaurant("Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "thai_restaurant.jpg", "http://www.lemonleaf.at/", "+43(1)5912308", "3.3.2003", "15:00");
arr[3] = new ClassRestaurant("SIXTA", "Vienna", "1050", "Schönbrunner Straße 21", "sixta_restaurant.jpg", "http://www.sixta-restaurant.at", "+43 1 58 528 56 | +43 1 58 528 56", "6.6.2006", "09:00");
arr[4] = new ClassEvent("Kris Kristofferson", "Vienna", "1150", "Roland Rainer Platz 1", "kris.jpg", "Fr., 15.11.2019.20:00", "58,50 EUR", "http://kriskristofferson.com/", "Wiener Stadthalle", "Halle F", "5.5.2005", "19:00");
arr[5] = new ClassEvent("Lenny Kravitz", "Vienna", "1150", "Roland Rainer Platz 1", "kravitz.jpg", "Sat., 09.12.2019 - 19:30", "47,80 EUR", "http://www.lennykravitz.com/", "Wiener Stadthalle", "Halle D", "4.4.2004", "20:00");
arr[6] = new ClassEvent("Kris Kristofferson", "Vienna", "1150", "Roland Rainer Platz 1", "kris.jpg", "Fr., 15.11.2019.20:00", "58,50 EUR", "http://kriskristofferson.com/", "Wiener Stadthalle", "Halle F", "5.5.2005", "19:00");
arr[7] = new ClassEvent("Lenny Kravitz", "Vienna", "1150", "Roland Rainer Platz 1", "kravitz.jpg", "Sat., 09.12.2019 - 19:30", "47,80 EUR", "http://www.lennykravitz.com/", "Wiener Stadthalle", "Halle D", "4.4.2004", "20:00");
arr[8] = new ClassLocation("St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "church.jpg", "1.1.2001", "11:00");
arr[9] = new ClassLocation("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b", "zoo.jpg", "2.2.2002", "13:00");
//display the arr in the HTML file
for (var i = 0; i < arr.length; i++) {
    loc.innerHTML += arr[i].display();
}
//creating a new array to sort by the time the pictures where taken
arr.sort(sortbytime);
function sortbytime(a, b) {
    if (a[arr.length] === b[arr.length]) {
        return 0;
    }
    else {
        return (a[arr.length] < b[arr.length]) ? -1 : 1;
    }
}
