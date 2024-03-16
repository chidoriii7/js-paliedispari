//palindroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
// la funzione deve ritornare true se la parola è palindroma
// deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo


let word = prompt('inserisci una parola');

if (isPalindrome(word)) {

    console.log(word + ' è palindroma') 

} else {
    console.log(word + ' non è palindroma')
}

function isPalindrome(input) {
    //controllo se la parola è palindroma
    //printo tutte le lettere della parola per mezzo di un ciclo for

    let reverse = '';

   for (let i = input.length - 1; i >= 0; i--) {
    
    reverse = reverse + input[i]
    

     console.log(input[i]);
   
   }
   
   if(reverse === input ) {
    return true;
    
   } 

   return false;
}