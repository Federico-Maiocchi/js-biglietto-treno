// prova funzionamento js
// console.log('Ciao');

// # Prezzo viaggio utente

// - chiedere all'utente il numero di chilometri che vuole percorrere
let kilometersNumbers = prompt('Ciao utente, quanti chilometri vuoi percorrere?');
kilometersNumbers = parseInt(kilometersNumbers);
console.log('kilometri user', kilometersNumbers);

// - chiedere all'utente l'eta
let userAge = prompt('Quanti anni hai?');
userAge = parseInt(userAge);
console.log('Age user', userAge);
// console.log (typeof kilometersNumbers,typeof userAge);

// - calcolare il prezzo del biglietto in base ai Km
let priceBaseKilometre;
priceBaseKilometre = 0.21;
console.log ('prezzo base kilometro', priceBaseKilometre);
// console.log (typeof priceBaseKilometre);

// - calcolare il prezzo totale senza
let totalPrice = priceBaseKilometre * kilometersNumbers;
console.log('prezzo totale',totalPrice);

// - in base alla fascia d'eta ci sono diversi sconti
// discount 
let discount;
    //     - SE l'utente è < 18 anni
    if (userAge < 18) {
    //         - applicare lo sconto del 20%
    discount = totalPrice * (20 / 100);
    console.log('sconto minori',discount);
    }
    //     - ALTRIMENTI SE è > 65 anni
    else if (userAge > 65) {
    //         - applicare lo sconto del 40% 
    discount = totalPrice * (40 / 100);
    console.log('sconto over 65',discount);
    }
    // - ALTRIMENTI
    else {
        totalPrice;
    //          - non si hanno sconti
        console.log('niente sconto');
    }

let totalPriceDiscount = totalPrice - discount;
console.log ('prezzo totale sconto');
// console.log(totalPriceDiscount)

totalPriceDiscount = totalPriceDiscount.toFixed(2);
console.log(totalPriceDiscount);

// - stampare il prezzo finale
//      - recuperare dal DOM un elemento in base id:
let price = totalPriceDiscount
//         - dichiarare una variabile e tramite getelementbyid assegnarvi un valore
const priceDomElement = document.getElementById('price');
//     - modificare l'inner con il valore di prince
priceDomElement.innerHTML = price;





