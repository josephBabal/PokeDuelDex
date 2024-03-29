import React from 'react'
import styles from './about.module.scss'


import { Pokemon, PokemonSpecies, Ability } from '@/types/types'

type AboutProps = {
  pokemon: Pokemon
  species: PokemonSpecies
}

const About = ({pokemon, species}: AboutProps ) => {
  const feet = Math.round(pokemon.height / 10 * 3.28)
  const inches = Math.round(pokemon.height / 10 * 3.3 % 28)

  const categoryHeadingClass = `${styles.categoryHeading} font-color-${pokemon.types[0].type.name}`

  const englishFlavorTxt = species.flavor_text_entries.find((item: any) => (
    item.language.name === "en" && item.flavor_text
  ))


  return (
    <div>
    {pokemon && species && 
    <div className={styles.flexData}>
      <p> { englishFlavorTxt && englishFlavorTxt.flavor_text }</p>

      <h4 className={categoryHeadingClass}> Pokedex Data</h4>  
      <div className={styles.categoryWrap}> 
        <p> Abilities </p>
        <div>
          {pokemon.abilities.map((item:any, idx: any) => 
            <p 
              key={item.ability.name}
              className={`
                ${styles.mb1} 
                ${item.is_hidden && styles.hiddenAbility
              }`}> 
                {item.ability.name[0].toUpperCase() + item.ability.name.slice(1)} {item.is_hidden && <>(hidden ability)</>}
            </p>
          )}
        </div>
      </div>


      <div className={styles.categoryWrap}>
        <p> Height </p>
        <p> {pokemon.height/10}m ({feet}'{inches}") </p>
      </div>

      <div className={styles.categoryWrap}>
        <p> Weight </p>
        <p> {pokemon.weight/10}kg ({(pokemon.weight/10 * 2.2).toFixed(1)}lbs) </p>
      </div>
            
      <h4 className={categoryHeadingClass}> Training </h4>
      <div className={styles.categoryWrap}>
        <p> Catch Rate </p>
        <p> {species.capture_rate} </p>
      </div>

      <div className={styles.categoryWrap}>
        <p> Base Friendship</p>
        <p> {species.base_happiness} </p>
      </div>

      <div className={styles.categoryWrap}>
        <p> Base Exp</p>
        <p> {pokemon.base_experience} </p>
      </div>

      <div className={styles.categoryWrap}>
        <p> Growth Rate</p>
        <p> {species.growth_rate.name} </p>
      </div>

    </div>
    }
    </div>
  )
}

export default About