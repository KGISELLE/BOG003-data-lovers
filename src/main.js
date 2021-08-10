import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

let allMovies = data.films;
//console.log(allMovies[0].poster);


for (let i = 0; i < allMovies.length; i++) {
    //-- Creando elemento "IMG" para extraer el Poster de la data --//
    const screenPoster = document.createElement("IMG");
    screenPoster.setAttribute("src", allMovies[i].poster);

    //-- Creando elemento "TITLE" para extraer el titulo de la data --//
    const titlePoster = document.createElement("h5");
    titlePoster.innerHTML = allMovies[i].title;
    // titlePoster.createTextNode("src", allMovies[i].title);//
    /* titlePoster.textContent = e.title; */



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



    //-- Creando divBack "backCard" div hijo de divContainer "cardContainer" --//
    let divBack = document.createElement("div");
    divBack.setAttribute("class", "backCard");
    divBack.innerHTML = ""

    //-- vinculando div padre "divConatiner" con sus div hijos "divPoster" y "divBack" --//
    divContainer.appendChild(divPoster, divBack);


    //let titleofMovie=document.createElement("TITLE");
    //titleofMovie=allMovies[i].title;
    document.querySelector(".posters").appendChild(divContainer);

    //-- Funcionalidad para girar la tarjeta --//

    divContainer.addEventListener("click", () => {
        divContainer.classList.toggle("active")
    });

}





