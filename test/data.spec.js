import { sortAZ, releaseDate , score , movieFilter, genderCharacters} from '../src/data.js';

let inputArr=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",       
    "release_date": "1986",
    "rt_score": "95"
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "release_date": "1988",
    "rt_score": "93"
  },
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",   
    "release_date": "1989",
    "rt_score": "96"
  }
]

let outputArrAZ=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "release_date": "1986",
    "rt_score": "95"
  },
  
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "release_date": "1989",
    "rt_score": "96"
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "release_date": "1988",
    "rt_score": "93"
  }
]


describe('sortAZ', () => {
  it('is a function', () => {
    expect(typeof sortAZ).toBe('function');
  });

  it('returns `sortAZ`', () => {
    expect(sortAZ(inputArr)).toStrictEqual(outputArrAZ);
  });
});

let outputDate = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "release_date": "1986",
    "rt_score": "95"
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "release_date": "1988",
    "rt_score": "93"
  },
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "release_date": "1989",
    "rt_score": "96"
  }
]

describe('releaseDate', () => {
  it('is a function', () => {
    expect(typeof releaseDate).toBe('function');
  });

  it('returns `releaseDate`', () => {
    expect(releaseDate(inputArr)).toStrictEqual(outputDate);
  });
});

let outputScore = [
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "release_date": "1989",
    "rt_score": "96"
  },
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "release_date": "1986",
    "rt_score": "95"
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "release_date": "1988",
    "rt_score": "93"
  },
]

describe('score', () => {
  it('is a function', () => {
    expect(typeof score).toBe('function');
  });

  it('returns `score`', () => {
    expect(score(inputArr)).toStrictEqual(outputScore);
  });
});

let inputArrMovFilter = [{
  "films": [
    {
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",
      "rt_score": "95",
      "people": [
        {
          "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },        
        {
          "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
          "name": "Motro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "None",
          "specie": "Human"
        },
        {
          "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
          "name": "Okami",
          "img": "http://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
          "gender": "Female",
          "age": "50",
          "eye_color": "Dark brown",
          "hair_color": "Orange",
          "specie": "Human"
        },
        {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
          "gender": "Unknown (Possible Male)",
          "age": "33",
          "eye_color": "Grey",
          "hair_color": "Brown",
          "specie": "Human"
        }
      ]
    }
  ]
}]

//--- filtro por pelicula--//

describe('movieFilter', () => {
  it('is a function', () => {
    expect(typeof movieFilter).toBe('function');
  });

    it('returns `movieFilter`', () => {
    expect(movieFilter(inputArrMovFilter)).toStrictEqual(inputArrMovFilter[0].people);
  });
});

//-- generos de personajes--//

let inputArrcharacter = [
  {
    "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
    "name": "Pazu",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
    "gender": "Male",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Brown",
    "specie": "Human"
  },
  {
    "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
    "name": "Lusheeta Toel Ul Laputa",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
    "gender": "Female",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Black",
    "specie": "Human"
  },
  {
    "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
    "name": "Motro",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
    "gender": "Male",
    "age": "Unspecified/Adult",
    "eye_color": "Dark brown",
    "hair_color": "None",
    "specie": "Human"
  },
  {
    "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
    "name": "Okami",
    "img": "http://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
    "gender": "Female",
    "age": "50",
    "eye_color": "Dark brown",
    "hair_color": "Orange",
    "specie": "Human"
  },
  {
    "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
    "name": "Colonel Muska",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
    "gender": "Unknown (Possible Male)",
    "age": "33",
    "eye_color": "Grey",
    "hair_color": "Brown",
    "specie": "Human"
  }
]


describe('genderCharacters', () => {
  it('is a function', () => {
    expect(typeof genderCharacters).toBe('function');
  });
  let object = {allTotal: 5, boysPercent: "40", girlsPercent: "40", othersP: "20"}

    it('returns `genderCharacters`', () => {
    expect(genderCharacters(inputArrcharacter)).toStrictEqual(object);
  });
});