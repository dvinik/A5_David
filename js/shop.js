var name = "David"

var products = [
    "Mocha",
    "Expresso",
    "Cafe Americano",
    "Thai Coffee",
    "Iphone X"
];

var price = [
    5,
    5,
    4,
    3,
    999
];


var prodList = "";
var productsElement = document.getElementById("product-list");

for (var i = 0; i < 5; i++) {
    prodList += "<li class='list-group-item'>" + products[i] + "<span class='badge'>$" + price[i] + "</span></li>";
}

productsElement.innerHTML = prodList;

var total = 0;
var totalPrice = document.getElementById("price");

for (var i = 0; i < 5; i++) {
    total += price[i];
}

var discount = total * 0.75;

totalPrice.innerHTML = "$" + discount;

var day = new Date();
var hr = day.getHours();

if (hr >= 6 && hr < 12) {
    document.getElementById("greet").innerHTML = "Good Morning " + name + "!";
} else if (hr >= 12 && hr < 18) {
    document.getElementById("greet").innerHTML = "Good Afternoon " + name + "!";
} else {
    document.getElementById("greet").innerHTML = "Good Evening " + name + "!";
}