const numfisso = 21
let nome = prompt('Dimmi il tuo nome');
let cognome = prompt ('Dimmi il tuo cognome');
let colore = prompt ('Dimmi il tuo colore preferito');
let password = `<p> La tua password è ${nome}${cognome}${colore}${numfisso} </p>`;

document.getElementById('testo').innerHTML = password;
console.log(document.getElementId('testo'));