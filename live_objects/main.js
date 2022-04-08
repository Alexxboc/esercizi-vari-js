/* Sintasi oggetto letterale
-variabile
-{}
- key:value
*/

// Define a user object

const user = {
    username:'grogu',
    email:'grogu@jedi.it',
    password:'123456'
}

console.log(typeof user);
console.log(user);

// Accedere alla proprietà di un oggetto
console.log(user.email); //'grogu@jedi.it
console.log(user['password']); //'123456'

// Diffrenza tra dot e array notation
const keyEmail = 'email';
console.log(user.keyEmail); //errore
console.log(user[keyEmail]); //'grogu@jedi.it

// Aggiungere e modificare valori di un oggetto
user.gender = '-'
console.log(user.gender);
user.gender = 'jedi'
console.log(user.gender);

user['address'] = 'jedi way 123';
console.log(user.address);
user['address'] = 'jedi way 345'
console.log(user.address);

// Ciclo for in
for(let key in user) {
    console.log(user[key]);
}

// Array di Array
const classi =
[
    ['mattia','giacomo'],
    ['martina','giorgia']
];
// classi[0][0] // mattia


// Array di oggetti
const articoli = [
    {
        title:'Learn HTML',
        description:'lorem ipsum dolor',
        img:'https://picsum.photos/200/300'
    },
    {
        title:'Learn CSS',
        description:'lorem ipsum dolor',
        img:'https://picsum.photos/200/300'
    },
    {
        title:'Learn JS',
        description:'lorem ipsum dolor',
        img:'https://picsum.photos/200/300'
    },
    {
        title:'Learn VUE',
        description:'lorem ipsum dolor',
        img:'https://picsum.photos/200/300'
    },
    {
        title:'Learn PHP',
        description:'lorem ipsum dolor',
        img:'https://picsum.photos/200/300'
    }
]

console.log(articoli);

for (let index = 0; index < articoli.length; index++) {
    const articolo = articoli[index];

    console.log(typeof articolo);
    console.log(articolo.title);
    console.log(articolo.description);
    console.log(articolo.img);
    console.log('_______________________');
  
}