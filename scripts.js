alert('Benvenuto');

var nome_utente = prompt ("Qual'è il tuo nome?");
console.log (nome_utente);
document.getElementById ('nome_utente').innerHTML = document.getElementById ('nome_utente').innerHTML + nome_utente;

var cognome_utente = prompt ("Qual'è il tuo cognome?");
console.log (cognome_utente);
document.getElementById ('cognome_utente').innerHTML = document.getElementById ('cognome_utente').innerHTML + cognome_utente;

var colore_preferito = prompt ("Qual'è il tuo colore preferito?");
console.log (colore_preferito);
document.getElementById ('colore_preferito').innerHTML = document.getElementById ('colore_preferito').innerHTML + colore_preferito;

console.log ('la tua password è: ' + nome_utente + cognome_utente + colore_preferito + 20);
document.getElementById ('password').innerHTML = document.getElementById ('password').innerHTML + nome_utente + cognome_utente + colore_preferito + 20;
