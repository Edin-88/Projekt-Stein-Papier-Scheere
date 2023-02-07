const benutzerAuswahlMonitor = document.querySelector("#benutzerAuswahl")
const pcAuswahlMonitor = document.querySelector("#pcAuswahl")
const ergebnisAusgabe = document.querySelector("#ergebnisAusgabe")
const auswahlOptionen = document.querySelectorAll("button")
const benutzerGewinnt = document.querySelector("#benutzerGewinnt")
const pcGewinnt = document.querySelector("#pcGewinnt")
const formular = document.querySelector("#formular")
const rundenAngabe = document.querySelector("#rundenAngabe")
const gespielteRunden = document.querySelector("#gespielteRunden")
const endErgebnis = document.querySelector("#endErgebnis")
const stein = document.querySelector("#stein")
const papier = document.querySelector("#papier")
const scheere = document.querySelector("#scheere")
let benutzerAuswahl
let pcAuswahl
let ergebnis
let benutzerPunkte = 0
let pcPunkte = 0
let zaehleRunden = 0

auswahlOptionen.forEach(auswahlOptionen => auswahlOptionen.addEventListener("click", (e) => {
    benutzerAuswahl = e.target.id
    benutzerAuswahlMonitor.innerHTML = benutzerAuswahl
    pcAuswahlGenerieren()
    ergebnisHolen()
    PunkteZaehlen()
    berechneRunden() 
    spielBeenden() 
}))

function pcAuswahlGenerieren() {
    const randomNummer = Math.floor(Math.random() * 3 ) + 1  // oder mal auswahlOptionen.length
    console.log(randomNummer);

    if (randomNummer === 1) {
        pcAuswahl = "stein"
    }
    if (randomNummer === 1) {
        pcAuswahl = "papier"
    }

    if (randomNummer === 3) {
        pcAuswahl = "scheere"
    }
    pcAuswahlMonitor.innerHTML = pcAuswahl
}

function ergebnisHolen() {
    if (pcAuswahl ===  benutzerAuswahl) {
        ergebnis = "Unentschieden"
    }
    if (pcAuswahl === "stein" && benutzerAuswahl === "papier") {
        ergebnis = "Du gewinnst"
    }
    if (pcAuswahl === "stein" && benutzerAuswahl === "scheere") {
        ergebnis = "Du verlierst"
    }
    if (pcAuswahl === "papier" && benutzerAuswahl === "scheere") {
        ergebnis = "Du gewinnst"
    }
    if (pcAuswahl === "papier" && benutzerAuswahl === "stein") {
        ergebnis = "Du verlierst"
    }
    if (pcAuswahl === "scheere" && benutzerAuswahl === "stein") {
        ergebnis = "Du gewinnst"
    } 
    if (pcAuswahl === "scheere" && benutzerAuswahl === "papier") {
        ergebnis = "Du verlierst"
    } 
    ergebnisAusgabe.innerHTML = ergebnis
}


function PunkteZaehlen () {
    if (ergebnis === "Du gewinnst") {
        benutzerPunkte += 1
        benutzerGewinnt.innerHTML = benutzerPunkte
    } else if (ergebnis === "Du verlierst") {
        pcPunkte += 1
        pcGewinnt.innerHTML = pcPunkte
    } else {
        benutzerPunkte += 0 
        pcPunkte += 0 
    }
}

function berechneRunden() {
    let rundenAuswahl = formular.runden.value
    rundenAngabe.style.display = "none"
    zaehleRunden += 1
    gespielteRunden.innerHTML = `${zaehleRunden} / ${rundenAuswahl}`
}


// Funktioniert noch nicht?
function spielBeenden() {
    let rundenAuswahl = formular.runden.value
    
    if(zaehleRunden === rundenAuswahl) {
        auswahlOptionen.disabled = true
    if (benutzerPunkte > pcPunkte) {
        endErgebnis.innerHTML = "Benutzer hat gewonnen"
    } else if(benutzerPunkte < pcPunkte) {
        endErgebnis.innerHTML = "PC hat gewonnen"
    } else {
        endErgebnis.innerHTML = "Unentschieden"
    }
   }   
}




