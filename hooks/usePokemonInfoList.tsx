"use client"
import { useState, useEffect } from "react"
import { getPokemon } from "@/app/lib/pokemonApi"

const usePokemonInfoList = (pokemonList: any) => {
  const [pokemonInfoList, setPokemonInfoList] = useState<any>()

  useEffect(() => {
    const controller = new AbortController()
    async function fetchData() {
        try {
          const response = pokemonList.map(async (pokemon: any) => {
            const response = await getPokemon(pokemon);
            return response;
          })
    
        const pokemonArray = await Promise.all(response);
        console.log("==res", pokemonArray);
        setPokemonInfoList(pokemonArray);

        } catch (error) {
          throw error
        }
    }

    fetchData()

    return () => {
      controller.abort();
    }
    }, [pokemonList]);

  return pokemonInfoList
}

export default usePokemonInfoList