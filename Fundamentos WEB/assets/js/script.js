// Criacao de variaveis

//escopo global e pode ser redefinido - nao e mais indicado oficialmente
var nome45 = 'Thiago'

//padroes atuais de criar variaveis

//escopo local e pode ser redefinido
let nome2 = 'Thiago'

// escopo local e nao pode ser redefinido
const nome3 = 'Thiago'

//Capturando elementos da DOM
const nome = window.document.getElementById('nome')
//const imput = window.document.getElementByTagname('imput')

// Criando funcoes com o JS
function lerNome(){
    console.log(nome.value)
    //if(nome.valueOf.length<3)
}
