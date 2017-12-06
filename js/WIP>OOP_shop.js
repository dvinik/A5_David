
var shop = {
customerName: "David",
totalPrice 0;
products: [
    "Mocha",
    "Expresso",
    "Cafe Americano",
    "Thai Coffe",
    "Iphone X"
],
 
 price: [5, 5, 4, 3, 999];

}

displayCustermerName: function(){
    var customerElement = document.getElementById("customer-name");
    customerElement.innerHTML = this.customerName;
}


function Shop(customerName,totalPrice,products) {
this.customerName = customerName;
this.totalPrice = totalPrice;
this.products = products;
}

