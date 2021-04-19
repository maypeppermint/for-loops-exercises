/*
Skriv ett program som skriver ut alla nummer från 1 till och med 20. 
Varje nummer ska skrivas ut i konsollen och även markeras om numret är ett jämnt nummer, alltså delbart med två. 
För att se om något är delbart med två, använd operatorn modulus.

Modulus är det som blir över vid division. Modulus operatorn är ett procenttecken "%"

*/

for (let i = 1; i < 21; i++) {
    if (i % 2 == 0) {
        console.log((i) + " Even number");
    }else{
        console.log(i);
    }
}