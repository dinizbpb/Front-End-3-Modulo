var nome = window.document.getElementById('nome')
var email = window.document.getElementById('email')
var assunto = window.document.getElementById('assunto')
var txtMode = window.document.getElementById('btn')
var txtok = false;
var cor = false;

function darkMode() {

    if (!cor) {
        window.document.querySelector('body').style.background = 'white';
        txtMode.className = 'black';
        txtMode.innerHTML = 'WhiteMode';
        cor = true;
    } else {
        window.document.querySelector('body').style.background = 'black';
        txtMode.style.className = 'black';
        txtMode.innerHTML = "DarkMode";
        cor = false;
    }
}

function validationText() {
    var txtNome = window.document.getElementById('txtNome')
    var txtEmail = window.document.getElementById('txtEmail')
    var txtAssunto = window.document.getElementById('txtAssunto')

    if (nome.value.length < 3) {
        txtNome.innerHTML = "insira seu nome completo!";
        var txtok = false;

    } else {
        txtNome.innerHTML = "";
        var txtok = true;
    }


    if (email.value.length < 5) {
        txtEmail.innerHTML = "insira seu email corretamente!";
        var txtok = false;
    } else {
        txtEmail.innerHTML = "";
        var txtok = true;
    }


    if (assunto.value.length < 1) {
        txtAssunto.innerHTML = "insira um assunto!";
        var txtok = false;
    } else {
        txtAssunto.innerHTML = "";
        var txtok = true;
    }

}




function enviar() {
    if (txtok) {
        alert("enviado com sucesso!")
    } else {
        alert("insira os dados nos campos corretamente!")
    }
}