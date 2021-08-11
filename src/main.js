import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

let allMovies = data.films;
//console.log(allMovies[0].poster);


for (let i = 0; i < allMovies.length; i++) {
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
    const ranking = document.createElement("p");
    ranking.innerHTML = allMovies[i].rt_score;





    //-- Creando el divContainer padre "cardContainer" --//
    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "cardContainer");

    //-- Creando divPoster "frontCard" div hijo de divContainer "cardContainer" --//
    let divPoster = document.createElement("div");
    divPoster.setAttribute("class", "frontCard");
    //-- mostrar Poster dentro de divPoster "frontCard" --//
    divPoster.appendChild(screenPoster);

    //-- mostrar titulo de pelicula dentro de "frontCard"
    divPoster.appendChild(titlePoster);

    //-- mostrar año de la pelicula dentro de "frontCard"
    divPoster.appendChild(releaseDate);

    //-- mostrar ranking de la pelicula dentro de "frontCard"
    divPoster.appendChild(ranking);



    //-- Creando divBack "backCard" div hijo de divContainer "cardContainer" --//
    let divBack = document.createElement("div");
    divBack.setAttribute("class", "backCard");

    //-- mostrar titulo de pelicula dentro de "backCard"
    
    //-- mostrar descripción de pelicula dentro de "backCard"

    //-- mostrar director de pelicula dentro de "backCard"

    //-- mostrar productor de pelicula dentro de "backCard"
    

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



