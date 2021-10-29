/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

const word = prompt(`dammi una parola`);

const result = palindroma(word);

console.log(result);

function palindroma(word) {
    let counter = 0;
    for(let i = 0; word[i] === word[word.length - 1 - i]; i++) {
        counter++;
    }

    if (counter === word.length - 1) {
        return `è palindroma`;
    }

    return `non palindroma`;

}