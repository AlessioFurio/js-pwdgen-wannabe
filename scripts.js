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


//stampa a video e in console della password senza la dichiarazione di una variabile contenitore di tutti gli input dell' utente
console.log ('la tua password è: ' + nome_utente + cognome_utente + colore_preferito + 20);
document.getElementById ('password').innerHTML = document.getElementById ('password').innerHTML + nome_utente + cognome_utente + colore_preferito + 20;


//stampa a video della password con la dichiarazione di una variabile "password_stampa_a_video" che contenga tutti gli input dell'utente
var password_stampa_a_video = nome_utente + cognome_utente + colore_preferito + 20;
document.getElementById ('password_stampa_a_video').innerHTML = document.getElementById ('password_stampa_a_video').innerHTML + password_stampa_a_video;
