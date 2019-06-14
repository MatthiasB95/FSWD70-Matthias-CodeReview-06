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
var loc = document.getElementById("location");
var ClassLocation = /** @class */ (function () {
    function ClassLocation(name, city, zipcode, address, img) {
        this.name = "";
        this.city = "";
        this.zipcode = "";
        this.address = "";
        this.img = "";
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.img = img;
    }
    ClassLocation.prototype.render = function () {
        return "<h4>Name: " + this.name + "</h4>\n\t\t<p>" + this.address + ", " + this.zipcode + ", " + this.city + "</p>\n\t\t\n\t\t<img src=\"img/" + this.img + "\">";
    };
    return ClassLocation;
}());
var ClassRestaurant = /** @class */ (function (_super) {
    __extends(ClassRestaurant, _super);
    function ClassRestaurant(name, city, zipcode, address, img, homepage, number) {
        var _this = _super.call(this, name, city, zipcode, address, img) || this;
        _this.homepage = homepage;
        _this.number = number;
        return _this;
    }
    ClassRestaurant.prototype.render = function () {
        return "<h4>Name: " + this.name + "</h4>\n\t\t<p>" + this.address + ", " + this.zipcode + ", " + this.city + ", " + this.number + "</p>\n\t\t<p><a href=\"" + this.homepage + "\"></a></p>\n\t\t<p><img src=\"img/" + this.img + "\"></p>";
    };
    return ClassRestaurant;
}(ClassLocation));
var ClassEvent = /** @class */ (function (_super) {
    __extends(ClassEvent, _super);
    function ClassEvent(name, city, zipcode, address, img, date, price, homepage, location, hall) {
        var _this = _super.call(this, name, city, zipcode, address, img) || this;
        _this.date = date;
        _this.price = price;
        _this.homepage = homepage;
        _this.location = location;
        _this.hall = hall;
        return _this;
    }
    ClassEvent.prototype.render = function () {
        return "<h4>Name: " + this.name + "</h4>\n\t\t\u00B4<a href=" + this.homepage + "\u00B4></a>\n\t\t<p>" + this.date + "</p>\n\t\t<p>" + this.location + ", " + this.hall + "," + this.address + ", " + this.zipcode + ", " + this.city + "</p>\n\t\t<p>" + this.price + "</p>\n\t\t<p><img src=\"img/" + this.img + "\"></p>";
    };
    return ClassEvent;
}(ClassLocation));
var arr = new Array();
arr[0] = new ClassLocation("St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "church.jpg");
arr[1] = new ClassLocation("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b", "zoo.jpg");
arr[2] = new ClassRestaurant("Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "thai_restaurant.jpg", "http://www.lemonleaf.at/", "+43(1)5912308");
arr[3] = new ClassRestaurant("SIXTA", "Vienna", "1050", "Schönbrunner Straße 21", "sixta_restaurant.jpg", "http://www.sixta-restaurant.at", "+43 1 58 528 56 | +43 1 58 528 56");
arr[4] = new ClassEvent("Kris Kristofferson", "Vienna", "1150", "Roland Rainer Platz 1", "kris.jpg", "Fr., 15.11.2019.20:00", "58,50 EUR", "http://kriskristofferson.com/", "Wiener Stadthalle", "Halle F");
arr[5] = new ClassEvent("Lenny Kravitz", "Vienna", "1150", "Roland Rainer Platz 1", "kravitz.jpg", "Sat., 09.12.2019 - 19:30", "47,80 EUR", "www.lennykravitz.com/", "Wiener Stadthalle", "Halle D");
for (var i = 0; i < arr.length; i++) {
    loc.innerHTML += arr[i].render();
}
