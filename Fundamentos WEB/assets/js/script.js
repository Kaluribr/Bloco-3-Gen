// Criacao de variaveis

//escopo global e pode ser redefinido - nao e mais indicado oficialmente
    /*
    Case Sensitive = reconhece letras maiusculas e minusculas

    por Tag: getElementByTagName()
    por Id: getElementById()
    por Nome: getElementsByName()
    por Classe: getElementsByClassName()
    por Seletor: querySelector()
    */

    let nome = window.document.getElementById('nome');
    let email= document.querySelector('#email')
    let assunto= document.querySelector('#assunto')
    let nomeOk = false
    let emailOk = false
    let assuntoOk = false
    let mapa = document.querySelector('#mapa')

    nome.style.width = '100%';
    email.style.width = '100%';

    function validaNome(){

        let txt = document.querySelector('#txtNome')
        if (nome.value.length < 3){
            txt.innerHTML = 'Nome invalido';
            txt.style.color = 'red'
        }else {
            txt.innerHTML = 'Nome valido';
            txt.style.color = 'green'
            nomeOk = true
        }

    }

    function validaEmail(){

        let txt = document.querySelector('#txtEmail')
        if (email.value.indexOf('@') ==  -1 || email.value.indexOf('.') == -1){
            txtEmail.innerHTML = 'E-mail invalido';
            txtEmail.style.color = 'red'
        }else {
            txt.innerHTML = 'E-mail valido';
            txt.style.color = 'green'
            emailOk = true
        }

    }

    function validaAssunto(){

        let txtAssinto = document.querySelector('#assunto')
        if (assunto.value.length >= 100){
            txtAssunto.innerHTML = 'Texto e muito grande, digite no maximo 100 caracteres';
            txtAssunto.style.color = 'red'
            txtAssunto.style.display = 'block'
        }else {
            txtAssunto.style.display = 'none'
            assuntoOk = true
        }

    }

    function enviar(){
        if(nomeOk == true && emailOk == true && assuntoOk == true){
            alert('Formulario enviado com sucesso!')
        }else{
            alert('Preencha a formulario corretamente antes de enviar...')
        }
    }

    function mapaZoom(){
        mapa.style.width = '600px'
        mapa.style.height = '600px'
    }

    
    function mapaNormal(){
        mapa.style.width = '300px'
        mapa.style.height = '300px'
    }