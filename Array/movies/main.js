const movies = ['the game', 'blow', 'xxx'];

movies.push('Avengers')
movies.push('Matrix')
movies.push('Gladiator')

const number = parseInt(prompt(`inserisci il numero da 0 a ${movies.length - 1}`));

console.log(movies);

console.log(movies[number]);

                  