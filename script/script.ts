let loc = document.getElementById("location")


class ClassLocation {
	name = "";
	city = "";
	zipcode = "";
	address = "";
	img = "";

	constructor(name, city, zipcode, address, img){
		this.name = name;
		this.city = city;
		this.zipcode = zipcode;
		this.address = address;
		this.img = img;
	}
	render (){
		return `<h4>Name: ${this.name}</h4>
		<p>${this.address}, ${this.zipcode}, ${this.city}</p>
		
		<img src="img/${this.img}">`
	}
}

class ClassRestaurant extends ClassLocation {
	homepage;
	number;

	constructor(name, city, zipcode, address, img, homepage, number){
		super(name, city, zipcode, address, img);
		this.homepage = homepage;
		this.number = number;
	}
	render (){
		return `<h4>Name: ${this.name}</h4>
		<p>${this.address}, ${this.zipcode}, ${this.city}, ${this.number}</p>
		<p><a href="${this.homepage}"></a></p>
		<p><img src="img/${this.img}"></p>`
	}
}


class ClassEvent extends ClassLocation {
	date;
	price;
	homepage;
	location;
	hall;

	constructor(name, city, zipcode, address, img, date, price, homepage, location, hall){
		super(name, city, zipcode, address, img);
		this.date = date;
		this.price = price;
		this.homepage = homepage;
		this.location = location;
		this.hall = hall;
	}
	render (){
		return `<h4>Name: ${this.name}</h4>
		´<a href=${this.homepage}´></a>
		<p>${this.date}</p>
		<p>${this.location}, ${this.hall},${this.address}, ${this.zipcode}, ${this.city}</p>
		<p>${this.price}</p>
		<p><img src="img/${this.img}"></p>`
	}

}


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