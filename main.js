
let pesme = ["Makedonsko devojce", "Kad sam decak bio", "Ko se s nama druzi", "Ej Branka,Branka", "Vidovdan", "Janjicar", "Kaludjeru moj", "Fijakeri", "Kafanac", "Mile Kitic-Vuk samotnjak", "Sve cu dati kucu konje", "Saban-To je zena koju volim", "Cveta", "Zena u crnom sede kraj mene", "Moj dilbere", "Boban Zdravkovic-Ne dolazi", "Merak mi je", "Sinoc sam pola kafane popio"]

let slusaneP = []

function nesto() {


    let listaPesama = document.getElementById("lista");


    for (let i = 0; i < pesme.length; i++) {
        listaPesama.innerHTML += "<li>" + pesme[i] + "</li>";

    }


}
// poziva nesto kad se stranica
//window.onload = nesto

function trenutna() {
    let x = Math.random() * (pesme.length - 0) + 0
    let y = (Math.floor(x))
    document.getElementById("ideovaj").innerHTML = pesme[y]


    slusaneP.push(pesme.splice(y, 1))
    console.log(slusaneP)

}

function preskoci() {
    let x = Math.random() * (pesme.length - 0) + 0
    let y = (Math.floor(x))
    document.getElementById("ideovaj").innerHTML = pesme[y]


}

function slusane() {
    document.getElementById("slusanepesme").innerHTML = slusaneP
}

function preostale() {
    document.getElementById("pp").innerHTML = pesme
}

console.log(pesme)