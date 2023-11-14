
const POKEMON_API = "https://pokeapi.co/api/v2/";

//* getPokemonList -> Get the first 1010 pokemon 
export async function getPokemonList() {
  const response = await fetch(POKEMON_API + "pokemon?limit=1010&offset=0");

  const data = await response.json();

  return data.results;

}

//* getPokemon -> given a string "pikachu", get the information of pikachu
export async function getPokemon(name: string) {
  try {
    const response = await fetch(POKEMON_API + "pokemon/" + name);
    
    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log("==indiv data", data)
    return data;
  } catch (error: any) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      // Handle network error
      console.error('Network error:', error.message);
    } else {
      // Other error cases
      console.error('Error fetching data:', error.message);
    }
    throw error; 
  }
}




//* getPokemonSpecies -> given a string "pikachu", get the species information of pikachu
export async function getPokemonSpecies(name: string) {
  try {
    const response = await fetch(POKEMON_API + "pokemon-species/" + name);
    
    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log("==indiv data", data)
    return data;
  } catch (error: any) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      // Handle network error
      console.error('Network error:', error.message);
    } else {
      // Other error cases
      console.error('Error fetching data:', error.message);
    }
    throw error; 
  }
}