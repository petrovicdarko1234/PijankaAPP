
let pesme = ["Makedonsko devojce", "Kad sam decak bio", "Ko se s nama druzi", "Ej Branka,Branka", "Vidovdan", "Janjicar", "Kaludjeru moj", "Fijakeri", "Kafanac", "Mile Kitic-Vuk samotnjak", "Sve cu dati kucu konje", "Saban-To je zena koju volim", "Cveta", "Zena u crnom sede kraj mene", "Moj dilbere", "Boban Zdravkovic-Ne dolazi", "Merak mi je", "Sinoc sam pola kafane popio"]

let slusaneP = []

let ide = -1

let listaPesama = document.getElementById("lista2");

let slusanepesme = document.getElementById("lista1");


window.onload = polazne

function nesto() {


    let listaPesama = document.getElementById("lista");

    listaPesama.innerHTML = ""
    for (let i = 0; i < pesme.length; i++) {
        listaPesama.innerHTML += "<li>" + pesme[i] + "</li>";

    }


}
// poziva nesto kad se stranica upali
//window.onload = funkcija

function polazne() {
    podesi()
    slusane()
}

function trenutna() {


    slusaneP.push(pesme.splice(ide, 1))
    console.log(slusaneP)
    podesi()

}



function slusane() {



    slusanepesme.innerHTML = ""


    for (let i = 0; i < slusaneP.length; i++) {
        slusanepesme.innerHTML += "<li>" + slusaneP[i] + "</li>";

    }
}


function preostale() {



    listaPesama.innerHTML = ""
    for (let i = 0; i < pesme.length; i++) {
        listaPesama.innerHTML += "<li>" + pesme[i] + "</li>";

    }
}

function podesi() {
    let x = Math.random() * (pesme.length - 1)
    let y = (Math.round(x))
    document.getElementById("ideovaj").innerHTML = pesme[y]
    ide = y
}
console.log(pesme)

function proba() {

    preostale()
    setInterval(brisanje, 10000)

}
function brisanje() {
    listaPesama.innerHTML = ""
    slusanepesme.innerHTML = ""

}