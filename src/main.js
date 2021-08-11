import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

let allMovies = data.films;
//console.log(allMovies[0].poster);


for (let i = 0; i < allMovies.length; i++) {
    //-- Creando elementos extraidos de la data para poner en "front card" --//
    //-- Creando elemento "IMG" para extraer el Poster de la data --//
    const screenPoster = document.createElement("IMG");
    screenPoster.setAttribute("src", allMovies[i].poster);

    //-- Creando elemento "h5" para extraer el titulo de la data --//
    const titlePoster = document.createElement("h5");
    titlePoster.innerHTML = allMovies[i].title;
    // titlePoster.createTextNode("src", allMovies[i].title);//
    /* titlePoster.textContent = e.title; */

    //-- Creando elemento "p" para extraer "release_date" de la data --//
    const releaseDate = document.createElement("p");
    releaseDate.innerHTML = allMovies[i].release_date;

    //-- Creando elemento "p" para extraer "rt_score" de la data --//
    const score = document.createElement("p");
    score.innerHTML = allMovies[i].rt_score;

    //-- Creando elementos extraidos de la data para poner en "back card" --//
    //-- Creando elemento "h5" para extraer el titulo de la data para "back card" --//
    const titleMovie = document.createElement("h5");
    titleMovie.innerHTML = allMovies[i].title;

    //-- Creando elemento "p" para extraer "description" de la data --//
    const descriptionMovie = document.createElement("p");
    descriptionMovie.innerHTML = allMovies[i].description;

    //-- Creando elemento "p" para extraer "director" de la data --//
    const directorMovie = document.createElement("h6");
    directorMovie.innerHTML = allMovies[i].director;

    //-- Creando elemento "p" para extraer "producer" de la data --//
    const producerMovie = document.createElement("h6");
    producerMovie.innerHTML = allMovies[i].producer;




    //-- Creando divs --//
    // Creando el divContainer padre "cardContainer"
    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "cardContainer");

    // Creando divPoster "frontCard" div hijo de divContainer "cardContainer"
    let divPoster = document.createElement("div");
    divPoster.setAttribute("class", "frontCard");

    //-- Mostrar data estraida dentro de los divs creados divPoster "frontCard" --//
    // mostrar Poster dentro de divPoster "frontCard"
    divPoster.appendChild(screenPoster);

    // mostrar titulo de pelicula dentro de "frontCard"
    divPoster.appendChild(titlePoster);

    // mostrar año de la pelicula dentro de "frontCard"
    divPoster.appendChild(releaseDate);

    // mostrar calificación de la pelicula dentro de "frontCard"
    divPoster.appendChild(score);


    //-- Creando divBack "backCard" div hijo de divContainer "cardContainer" --//
    let divBack = document.createElement("div");
    divBack.setAttribute("class", "backCard");

    //-- Mostrar data estraida dentro de los divs creados divBack "BackCard" --//
    // mostrar titulo de pelicula dentro de "backCard"
    divBack.appendChild(titleMovie);
    
    //-- Creando divResume "resume" div hijo de divBack "BackCard" --//
    let divResume = document.createElement("div");
    divResume.setAttribute("class", "resume");

    //-- Creando divDirector "director" div hijo de divBack "BackCard" --//
    let divDirector = document.createElement("div");
    divDirector.setAttribute("class", "director");

    //-- Creando divProductor "productor" div hijo de divBack "BackCard" --//
    let divProducer = document.createElement("div");
    divProducer.setAttribute("class", "productor");

    //-- Creando divCharacters "personajes" div hijo de divBack "BackCard" --//
    let divCharacters = document.createElement("div");
    divCharacters.setAttribute("class", "characters");

    //-- vinculando div padre "divBack" con div hijos "divResume", "divDirector" y "divProductor" --//
    divBack.appendChild(divResume);
    divBack.appendChild(divDirector);
    divBack.appendChild(divProducer);
    divBack.appendChild(divCharacters);

    //-- mostrar descripción de pelicula dentro de "divResume" hijo de "divBack" --//
    //-- Colocarle un titulo al abstract
    const abstract = document.createElement("h7");
    abstract.textContent = "Abstract";
    divResume.appendChild(abstract);
    //-- Insertar "description" traida de la data a contenedor "resume" 
    divResume.appendChild(descriptionMovie);
    

    //-- mostrar director de la pelicula dentro de "divDirector" hijo de "divBack" --//
    //-- Colocarle un titulo a director
    const dir = document.createElement("h7");
    dir.textContent = "Director:";
    divDirector.appendChild(dir);
    //-- Insertar "director" traida de la data a contenedor "resume"
    divDirector.appendChild(directorMovie);


    //-- mostrar productor de la pelicula dentro de "divProducer" hijo de "divBack" --//
    //-- Colocarle un titulo a productor
    const producer = document.createElement("h7");
    producer.textContent = "Producer:";
    divProducer.appendChild(producer);
    //-- Insertar "producer" traida de la data a contenedor "resume"
    divProducer.appendChild(producerMovie);
    

    //-- mostrar link personajes de la pelicula dentro de "divCharacter" hijo de "divBack"
    //-- Colocarle un titulo a personajes
    const characters = document.createElement("h7");
    characters.textContent = "Characters:";
    divCharacters.appendChild(characters);
    //-- Insertar "producer" traida de la data a contenedor "resume"
    /* divProducer.appendChild(producerMovie); */
    

    //-- vinculando div padre "divConatiner" con sus div hijos "divPoster" y "divBack" --//
    divContainer.appendChild(divPoster);
    divContainer.appendChild(divBack);
    

    //let titleofMovie=document.createElement("TITLE");
    //titleofMovie=allMovies[i].title;
    document.querySelector(".posters").appendChild(divContainer);

    //-- Funcionalidad para girar la tarjeta --//
    divContainer.addEventListener("click", () => {
        divContainer.classList.toggle("active")
    });

}



