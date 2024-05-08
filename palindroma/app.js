// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// - prompt per cheidere all'utente di inserire la parola/frase palindroma 
let wordInput = prompt('Inserisci una parola');
// - creare la funzione

function palindromeCheck(wordInput) {
    
    // -creo un array vuoto dove pushare la parola e splittare lettera per lettera
    let reverse = '';
    // - farla rileggere al contrario
    reverse = wordInput.split('').reverse().join('');
    
    console.log(wordInput);
    console.log(reverse);
      
    if(wordInput === reverse) {
        
        return true
    } 
    
        return false
}


//     - se la parola è palindroma stampare "è palindroma" 
//     - se non è palindroma stampare "non è palindroma"
if (palindromeCheck(wordInput) === true) {
    
    console.log('la parola che hai inserito è palindroma');

} else {
    
    console.log('la parola che hai inserito NON è palindroma');
}




