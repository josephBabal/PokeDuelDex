"use client"

import { useState, useEffect  } from 'react'
import PokemonCard from '../pokemonCard/PokemonCard'
import { PokemonName } from '@/types/types'
import Search from '@/components/search/Search'
import Loading from '@/app/loading'


type PokemonListProp = {
  name: string;
}

const PokemonDisplay = ( ) => {
  const [pokemonList, setPokemonList] = useState<PokemonName[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const limit = 9

  const fetchData = async () => {
    if (offset >= 1010) {
      return;
    }
  
    setIsLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;


    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, 
        { signal }
      );
      const data = await response.json();
      setPokemonList((prevList: PokemonName[]) => [...prevList, ...data.results]);
      setOffset(prevOffset => prevOffset + limit);
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchData();
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);



  //* fetch data when component first mounts
  useEffect(() => {  
    fetchData();
  }, []);





  const handleSearch = (term: any) => {
    setSearchQuery(term);
  };

  // Filter the PokemonList based on the search term

  const uniqueList = pokemonList.filter(( pokemon, index, self ) => 
    index === self.findIndex((p) => p.name === pokemon.name)
  );

  const filteredPokemonList = uniqueList.filter((pokemon: any) =>
  pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  console.log("==pokemonList", pokemonList)

  console.log("== query", searchQuery)



  // console.log("== searchedPokemon", searchedPokemon);

  return (
    <div>
      <h1 className="text-center">  </h1>
      <h2 className="text-center">  </h2>

      <Search 
        handleSearch={handleSearch} 
      />


      <div className="card-container">
        {filteredPokemonList.map(( pokemon: PokemonListProp ) => (
          <PokemonCard 
            pokemonName={pokemon.name} 
            key={pokemon.name}
          />
        ))}
      </div>

      {isLoading && <Loading />}
      {error && <p>Error: {error}</p>}

    </div>
  )
}

export default PokemonDisplay