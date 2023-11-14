"use client"

import { useState, useMemo, useEffect } from 'react'
import PokemonCard from '../pokemonCard/PokemonCard'
import { getPokemon } from '@/app/lib/pokemonApi'
type PokemonProps = {
  pokemonList: any
}


const PokemonDisplay = ({pokemonList}: any) => {
  console.log("== props", pokemonList)
  const [searchInput, setSearchInput] = useState("")
  // const [searchedPokemon, setSearchedPokemon] = useState<any>()


  // const [isPokemon, setIsPokemon] = useState(true)


  const handleFilter = (list: []) => {
    return list.filter((pokemon: any) => pokemon && pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))
  }

  const filteredPokemonList = useMemo(() => {
    return handleFilter(pokemonList)
    // return handleFilter(pokemonInfoList)
  }, [pokemonList, searchInput])
  console.log("== filtered", filteredPokemonList)


  const handleSearchInput = (e: any) => {
    setSearchInput(e.target.value)
  }



  // const handleSubmit = async (e: any) => {
  //   e.preventDefault

  //   if (searchInput.length < 1) {
  //     setIsPokemon(false);
  //     return
  //   }

  //   console.log("== handle sumbit")

  //   try {
  //     let searchedItem = searchInput.replace(/ /g, "-").toLowerCase()
  //     console.log("== searchedItem", searchedItem)
  //     let url = `https://pokeapi.co/api/v2/pokemon/${searchedItem}`
  //     // let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchedItem}`
  //     const response = await fetch(url)

  //     if (!response.ok) {
  //       console.error(`HTTP error! Status: ${response.status}`);
  //       setIsPokemon(false)
  //       return;
  //     }

  //     const res = await response.json();
  //     // if (res.meals) {
  //     //   console.log("meals", res.meals);
  //     // }
  //     console.log("== res", res);
  //     setSearchedPokemon(res)
  //   } catch (error: any) {
  //     console.error(error.message);
  //     return;
  //   }
  // }

  // const handleKeyDown = (e: any) => {
  //   if (e.key === 'Enter') {
  //     handleSubmit(e)
  //     // setSearchedPokemon(async () => (await getPokemon(searchInput)))
  //   }
  // }



  // console.log("== searchedPokemon", searchedPokemon);

  return (
    <div>
      <h1 className="text-center">  </h1>
      <h2 className="text-center">  </h2>

      <div className="search-container">
        <input
          // className={`searchbar ${!isPokemon && "error"}`}
          className={`searchbar`}
          name="search"
          placeholder="Search for pokemon"
          onChange={handleSearchInput}
          // onKeyDown={handleKeyDown}

        />
      </div>

      <div className="card-container">
        {filteredPokemonList.map((pokemon: any) => (
          <PokemonCard 
            pokemonName={pokemon.name} 
            key={pokemon.name}
          />
        ))}
      </div>


      {/* {searchedPokemon && (
        <div className="search-list">
          <PokemonCard 
            pokemon={searchedPokemon}
            key={searchedPokemon.name}
          />  
        </div>
        )} */}

      {/* {!isPokemon && <div className="text-red text-center"> Pokemon not found </div>} */}


    </div>
  )
}

export default PokemonDisplay