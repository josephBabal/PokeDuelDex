// "use client"
import { getPokemon } from "@/app/lib/pokemonApi"
import { useState, useEffect } from 'react'
import Link from "next/link"
import usePokemon from "@/hooks/usePokemonInfo"
import Loading from '@/app/loading'
import { Pokemon } from "@/types/types"


type PokemonProps = {
  pokemonName: string
}

type InfoProps = {
  pokemon: Pokemon,
  isLoading: boolean,
  error: any
}


const PokemonCard = ({ pokemonName } : PokemonProps ) => {
const { pokemon, isLoading, error }: InfoProps = usePokemon(pokemonName)

  return (
  <>
  {pokemon &&
  <Link href={pokemonName} className={`pokemon-card bg-secondary-${pokemon.types[0].type.name}`}>
    {isLoading ? ( <Loading />  
    ) : (
    <div>
      <div>
        <p className="poke-id"> #{pokemon.id.toString().padStart(4, '0')} </p>
        <p className="bolder mt-1 font-color-white"> {pokemonName[0].toUpperCase() + pokemonName.slice(1)} </p>

        <div className="type-container">
          <p className={`type-icon type-${pokemon.types[0].type.name}`}> { pokemon.types[0].type.name.toUpperCase() } </p>
          {pokemon.types.length > 1 && <p className={`type-icon type-${pokemon.types[1].type.name}`}> {pokemon.types[1].type.name.toUpperCase() } </p> }
        </div>
      </div>

      <div> {pokemon && 
        <img 
          className="pokemon-img-width" 
          loading="lazy" 
          src={pokemon.sprites.other['official-artwork'].front_default} 
          alt={`${pokemonName} sprite`}
        />} 
      </div>
    </div>
    )}

  </Link>
  }

</> 
  )
}

export default PokemonCard