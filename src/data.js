// funcion realizar el filtro de la A-Z

//-- Función para organizar la data en orden alfabetico de la A-Z --//
export const sortAZ = (dataMovie) => {  
  //return dataMovie.sort((a, b) => (a.title < b.title ? -1 : 1));
  return dataMovie.sort((a, b) => {
    //return(a.title < b.title ? -1 : 1)//
    if(a.title < b.title){
      return -1;
    } else {
      return 1;
    }
  });
};

//-- Función para organizar la data por año de lanzamiento --//
export const releaseDate = (dataMovie) => {
  return dataMovie.sort((a, b) => (a.release_date < b.release_date ? -1 : 1));
};

//-- Función para organizar la data por puntaje de "rotten tomatoes" --//
export const score = (dataMovie) => {
  return dataMovie.sort((a, b) =>(b.rt_score - a.rt_score));
};

//-- Función para filtar la data por "Pelicula" --//
export const movieFilter = (dataMovie, title) => {

  let film = dataMovie.filter(movie => movie.title == title);  
  return film[0].people;
};


//-- Funcion para mostrar estadisticas de canridad de personajes female, male y others)
export const genderCharacters = (allCharacters) => {

  let allPeopleMale = allCharacters.reduce((contador, allCharacters) => {if (allCharacters.gender === "Male"){
    return contador + 1;
  } else {
    return contador;
  }}, 0);

  let allPeopleFemale = allCharacters.reduce((contador, allCharacters) => {if (allCharacters.gender === "Female"){
    return contador + 1;
  } else {
    return contador;
  }}, 0);
  
  let allPeopleOthers = allCharacters.reduce((contador, allCharacters) => {if (allCharacters.gender === "Unknown (Possible Male)"){
    return contador + 1;
  } else {
    return contador;
  }}, 0);

  let others = allCharacters.length - (allPeopleFemale + allPeopleMale + allPeopleOthers);

  let total = allPeopleMale + allPeopleFemale + allPeopleOthers + others;
  let girls = ((allPeopleFemale*100)/total).toFixed();
  let boys = ((allPeopleMale*100)/total).toFixed();
  let othersPercent = (((allPeopleOthers+others)*100)/total).toFixed();

  /* console.table(total, girls, boys, othersPercent); */

  let object = {allTotal: total, boysPercent: boys, girlsPercent: girls, othersP: othersPercent}
  

  return object;
  
};




