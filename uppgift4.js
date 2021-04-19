/*
Använd din kod från uppgift 3.

Låt nu användaren skriva in 3 nummer istället.

Programmet ska
- Räkna från input 1
- Till input 2
- Med input 3 som ökning
*/
let sN = parseInt(prompt("Type a start number"));
let rT = parseInt(prompt("Type repeat times"));
let increase = parseInt(prompt("Type an increase number"));
for (i = sN; i < (sN + rT*increase); i += increase) {
    console.log(i);
}