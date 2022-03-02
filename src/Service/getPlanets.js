const getPlanets = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error.message);
  }
};

export default getPlanets;
