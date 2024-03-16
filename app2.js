//pari e dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//l'utente sceglie un numero pari o dispari
let sceltaUtente = prompt('scegli pari o dispari');

// l'utente inserisce un numero da 1 a 5
let numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'));
let numeroComputer = randomNumber()

// print delle scelte dell'utente e del computer(random)
console.log(numeroUtente + ' è il numero che hai scelto')
console.log(numeroComputer + ' è il numero scelto dal computer')

//somma di numeroUtente e numeroComputer(random)
let somma = numeroUtente + numeroComputer

console.log(somma);
console.log (isEven(somma))


if ( sceltaUtente === 'pari' && isEven(somma)) {

    console.log('hai vinto, il numero è pari')
} else if ( sceltaUtente === 'dispari ' && ! isEven(somma) ){
    console.log('hai vinto, il numero è dispari')
} else {
    console.log('non hai indovinato')
}



// funzione per determinare se il numero è pari
function isEven(numero) {
    if ( numero % 2 === 0 ) {
        return true
    } 
        return false
}

//funzione per generare il numero random
function randomNumber() {
    return Math.floor(Math.random() * 5);
}

