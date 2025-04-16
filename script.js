let lista1 = document.querySelector(".lista-1")
let lista2 = document.querySelector(".lista-2")
let lista3 = document.querySelector(".lista-3")
let lista4 = document.querySelector(".lista-4")


// abrir lista
function cliqueiLabios() {

    lista1.style.opacity = "1"
    lista1.style.visibility = "visible"
}

function cliqueiPele() {

    lista2.style.opacity = "1"
    lista2.style.visibility = "visible"
}

function cliqueiOlhos() {

    lista3.style.opacity = "1"
    lista3.style.visibility = "visible"
}

function cliqueiBotox() {

    lista4.style.opacity = "1"
    lista4.style.visibility = "visible"
}

// fechar lista
function cliqueifechar() {

    lista1.style.visibility = "hidden"
    lista1.style.opacity = "0"
    lista2.style.visibility = "hidden"
    lista2.style.opacity = "0"
    lista3.style.visibility = "hidden"
    lista3.style.opacity = "0"
    lista4.style.visibility = "hidden"
    lista4.style.opacity = "0"
}
// abrir whatsapp
function agendar() {
    const url = `https://api.whatsapp.com/send/?phone=%2B5521920072038&text=Ol%C3%A1`;

    // Redireciona para outra pagina sem fechar o site
    window.open(url, '_blank');
}

