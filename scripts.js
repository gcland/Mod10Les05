// Mod10Les05

// 1. Document Manipulation with JavaScript

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];


products.forEach(product => { 
    console.log(`Product name: ${product.name}\nProduct Price: $${product.price}\nProduct Description: ${product.description}`);
    });

document.getElementById("productList").addEventListener("onload", displayProductInfo()) 
function displayProductInfo() {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach(product => { 
        let productItem = document.createElement("li");
        productItem.textContent = `Product name: ${product.name} - $${product.price} - ${product.description}`;
        productList.appendChild(productItem); 
})};

// 2. Form Manipulation with JavaScript

function UserInfo(username, email) {
    this.username = username;
    this.email = email;
}

UserInfo.prototype.displayInfo = function() {
    console.log(`Name: ${this.username}\nEmail: ${this.email}`);
    return `<br>Form submitted successfully.<br><b>Name: </b> ${this.username}<br><b>Email: </b> ${this.email}`;
    
}

document.getElementById("userInfo").addEventListener("submit", function(event) {
    event.preventDefault();
    let username  = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    let newUserInfo = new UserInfo(username, email);

    let userInfoElement = document.createElement("div");
    userInfoElement.innerHTML = newUserInfo.displayInfo();
    document.getElementById("userInfoList").appendChild(userInfoElement);
    document.getElementById("userInfo").reset();
});

// 3. Styling with JavaScript

function changeColor() {
    document.getElementById("box1").classList.add("background-change")
}

function changeColor2() {
    document.getElementById("box2").style.backgroundColor = "yellow"
}

function changeColor3() {
    document.getElementById("box3").classList.add("background-change3")
}

function changeColor4() {
    document.getElementById("box4").classList.add("background-change4")
}

function changeColor5() {
    document.getElementById("box5").classList.add("background-change5")
}
