"use client"
import { useState, useEffect } from "react"
import { getPokemonSpecies } from '@/app/lib/pokemonApi' 

const usePokemonInfo = (pokemonName: any) => {
  const [pokemon, setPokemon] = useState<any>()

  useEffect(() => {
  const controller = new AbortController()
  async function fetchData() {
    try {
      const response = await getPokemonSpecies(pokemonName);
      console.log("==res", response)
      setPokemon(response)
    } catch (error) {
      
    }
  }

  fetchData()

  return () => {
    controller.abort();
  }
  }, [pokemonName]);

  return pokemon
}

export default usePokemonInfo