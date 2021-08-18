// funcion realizar el filtro de la A-Z


export const anotherExample = () => {
  return 'OMG';
};

//-- Función para organizar la data en orden alfabetico de la A-Z --//
export const sortAZ = (dataMovie) => {
  return dataMovie.sort((a, b) => (a.title < b.title ? -1 : 1));
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

//-- Función para realizar el cálculo de porcentajes de los géneros de los personajes.
export const genderCharacters = (female, male, unknown) => {
  let total = female + male +unknown;
  let girls = (female*100)/total;
  let boys = (male*100)/total;
  let others = (unknown*100)/total;
  let values = {female: girls, male: boys, unknown: others}
  return values;
};
