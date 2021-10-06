// "use strict";

// const numberOfFilms = +prompt('How many movies have you seen?', '');

// const personalMovieDB = {

//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };

// let i = 0;

// do {
//     const a = prompt('One of the last movies you watched?', ''),
//           b = prompt('How much would you rate the film?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//         i--;
//     }
    
// }
// while (i < 2);

// if (personalMovieDB.count < 10) {
//     console.log("Too few films were seen!");
// } else if (personalMovieDB.count >= 10  && personalMovieDB.count < 30) {
//     console.log("You are calssic viewer!");
// }else if (personalMovieDB.count > 30) {
//     console.log("You are movie fan!");
// } else {
//      console.log("Error");
// }

// console.log(personalMovieDB);