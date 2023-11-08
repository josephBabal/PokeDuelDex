// "use client"
import { getPokemon } from "@/app/lib/pokemonApi"
import { useState, useEffect } from 'react'
import Link from "next/link"
import usePokemonInfo from "@/hooks/usePokemonInfo"

type PokemonProp = {
  pokemon: any
}

const PokemonCard = ({pokemonName}: any) => {
  const pokemonInfo = usePokemonInfo(pokemonName)

  return (
  //   <>
  //   {pokemonInfo &&
  //   <Link href={pokemonName} className={`pokemon-card type-${pokemonInfo.types[0].type.name}`}>
  //     {/* <div className="mb-2"> <Link href={pokemon.name}> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </Link> </div> */}
  //     <div> {pokemonInfo && <img className="pokemon-img-width mb-2" loading="lazy" src={pokemonInfo.sprites.other['official-artwork'].front_default} />} </div>
  //     {/* <div> {pokemonInfo && <img width={100} src={pokemonInfo.sprites.versions['generation-viii'].icons.front_default} />} </div> */}
  //     <p className="poke-id"> #{pokemonInfo.id.toString().padStart(4, '0')} </p>
  //     <p className="bolder"> {pokemonName[0].toUpperCase() + pokemonName.slice(1)} </p>
  //     {/* { pokemonInfo.types.map((type: any) => (<p>{type.slot}</p>)) } */}
  //     <div className="type-container">
  //       <p className={`type-icon type-${pokemonInfo.types[0].type.name}`}> { pokemonInfo.types[0].type.name.toUpperCase() } </p>
  //       {pokemonInfo.types.length > 1 && <p className={`type-icon type-${pokemonInfo.types[1].type.name}`}> {pokemonInfo.types[1].type.name.toUpperCase() } </p> }
  //     </div>
  //   </Link>
  //   }
  // </> 
  <>
  {pokemonInfo &&
  <Link href={pokemonName} className={`pokemon-card bg-secondary-${pokemonInfo.types[0].type.name}`}>
    {/* <div className="mb-2"> <Link href={pokemon.name}> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </Link> </div> */}
    {/* <div> {pokemonInfo && <img width={100} src={pokemonInfo.sprites.versions['generation-viii'].icons.front_default} />} </div> */}
    <div>
      <p className="poke-id"> #{pokemonInfo.id.toString().padStart(4, '0')} </p>
      <p className="bolder mt-1 font-color-white"> {pokemonName[0].toUpperCase() + pokemonName.slice(1)} </p>
      {/* { pokemonInfo.types.map((type: any) => (<p>{type.slot}</p>)) } */}
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
</> 
  )
}

export default PokemonCard