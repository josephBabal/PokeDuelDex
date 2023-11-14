// "use client"
import { getPokemon } from "@/app/lib/pokemonApi"
import { useState, useEffect } from 'react'
import Link from "next/link"
import usePokemonInfo from "@/hooks/usePokemonInfo"

type PokemonProp = {
  pokemon: any
}

const PokemonCard = ({pokemonName }: any) => {
  const pokemonInfo = usePokemonInfo(pokemonName)

  return (
  <>
  {pokemonInfo &&
  <Link href={pokemonName} className={`pokemon-card bg-secondary-${pokemonInfo.types[0].type.name}`}>
    <div>
      <p className="poke-id"> #{pokemonInfo.id.toString().padStart(4, '0')} </p>
      <p className="bolder mt-1 font-color-white"> {pokemonName[0].toUpperCase() + pokemonName.slice(1)} </p>

      <div className="type-container">
        <p className={`type-icon type-${pokemonInfo.types[0].type.name}`}> { pokemonInfo.types[0].type.name.toUpperCase() } </p>
        {pokemonInfo.types.length > 1 && <p className={`type-icon type-${pokemonInfo.types[1].type.name}`}> {pokemonInfo.types[1].type.name.toUpperCase() } </p> }
      </div>
    </div>
    <div> {pokemonInfo && 
      <img 
        className="pokemon-img-width " 
        loading="lazy" 
        src={pokemonInfo.sprites.other['official-artwork'].front_default} 
        alt={`${pokemonName} sprite`}
      />} 
    </div>

  </Link>
  }


{/* {pokemonDetails &&
  <Link href={pokemonName} className={`pokemon-card bg-secondary-${pokemonDetails.types[0].type.name}`}>
    <div>
      <p className="poke-id"> #{pokemonDetails.id.toString().padStart(4, '0')} </p>
      <p className="bolder mt-1 font-color-white"> {pokemonName[0].toUpperCase() + pokemonName.slice(1)} </p>

      <div className="type-container">
        <p className={`type-icon type-${pokemonDetails.types[0].type.name}`}> { pokemonDetails.types[0].type.name.toUpperCase() } </p>
        {pokemonDetails.types.length > 1 && <p className={`type-icon type-${pokemonDetails.types[1].type.name}`}> {pokemonDetails.types[1].type.name.toUpperCase() } </p> }
      </div>
    </div>
    <div> {pokemonDetails && 
      <img 
        className="pokemon-img-width " 
        loading="lazy" 
        src={pokemonDetails.sprites.other['official-artwork'].front_default} 
        alt={`${pokemonName} sprite`}
      />} 
    </div>

  </Link>
  } */}

</> 
  )
}

export default PokemonCard