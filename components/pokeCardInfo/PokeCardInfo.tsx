"use client"

import { useState } from 'react'
import styles from '@/styles/pokeCardInfo.module.scss'
import usePokemonInfo from '@/hooks/usePokemonInfo'
import usePokemonSpecies from '@/hooks/usePokemonSpecies'
import About from './about/About'
import Stats from './stats/Stats'
import { VscChevronLeft } from "react-icons/vsc";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation'

import { Pokemon, PokemonSpecies } from '@/types/types'

type PokemonProps = {
  pokemonName: string
}

type InfoProps = {
  pokemon: Pokemon,
  isLoading: boolean,
  error: any
}

const PokeCardInfo = ({pokemonName}: PokemonProps) => {
  const router = useRouter()
  const [category, setCateogry] = useState<string>("about")
  
  const {pokemon, isLoading, error}: InfoProps  = usePokemonInfo(pokemonName)
  const species: PokemonSpecies = usePokemonSpecies(pokemonName)

  console.log("== pokeInfo", pokemon)
  console.log("== species: ", species)

  return (
    <>
    {pokemon && species &&
      <div className={styles.cardContainer}>
        <button className={styles.btnWrap}>
          <IoChevronBackOutline 
            className={styles.backBtn} 
            onClick={() => (
              router.push('/')
            )}
          />
        </button>

        <div className={`${styles.imgInfo} br-p5 bg-secondary-${pokemon.types[0].type.name}` }> 
          <div>
            <img className="pokemon-img-width" loading="lazy" src={pokemon.sprites.other['official-artwork'].front_default } alt={`${pokemonName} sprite`} /> 
          </div>

          <div>
            <div className="poke-id"> #{pokemon.id.toString().padStart(4, '0')} </div>
            <div className={`bolder font-color-white ${styles.name}`}> {pokemonName[0].toUpperCase() + pokemonName.slice(1) }</div>
            <div className="type-container">
              <p className={`type-icon type-${pokemon.types[0].type.name}`}> { pokemon.types[0].type.name.toUpperCase() } </p>
                {pokemon.types.length > 1 && <p className={`type-icon type-${pokemon.types[1].type.name}`}> {pokemon.types[1].type.name.toUpperCase() } </p> }
            </div>
          </div>
        </div>
    
  
        <div className={styles.textBody}>
          <div className={styles.selectorContainer}>
            <p 
              className={`
                ${styles.categoryName} 
                ${styles.about}
                ${category === "about" && styles.active
              }`}
              onClick={() => {
                setCateogry("about")
              }}> 
              About 
            </p>

            <p 
              className={`
                ${styles.categoryName} 
                ${styles.stats}
                ${category === "stats" && styles.active
              }`}
              onClick={() => {
                setCateogry("stats")
              }}> 
                Stats 
            </p>
        </div>
          
        
        {category === "about" && 
          <div>
            <About 
              pokemon={pokemon} 
              species={species} 
            />
          </div>
        } 

        {category === "stats" && 
          <div>
            <Stats 
              pokemon={pokemon} 
            />
          </div>
        }
      </div>
    </div>
    
    }
    </> 
  )
}

export default PokeCardInfo