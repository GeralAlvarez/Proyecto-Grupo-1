
const form = document.getElementById("form");
const btnEnter = document.getElementById("btnEnter");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formButton = document.getElementById("formButton");
const parrafo = document.getElementById("warnings")


form.addEventListener('submit', e=>{
    e.preventDefault();
    let warnings =""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(password.value.length <8){
        warnings += 'La contraseña no es valida <br>'
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'
        entrar = true 
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
        alert("Se ha ingresado correctamente");
      form.reset()
      window.location.reload();
    }
   
    console.log(warnings)
    console.log(entrar)

})