import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

let allMovies = data.films;
//console.log(allMovies[0].poster);


for (let i=0; i<allMovies.length;i++){
    //-- Creando elemento "IMG" para extraer el Poster de la data --//
    const screenPoster= document.createElement("IMG");
    screenPoster.setAttribute("src", allMovies[i].poster);

    //-- Creando elemento "TITLE" para extraer el titulo de la data --//
    const titlePoster= document.createElement("h5");
    titlePoster.innerHTML = allMovies[i].title;
    // titlePoster.createTextNode("src", allMovies[i].title);//
    /* titlePoster.textContent = e.title; */
    


    //-- Creando el divContainer padre "card-container" --//
    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "card-container");
    
    //-- Creando divPoster "front-card" div hijo de divContainer "card-container" --//
    let divPoster = document.createElement("div");
    divPoster.setAttribute("class", "front-card");
    //-- mostrar Poster dentro de divPoster "front-card" --//
    divPoster.appendChild(screenPoster);

    //-- mostrar titulo de pelicula dentro de "front-card"
    divPoster.appendChild(titlePoster);

    
    
    //-- Creando divBack "back-card" div hijo de divContainer "card-container" --//
    let divBack = document.createElement("div");
    divBack.setAttribute("class", "back-card");
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





//document.body.appendChild(screenPoster);

//console.log(moviePoster);



for (let item = 0; item < allMovies.length; item++) {
    console.log(allMovies[item].title);
    console.log()
}
 //innerhtml
//createlement
 //setatribute







/* let imageObj = new Image();
imageObj.src =allMovies.poster;
//context.drawImage( imageObj, 0, 0 ); */

//console.log(allMovies);

/* let arrayData=data;
console
foreach(arrayData){

} */

//console.log(example, data);


//-- Funcionalidad para girar la tarjeta --//
const card = document.querySelector(".card-container");
card.addEventListener("click", () => {
    card.classList.toggle("active")
});



