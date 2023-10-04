// prova funzionamento js
// console.log('Ciao');

// # Prezzo viaggio utente

// - chiedere all'utente il numero di chilometri che vuole percorrere
let kilometersNumbers = prompt('Ciao utente, quanti chilometri vuoi percorrere?');
kilometersNumbers = parseInt(kilometersNumbers);
console.log (kilometersNumbers);
// - chiedere all'utente l'eta
let userAge = prompt ('Quanti anni hai?');
userAge = parseInt(userAge);
console.log (typeof kilometersNumbers,typeof userAge);
// - calcolare il prezzo del biglietto in base ai Km
let priceKilometre;
priceKilometre = 0,21;
console.log (priceKilometre); 
//     - SE l'utente è < 18 anni 
//         - applicare lo sconto del 20%
//     - ALTRIMENTI SE è > 65 anni 
//         - applicare lo sconto del 40%