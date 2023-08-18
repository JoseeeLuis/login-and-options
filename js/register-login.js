let registerCard = document.querySelector(".containerRegister");
let loginCard = document.querySelector(".containerLogin");
const body = document.querySelector("body");

function changeToLogin() {
    const changeLogin = document.querySelector(".redirectionLogin");
    
    changeLogin.addEventListener("click", function(evento) {
        registerCard.classList.remove("active");
        console.log("USTED CLICKEO");
        body.classList.add("login");
        loginCard.classList.add("active");
    });
}

function changeToRegister(){
    const changeRegister= document.querySelector(".redirectionRegister");

    changeRegister.addEventListener("click", function(event){
        loginCard.classList.remove("active");
        console.log("usted clickeo")
        body.classList.remove("login");
        registerCard.classList.add("active");

    });
}

changeToRegister();
changeToLogin();
