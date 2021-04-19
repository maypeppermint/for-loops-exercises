/*
Skriv ett program som tar ett nummer från användaren. Gör en loop som räknar från 0 till användarens input i konsollen.
Se till så att input är ett nummer.
*/
let userNumber = prompt("Type a number");
let i = 0;
while (i<= parseInt(userNumber)) {
    console.log(i);
    i++;
}