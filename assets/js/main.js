// Form
const formEins = document.querySelector("#formEins")

// Auswahl der Runden 
const dreiRunden = document.querySelector("#dreiRunden");
const fuenfRunden = document.querySelector("#fuenfRunden");
const zehnRunden = document.querySelector("#zehnRunden");
const zwanzigRunden = document.querySelector("zwanzigRunden");

// Gesamter Article Bereich bzw. Radio Button Auswahl Bereich
let rundenAngabe = document.querySelector("#rundenAngabe");

// Gespielte Runden anzeigen sobald erste Auswahl getroffen
gespielteRunden = document.querySelector("#gespielteRunden")

// Punkteausgabe Benutzer und PC
let benutzerGewinnt = document.querySelector("#benutzerGewinnt");
let pcGewinnt = document.querySelector("#pcGewinnt");

// Erbegnisanzeige 
let ergebnisAusgabe = document.querySelector("#ergebnisAusgabe");

// Spiel neustarten
const neustarten = document.querySelector("#neustarten");

// Benutzer Auswahl
const stein = document.querySelector("#stein");
const papier = document.querySelector("#papier");
const scheere = document.querySelector("#scheere");

// Punkte zählen
let punkteBenutzer = 0
let punktePC = 0
let zaehleRunden = 0


// Funktionen

//Rundden Auswahl festlegen
let rundenAnzahl = () => {
    if(dreiRunden.checked) {
        zaehleRunden = 3
        return
    } else if (fuenfRunden.checked) {
        zaehleRunden = 5
        return
    } else if (zehnRunden.checked) {
        zaehleRunden = 10
        return
    } else if (zwanzigRunden.checked) {
        return
    } else {
        return
    }
}

// PC PunkteZahl festlegen
let pcSpielt = () => {
    let randomWert = Math.floor(Math.random() * 3)
    return randomWert
}


let steinAuswahl = () => {
    let rundenWert = formEins.runden.value

} // Musste die Hälfte vom Code löschen da ich von neu angefangen habe,
  // mache den Rest am Wochenende fertig!