// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



let sceltaUtente = prompt('pari o dispari?');

let numeroUtente = Number(prompt('scegli un numero da uno a 1 a 5'))
let numeroComputer = generazioneNumero()
let numCheck = isEven(numeroUtente, numeroComputer)


while (numeroUtente > 5 || numeroUtente < 1 ) {
    alert('numero inserito non valido')
    numeroUtente = Number(prompt('scegli un numero da uno a 1 a 5'))
}

function generazioneNumero() {

    let numRandom = Math.floor((Math.random() * 5) + 1);
    return numRandom

}

function isEven(numeroUtente, numeroComputer){

    let sum = numeroUtente + numeroComputer

    if (sum % 2 === 0) {

        return true

    }

    return false
    

}

if (sceltaUtente === 'pari' && numCheck) {
    console.log('l utente ha vinto')
} else if (sceltaUtente === 'dispari' && numCheck) {
    console.log('l utente ha vinto')
} else {
    console.log('l utente ha perso')
}



console.log('sU', sceltaUtente)
console.log('nU', numeroUtente)
console.log('nC', numeroComputer)
console.log('ncheck', numCheck)