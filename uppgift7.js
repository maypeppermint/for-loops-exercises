/*
Skriv ett program som läser in ett nummer från användaren. 
Addera sedan alla nummer från 1 till och med det nummer som användaren skriver in och skriv ut den totala summan i konsollen.

Tänk på att det är ett nummer vi vill skicka in.
*/

let number = parseInt(prompt("Write a number here"));
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log("The number you wrote is " + number + ". And the sum from 1 to "  + number + " is " + sum + ".");