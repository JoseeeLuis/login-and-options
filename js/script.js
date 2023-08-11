const admin = {
    email: "admin",
    password: "1234",
};
let products = [];


function verifyUser() {
    const promptUser = prompt("Your user");
    const promptPassword = prompt("Your password");
    return admin.email === promptUser && admin.password === promptPassword;
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
            "3" Delete all items`));

        if (input === 0 || input === 1 || input === 2 || input===3 ) {
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

function deleteAllproducts(){
    allProducts="[]"
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

        default:alert(`option invalid`)
        askToUser();
        chooseOption();
    } 
}

function authentication() {
    let maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    if (verifyUser()) {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
        products = JSON.parse(storedProducts);
        }
        let answer = askToUser();
        chooseOption(answer);
        break;
    }
    else {
    if (attempt < maxAttempts) {
        alert(
            `Authentication failed. You have ${maxAttempts - attempt} attempts`
            );
            } else {
            alert(`Authentication failed. No attempts remaining.`);
            }
        }
    }
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



authentication();
