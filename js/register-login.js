let registerCard = document.querySelector(".containerRegister");
let loginCard = document.querySelector(".containerLogin");
const body = document.querySelector("body");

function changeToLogin() {
    const changeLogin = document.querySelector(".redirectionLogin");
    
    changeLogin.addEventListener("click", function(evento) {
        registerCard.style.transform = "translateX(250%)";
        registerCard.classList.remove("active");
        loginCard.style.transform = "translateX(84%)"
        console.log("USTED CLICKEO");
        body.classList.add("login");
        loginCard.classList.add("active");
    });
}

changeToLogin();
