/* 
Live 1 Butta la pasta :
Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
Dopo il tempo indicato, appare un alert().
*/

// Chiedo all'utente quanto manca alla fine della cottura 
const seconds = Number(prompt('Quanto manca alla fine della cottura della pasta?'));

setTimeout(function(){
    alert('La pasta è pronta')
}, seconds * 1000)
