"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you seen?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you seen?', '');

    }
}

start();


const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies you watched?', ''),
              b = prompt('How much would you rate the film?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        
    }

}

// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Too few films were seen!");
    }else if (personalMovieDB.count >= 10  && personalMovieDB.count < 30) {
        console.log("You are calssic viewer!");
    }else if (personalMovieDB.count > 30) {
        console.log("You are movie fan!");
    } else {
         console.log("Error");
    }

}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
    console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {

        personalMovieDB.genres[i - 1] = prompt(`What is your lovely genre under number ${i}`);
    }
}

writeYourGenres();
