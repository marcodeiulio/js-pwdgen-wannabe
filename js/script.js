console.log('JS OK');

/*
Traccia:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

/*
Scaletta:
- Chiedi nome utente
- Conserva nome utente
- Chiedi cognome utente
- Conserva cognome utente
- Chiedi colore preferito
- Conserva cognome preferito
- Consegna password
*/

const userName = prompt("Come ti chiami?");
console.log(userName);

const userSurname = prompt(userName + " come?");
console.log(userSurname);

const userColor = prompt("Qual è il tuo colore preferito?")
console.log(userColor);

const psw = `${userName}${userSurname}${userColor}21`;
console.log(psw);

document.getElementById('user-name').innerText = userName;
document.getElementById('password').innerText = psw;