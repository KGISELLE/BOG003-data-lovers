// estas funciones son de ejemplo

export const example = () => {
  
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//-- Función para organizar la data en orden alfabetico de la A-Z --//
export const sortAZ =  (dataMovie) => {
  return dataMovie.sort((a, b) => (a.title < b.title ? -1 : 1));
}

//-- Función para organizar la data por año de lanzamiento --//
export const releaseDate =  (dataMovie) => {
  return dataMovie.sort((a, b) => (a.release_date < b.release_date ? -1 : 1));
}

//-- Función para organizar la data por puntaje de "rotten tomatoes" --//
export const score =  (dataMovie) => {
  return dataMovie.sort((a, b) =>(b.rt_score - a.rt_score));
}

//-- Función para filtar la data por "Pelicula" --//
export const movieFilter =  (dataMovie, title) => {
  return dataMovie.filter((dataMovie) => dataMovie.title);

}
