document.addEventListener("DOMContentLoaded", function () {
const form = document.querySelector("form");
const btnEnter = document.querySelector("btnEnter");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formButton = document.querySelector("#formButton");
const exampleModal = document.querySelector('#exampleModal')
console.log(email)
console.log(password)


form.addEventListener('submit', e=>{
    e.preventDefault();
    let warnings =""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regexEmail.test(email.value)){
        warnings += 'El email no es valido br'
        entrar = true 
    }

    if(password.value.lenght < 8)){
        warnings += 'La contraseña no es valida br'
        entrar = true 
    }
    

//      emailValue = email.ariaValueMax.trim();
// const passwordValue = password.value;

// if (emailValue == ''){
//     alert("Por favor ingresa un correo")
//     return;
// }

// if (passwordValue == ''){
//     alert("Por favor ingresa un contraseña")
//     return;
}
})

confirmBtn.addEventListener("click", (event) => {
let emailValido = false
let passwordValido = false;



})

 })

