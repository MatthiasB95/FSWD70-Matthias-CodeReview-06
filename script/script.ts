//creating a variable which holds the div where my content will be displayed
let loc = document.getElementById("location");
let btn = document.getElementById("sort");

//creating my first class which i will extend later on
class ClassLocation {
	name = "";
	city = "";
	zipcode = "";
	address = "";
	img = "";
	creation_date = "";
	creation_time = "";
	constructor(name, city, zipcode, address, img, creation_date, creation_time){
		this.name = name;
		this.city = city;
		this.zipcode = zipcode;
		this.address = address;
		this.img = img;
		this.creation_date = creation_date;
		this.creation_time = creation_time;
		
	}
	//writing a function to describe how my content should be displayed
	display (){
		return `<div class = "col-lg-3 col-md-6 col-12">
		<h4>Name: ${this.name}</h4>
		<p>Location:${this.address}, ${this.zipcode}, ${this.city}</p>
		<p>Created: ${this.creation_date} ${this.creation_time}</p>
		<img class="d-sm-none d-xs-none d-lg-block" src="img/${this.img}">
		<div>`
	}
}
// extending my super class Location to the child class Restaurant
class ClassRestaurant extends ClassLocation {
	homepage;
	number;

	constructor(name, city, zipcode, address, img, homepage, number, creation_date, creation_time){
		super(name, city, zipcode, address, img, creation_date, creation_time);
		this.homepage = homepage;
		this.number = number;
	}
	display (){
		return `<div class = "col-lg-3 col-md-6">
		<h4>Name: ${this.name}</h4>
		<p>Location: ${this.address}, ${this.zipcode}, ${this.city}, ${this.number}</p>
		<p>Homepage: <a href="${this.homepage}">${this.homepage}</a></p>
		<p>Created: ${this.creation_date} ${this.creation_time}</p>
		<p><img class="d-sm-none d-xs-none d-lg-block" src="img/${this.img}"></p>
		</div>`
	}
}

// extending my super class Location to the child class Event
class ClassEvent extends ClassLocation {
	date;
	price;
	homepage;
	location;
	hall;


	constructor(name, city, zipcode, address, img, date, price, homepage, location, hall, creation_date, creation_time){
		super(name, city, zipcode, address, img, creation_date, creation_time);
		this.date = date;
		this.price = price;
		this.homepage = homepage;
		this.location = location;
		this.hall = hall;
	}
	display (){
		return `<div class = "col-lg-3 col-md-6">
		<h4>Name: ${this.name}</h4>
		<p>Homepage: <a href=${this.homepage}>${this.homepage}</a></p>
		<p>Date:${this.date}</p>
		<p>Location:${this.location}, ${this.hall},${this.address}, ${this.zipcode}, ${this.city}</p>
		<p>Price: ${this.price}</p>
		<p>Created: ${this.creation_date} ${this.creation_time}</p>
		<p><img class="d-sm-none d-xs-none d-lg-block" src="img/${this.img}"></p>
		<div>`
	}

}

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

arr.sort(sortbytime);

function 
sortbytime(a, b) {
    if (a[arr.length] === b[arr.length]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

btn.addEventListener("click", function(){sortbytime(arr.length, arr.length);},false);