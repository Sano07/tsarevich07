let numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    a = prompt('Один из последний просмотреных фильмов?', '');
    b = +prompt('На сколько оцените его?', '');
 
    if (a !=null && b !=null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--
    }
} 

if (personalMovieDB.count < 10 ) {
    alert('Просмотрено довольно мало фильмов') 
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель') 
} else if (personalMovieDB.count > 30 ) {
    alert('Вы лютотоп')
} else {
    alert('Ошибка')
};

console.log(personalMovieDB);

