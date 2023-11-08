"use client"

import styles from '@/styles/pokeCardInfo.module.scss'
import usePokemonInfo from '@/hooks/usePokemonInfo'
import usePokemonSpecies from '@/hooks/usePokemonSpecies'
import About from './about/About'
import Stats from './stats/Stats'

type PokemonProps = {
  pokemonName: string
}

const PokeCardInfo = ({pokemonName}: PokemonProps) => {
  
  console.log("input", pokemonName)
  // const [pokemon, setPokemon] = useState<any>()
  const pokemon  = usePokemonInfo(pokemonName)
  const species = usePokemonSpecies(pokemonName)


  console.log("== pokeInfo", pokemon)
  console.log("== species: ", species)

  return (
    <>
    {pokemon && species &&
    <div className={styles.cardContainer}>

    <div className={`${styles.imgInfo} br-p5 bg-secondary-${pokemon.types[0].type.name}` }> 
      <div>
        <img className="pokemon-img-width" loading="lazy" src={pokemon.sprites.other['official-artwork'].front_default } alt={`${pokemonName} sprite`} /> 
      </div>

      <div >
        <div className="poke-id"> #{pokemon.id.toString().padStart(4, '0')} </div>
        <div className={`bolder font-color-white ${styles.name}`}> {pokemonName[0].toUpperCase() + pokemonName.slice(1) }</div>
        <div className="type-container">
          <p className={`type-icon type-${pokemon.types[0].type.name}`}> { pokemon.types[0].type.name.toUpperCase() } </p>
            {pokemon.types.length > 1 && <p className={`type-icon type-${pokemon.types[1].type.name}`}> {pokemon.types[1].type.name.toUpperCase() } </p> }
        </div>
      </div>
    </div>
    
   
     {/* {pokemon.stats.map((stats: any,) => (
        <div key={stats.stat.name}> {stats.stat.name} {stats.base_stat} </div>
      ))} */}

    {/* <div> type: {pokemon.types[0].type.name} </div> */}
      <div className={styles.textBody}>
        
      
        <div>
          <About pokemon={pokemon} species={species} />
        </div>

        <div>
          <Stats pokemon={pokemon} />
        </div>
      </div>
    </div>
    
    }
    </> 
  )
}

export default PokeCardInfo