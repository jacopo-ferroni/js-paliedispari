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

document.querySelector(`.word`).innerHTML = (`La parola scelta è: ${word}`);

const result = palindroma(word);

console.log(result);

const btnP = document.querySelector(`.pari`);
const btnD = document.querySelector(`.dispari`);

btnP.addEventListener(`click`, function() {
    let valore = parseInt(prompt(`dammi un numero da 1 a 5`));
    let valore2 = Math.floor(Math.random() * 5) + 1;
    if (valore > 5 || valore < 1) {
        alert(`Il valore da te inderito non è valido, deciderò io per te il numero.`);
        valore = Math.floor(Math.random() * 5) + 1;
        document.querySelector(`.valore`).innerHTML = `Il valore scelto da noi per te è: ${valore}`;
        document.querySelector(`.valore2`).innerHTML = `Il nostro valore è: ${valore2}`;
        console.log(valore);
        console.log(valore2);
    }
    else {
        document.querySelector(`.valore`).innerHTML = `Il valore da te scelto è: ${valore}`;
        document.querySelector(`.valore2`).innerHTML = `Il nostro valore è: ${valore2}`;
    }

    const risultato1 = parOdisp(valore, valore2);
    
    if (risultato1 === `pari`) {
        document.querySelector(`.wl`).innerHTML = `Hai vinto, complimenti!`;
    }
    else {
        document.querySelector(`.wl`).innerHTML = `Hai perso, mi dispiace!`;
    }
});

btnD.addEventListener(`click`, function() {
    let valore = parseInt(prompt(`dammi un numero da 1 a 5`));
    let valore2 = Math.floor(Math.random() * 5) + 1;
    if (valore > 5 || valore < 1) {
        alert(`Il valore da te inderito non è valido, deciderò io per te il numero.`);
        valore = Math.floor(Math.random() * 5) + 1;
        document.querySelector(`.valore`).innerHTML = `Il valore scelto da noi per te è: ${valore}`;
        document.querySelector(`.valore2`).innerHTML = `Il nostro valore è: ${valore2}`;
        console.log(valore);
        console.log(valore2);
    }
    else {
        document.querySelector(`.valore`).innerHTML = `Il valore da te scelto è: ${valore}`;
        document.querySelector(`.valore2`).innerHTML = `Il nostro valore è: ${valore2}`;
    }

    const risultato1 = parOdisp(valore, valore2);
    
    if (risultato1 === `dispari`) {
        document.querySelector(`.wl`).innerHTML = `Hai vinto, complimenti!`;
    }
    else {
        document.querySelector(`.wl`).innerHTML = `Hai perso, mi dispiace!`;
    }
});








function palindroma(word) {
    let counter = 0;
    for(let i = 0; i < word.length; i++) {
        if (word[i] === word[word.length - 1 - i])
        counter++;
    }

    if (counter === word.length) {
        return `è palindroma`;
    }

    return `non palindroma`;

}

function parOdisp(numb, numb2) {
    const risultato = numb + numb2;
    
    if(risultato % 2 === 0) {
        return `pari`;
    }
    return `dispari`;
}
