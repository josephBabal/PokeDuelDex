"use client"
import { useState, useEffect } from "react"
import { getPokemon } from "@/app/lib/pokemonApi"

const usePokemonInfo = (pokemonName: string) => {
  const [pokemon, setPokemon] = useState<any>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController()

    
    // const timeout = setTimeout(() => {
      async function fetchData() {
        try {
          const response = await getPokemon(pokemonName);
          console.log("==res", response)
          setPokemon(response)
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

      fetchData()
    // }, 3000)

    return () => {
      // clearTimeout(timeout)
      controller.abort();
    }
    }, [pokemonName]);

  return {pokemon, isLoading, error }
}

export default usePokemonInfo