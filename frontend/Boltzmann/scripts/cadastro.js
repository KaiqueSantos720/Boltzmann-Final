const form = document.getElementById("form")
const inputName = document.getElementById("username")
const inputEmail = document.getElementById("email")
const inputPassword = document.getElementById("password")
const inputPasswordCon = document.getElementById("password-con")

console.log(inputName)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue = inputName.value
    const emailValue = inputEmail.value
    const passwordValue = inputPassword.value
    const passwordConValue = inputPasswordCon.value

    //verifica o nome
    if(usernameValue === ''){    
        erro(inputName, "O Nome de Usuário é Obrigatório")
    } 
    else{
        sucesso(inputName)
    }

    //verifica o email
    if(emailValue === ""){
        erro(inputEmail, "O Email é Obrigatório")
    }
    else if(!checkEmail(emailValue)){
        erro(inputEmail, "Insira um email válido")
    }
    else{
        sucesso(inputEmail)
    }

    //verifica a senha
    if(passwordValue === ""){
        erro(inputPassword, "Insira uma senha")
    }
    else if(passwordValue.length < 7){
        erro(inputPassword, "A senha precisa ter no mínimo 7 caracteres")
    }
    else{
        sucesso(inputPassword)
    }

    //verifica a igualdade das senhas
    if(passwordConValue === ""){
        erro(inputPasswordCon, "Confirme a senha")
    }
    else if(passwordConValue != passwordValue){
        erro(inputPasswordCon, "As senhas não conferem")
    }
    else{
        sucesso(inputPasswordCon)
    }

    const formControls = form.querySelectorAll(".controle-form")
    const formConfirmado = [...formControls].every(formControl => {
        return formControl.className === 'controle-form sucesso'
    });

    if(formConfirmado){
        console.log("Formulário Válido")
    }
}

function erro(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")
    console.log(34334)

    small.innerText = message
    formControl.className = "controle-form erro"

}

function sucesso(input){
    const formControl = input.parentElement;
    formControl.className = "controle-form sucesso"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}