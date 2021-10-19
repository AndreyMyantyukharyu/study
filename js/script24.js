"use strict";

const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you seen?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you seen?', '');
    
        }
    },

    rememberMyFilms: function() {
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

    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Too few films were seen!");
        }else if (personalMovieDB.count >= 10  && personalMovieDB.count < 30) {
            console.log("You are calssic viewer!");
        }else if (personalMovieDB.count > 30) {
            console.log("You are movie fan!");
        } else {
             console.log("Error");
        }

    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }

    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat ) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`What is your lovely genre under number ${i}`);

            
            if (genre === '' || genre === null) {
                console.log('Incorrect information');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;

            }   
        }
        
        personalMovieDB.genres.forEach((item, i ) => {
            console.log(`Lovely genre ${i+ 1} - is ${item}`);
        });
    }
};

 




