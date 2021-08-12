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
  return dataMovie.sort((a, b) =>(a.rt_score < b.rt_score ? 1 : -1));
}


/* let num1 = dataMovie.parseInt(rt_score);
return dataMovie.sort((a, b) =>(a.rt_score > b.rt_score ? 1 : -1)); */

/* let numScore = parseInt(dataMovie.rt_score);
  return dataMovie.sort((a, b) =>(a.numScore - b.numScore));
  console.log(num1, num2) */