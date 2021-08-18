//-- importar funcion de data.js --//
import { sortAZ, releaseDate, score, movieFilter } from './data.js';
import data from './data/ghibli/ghibli.js'



//-- Variable para guardar data traida de ghibli.js "base de datos" --//
let allMovies = data.films;
//console.log(allMovies[0].poster);





//-- Funcion para crear y mostrar info dentro de divs o contenedores "tarjetas" --//
function showCards (){

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
}

//-- Mostrar tarjetas en pantalla --//
showCards(allMovies);


//-- Evento al click en el boton ordenar por orden alfabetico "A-Z"
document.querySelector(".submenu1").addEventListener("click", () => {    
    document.querySelector(".posters").innerHTML = "";
    showCards(sortAZ(allMovies));
    console.log(sortAZ(allMovies));
});

//-- Evento al click en el boton ordenar por orden año de estreno "año estreno"
document.querySelector(".submenu2").addEventListener("click", () => {
    document.querySelector(".posters").innerHTML = "";
    showCards(releaseDate(allMovies));
    console.log(releaseDate(allMovies));
});

//-- Evento al click en el boton ordenar por puntaje rotten tomatoes "Calificación"
document.querySelector(".submenu3").addEventListener("click", () => {
    document.querySelector(".posters").innerHTML = "";
    showCards(score(allMovies));
    console.log(score(allMovies));
});



//-- Funcion para crear y mostrar info dentro de divs o contenedores "tarjetas personajes" --//
function showCharacters(allMovies){
    
    //for (let i = 0; i < allMovies.length; i++) {
        
        let allCharacters = allMovies;


        for (let x = 0; x < allCharacters.length; x++) {
            //-- traer datos de archivo ghibli.js y crear el elemento contenedor parte Frontal --//
            const photo = document.createElement("img");
            photo.setAttribute("src", allCharacters[x].img);

            const nameCharacters = document.createElement("h5");
            nameCharacters.innerHTML = allCharacters[x].name;

            const gender = document.createElement("p");
            gender.innerHTML = allCharacters[x].gender;

            const age = document.createElement("p");
            age.innerHTML = allCharacters[x].age;

            const specie = document.createElement("p");
            specie.innerHTML = allCharacters[x].specie;

            const eyeColor = document.createElement("p");
            eyeColor.innerHTML = allCharacters[x].eye_color;

            const hairColor = document.createElement("p");
            hairColor.innerHTML = allCharacters[x].hair_color;

            //-- traer datos de archivo ghibli.js y crear el elemento contenedor reverso --//
            const name = document.createElement("h5");
            name.innerHTML = allCharacters[x].name;

            //-- crear contenedores de la info y asignarle una clase para reutilizar las creadas --//
            let divContainer = document.createElement("div");
            divContainer.setAttribute("class", "cardContainer")
            
            //-- Crear contenedor parte frontal de la tarjeta --/
            let divFront = document.createElement("div");
            divFront.setAttribute("class", "frontCard");
            
            //-- Asignar info que va en el contenedor padre "divFront" parte frontal tarjeta --//
            divFront.appendChild(photo);
            divFront.appendChild(nameCharacters);
            divFront.appendChild(gender);
            divFront.appendChild(age);

            //-- Crear contenedor reverso de la tarjeta --/
            let divBack = document.createElement("div");
            divBack.setAttribute("class", "backCard");

            //-- Creando otros divs hijos de divBack "BackCard" --//
            let divResume = document.createElement("div");
            divResume.setAttribute("class", "resume1");

            //-- Asignar info que va en el contenedor padre "divBack" reverso tarjeta --//
            divBack.appendChild(name);

            //-- vinculando div padre "divBack" con div hijos "divResume", "divDirector" y "divProductor" (reutilizando clases de CSS)--//
            divBack.appendChild(divResume);

            
            //-- A la info traida de ghibli.js se les asigna un contenedor padre "divResume" --//
            
            divResume.appendChild(specie);
            divResume.appendChild(eyeColor);
            divResume.appendChild(hairColor);

            //-- Asinarle contenedor padre a parte frontal y reverso de la tarjeta --//
            divContainer.appendChild(divFront);
            divContainer.appendChild(divBack);
            
            //-- Mostrar dentro de la seccion class = "posters" el div hijo "divContaner"
            document.querySelector(".posters").appendChild(divContainer)


            //-- Funcionalidad para girar la tarjeta --//
            divContainer.addEventListener("click", () => {
            divContainer.classList.toggle("active")
            });
        }

    //}
}

/* console.log(showCharacters(allMovies)) */


//-- Evento al click en el link "Personajes" del navMenu --//
document.querySelector(".navLink1").addEventListener("click", () => {
    document.querySelector(".navSortBy").style.display ="none";
    document.querySelector("aside").style.display ="none";
    document.querySelector(".posters").innerHTML ="";
    document.querySelector(".containerFilmFilter").style.display = "inline-flex"; 
    //-- Mostrar tarjetas de personajes en pantalla --//
    for (let i = 0; 0< allMovies.length; i++) {  
        let allCharacters= allMovies[i].people;
        showCharacters(allCharacters);
   
    }
    
});

//-- Evento al click en el link "Peliculas" del navMenu --//
document.querySelector(".navLink").addEventListener("click", () => {
    document.querySelector(".navSortBy").style.display ="block";
    document.querySelector("aside").style.display ="block";
    document.querySelector(".containerFilmFilter").style.display = "none"; 
    document.querySelector(".posters").innerHTML ="";
    showCards();
    
});


//-- Evento al click en el boton filtar por Pelicula "Desplejar menu peliculas"
function buttons(){
    for (let i = 0; i < allMovies.length; i++) {

        //-- Creando elemento "p" para extraer el titulo de la pelicula de la data --//
        const link = document.createElement("p");
        link.innerHTML = allMovies[i].title;
        
        let linkBotton = document.createElement("button");
        linkBotton.setAttribute("class", "buttonFilm");
        
        document.querySelector(".containerFilmFilter").appendChild(linkBotton);
        
        // mostrar titulo de pelicula dentro de "linkBotton"
        linkBotton.appendChild(link);
    }
}


//--Evento seleccion de personajes--//

//-- Evento al click en el boton filtrar por Pelicula
document.querySelector(".buttonFilter").addEventListener("click", () => {

   buttons(allMovies);
   
    //-- Evento al click en el boton filtrar por Pelicula en el boton de la pelicula
    const buttonMovies = document.querySelectorAll(".buttonFilm");
    for (let i = 0; i < buttonMovies.length; i++) {
        buttonMovies[i].addEventListener("click", (e) => {
            /* console.log(e.target.textContent) */
        
            document.querySelector(".posters").innerHTML ="";

            /* console.log(movieFilter(allMovies, e.target.textContent)); */

            let titleFilter = e.target.textContent;  
            let showFilter = movieFilter(allMovies, titleFilter);
            console.log(showCharacters(showFilter));  
        });     
    }   
},
{ once :true});