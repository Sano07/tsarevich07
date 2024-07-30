let numberOfFilms;

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');

    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последний просмотреных фильмов?', '');
        let b = prompt('На сколько оцените его?', '');
     
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    } 
}
rememberMyFilms();

function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Ошибка');
    }
}
detectedPersonalLevel();

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB ();

function writeYourGenres () {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}?`, ''));
    }
}
writeYourGenres ();
