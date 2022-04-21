/*
Creare in JavaScript una griglia 8x8. Ogni cella della griglia contiene un numero casuale da 1 a 64. I numeri presenti nelle celle non devono essere ripetuti (ovvero la griglia contiene **tutti** i numeri da 1 a 64). 

Ogni volta che clicco su un quadrato questo si colora di verde se il numero contenuto e pari e in rosso se dispari..

*/

const container = document.querySelector('.container');
const listNumbers = [];

init();

function init(){
    
    // genero tutti i quadratini
    for(let i = 0; i < 64; i++){
        // la funzione createSquare genra il quadratino e me lo restituisce
        const sq = createSquare(container)
        // ascolto l'evento click al quadratino generato
        sq.addEventListener('click', function(){
            // this è una parola chiave che mi "dice" quale è l'elemento cickato
            this.classList.add('clicked');
        })
    }

}
let 
/**
 * Genera l'elemento html e lo restituisce
 * @param {HTMLDivElement} target 
 * @returns 
 */
function createSquare(target){
    const sq = document.createElement('div');
    sq.className = 'square';
    // ottengo un numero univoco
    const number = getUniqueRandomNumber(1, 64);
    sq.innerHTML = `<span>${number}</span>`;
    // aggiungo la classe even o odd in base al calcolo della funzione  dedicata
    sq.classList.add(getOddEven(number));
    // appendo l'elemento al container
    target.append(sq);
    // restituisco l'elemento creato
    return sq;
}

function getUniqueRandomNumber(min, max){
    let number = null;
    let valid = false;

    // se il numero è presente nell'array globale listNumbers valid è false quindi ne estraggo un'altro e così via
    while(!valid){
        number = getRandomNumber(min, max);
        // se listNumbers non contiene number allora il numero è valido
        if(!listNumbers.includes(number)){
            // valid diventa true e blocca il ciclo
            valid = true;
            // aggiungo il numero alla lista
            listNumbers.push(number)
        }
    }

    return number;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getOddEven(n){
    if(n % 2) return 'odd';
    return 'even';
}
