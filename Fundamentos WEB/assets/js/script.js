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

    nome.style.width = '100%';
    email.style.width = '100%'
