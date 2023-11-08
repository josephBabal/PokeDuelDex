"use client"
import { useState, useEffect } from "react"
import { getPokemon } from "@/app/lib/pokemonApi"

const usePokemonInfo = (pokemonName: any) => {
  const [pokemon, setPokemon] = useState<any>()

  useEffect(() => {
    const controller = new AbortController()
    async function fetchData() {
      try {
        const response = await getPokemon(pokemonName);
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