const admin = {
    email: "admin",
    password: "1234",
};
let products = [];
let userattempts = 1;
let maxAttempts = 3;
let usernameEntered;
let passwordEntered;

function initializerForm() {
    let loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        usernameEntered = document.getElementById("username").value;
        passwordEntered = document.getElementById("password").value;
        verifyUser();
        authentication();
    });
}

function verifyUser() {
    // const promptUser = prompt("Your user");
    // const promptPassword = prompt("Your password");
    return admin.email === usernameEntered && admin.password === passwordEntered;
}

function convertToString(object){
    return JSON.stringify(object);
    }

function askToUser() {
        while (true) {
            const input = Number(prompt(`Welcome, what do you do?
            "0" Log out
            "1" Create Item
            "2" Show Products
            "3" Delete all items
            "4" Delete a item`));

        if (input === 0 || input === 1 || input === 2 || input===3 || input===4 ) {
            return input;
                } else {
                alert("Invalid option. Please choose a valid option.");
                }
            }
        }

function showProducts(){
    let productsCrated =localStorage.getItem("products")
    alert(`The products crated are ${productsCrated}`)
}   

function deleteAllproducts() {
    allProducts = "[]";
    localStorage.setItem("products", allProducts);
    products = []; 
    alert("All products deleted successfully!");
}

function chooseOption(option){
    switch (option) {
        case 0: alert("Logged out successfully");
        break;

        case 1:
            saveProduct();;
            alert(`New Item Created`);
            break;

        case 2:showProducts();
            break;
        
        case 3:deleteAllproducts();
            break;
        
        case 4: deleteProducts();
        break;

        default:alert(`option invalid`)
        askToUser();
        chooseOption();
    } 
}

function deleteProducts() {
    const productsCrated = JSON.parse(localStorage.getItem("products"));
    
    productsCrated.forEach((product, index) => {
        alert(`${index} - ${product.itemName}`);
    });

    const indexToDelete = parseInt(prompt("Enter the index of the item to delete:"));
    if (indexToDelete >= 0 && indexToDelete < productsCrated.length) {
        const deletedProductName = productsCrated[indexToDelete].itemName;
        productsCrated.splice(indexToDelete, 1);
        localStorage.setItem("products", JSON.stringify(productsCrated));
        alert(`Item "${deletedProductName}" deleted successfully!`);
        showProducts(); // To display the updated list after deletion
    } else {
        alert("Invalid index. Item deletion canceled.");
    }
}


function authentication() {
    if (verifyUser()) {
        const storedProducts = localStorage.getItem("products");
            if (storedProducts) {
                products = JSON.parse(storedProducts);
                }
                let answer = askToUser();
                chooseOption(answer);
            } else if (userattempts < maxAttempts) {
                alert(`Authentication failed. You have ${maxAttempts - userattempts} attempts.`);
                userattempts++;
            } else {
                alert(`Authentication failed. No attempts remaining.`);
            }
}

function addClickEventToButton() {
    const boton = document.querySelector(".submit");
    boton.addEventListener("click", function(evento) {
        console.log("Button clicked");
        authenticationLogic();
    });
}
function getProductInfo() {
    return {
        itemName: prompt(`insert name of the product`),
        itemDesc: prompt(`insert description`),
        itemCost: prompt(`insert cost`),
    };
}

function saveProduct(){
    let productInfo =getProductInfo();
    pushToProducts(productInfo);
    allProducts= convertToString(products);
    localStorage.setItem("products",allProducts);
}


function pushToProducts(item){
    products.push(item);
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    initializerForm()
    });



