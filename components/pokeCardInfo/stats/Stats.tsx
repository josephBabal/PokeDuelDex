import calculatePokemonStats from "@/utils/pokemonStatCalculator"
import styles from './stats.module.scss'
const Stats = ({pokemon}: any) => {

  const { stats, totalBaseStats } = calculatePokemonStats(pokemon)
  const longestStatName = stats.reduce((max, stat) => (stat.name.length > max ? stat.name.length : max), 0);
  
  const statNameStyle = {
    minWidth: `${longestStatName}ch`, // using "ch" unit to represent the width of characters
  };

  const categoryHeadingClass = `${styles.categoryHeading} font-color-${pokemon.types[0].type.name}`


  return (
    <div className={styles.container}>
      <h4 className={categoryHeadingClass} > Base Stats </h4>
      {stats.map((stat: any, idx) => {
        const percent = pokemon.stats[idx].base_stat / 180 * 100
        console.log("== percent", percent)
        const styleBar = {
          width: `${percent}%`,
        }
        console.log("== styleBar", styleBar)
        return (
          <div className={styles.statWrap} key={idx}>
            <p className={styles.statName} style={statNameStyle}> {stat.name} </p>
            <p className={styles.base}> {pokemon.stats[idx].base_stat}  </p>
            <div className={styles.skillBar} >
              <div className={`${styles.skillPer} bg-primary-${pokemon.types[0].type.name}`} style={styleBar} >

              </div>
            </div>
            <div className={styles.minMaxWrap}>
              <p className={styles.min}> {stat.min}</p>
              <p className={styles.max}> {stat.max}</p>
            </div>
          </div>
        )})
      }

      <div className={styles.statWrap}>
        <p className={styles.statName} style={statNameStyle}> Total </p>
        <p className={styles.total}> {totalBaseStats} </p>
        <div className={styles.skillBar}></div>
        <p className={styles.minTotal}> min </p>
        <p className={styles.maxTotal}> max </p>
      </div>
    
      <div>
        <p className={styles.statDescription}> 
          The ranges shown on the right are for a level 100 Pokémon. 
          Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; 
          minimum values are based on a hindering nature, 0 EVs, 0 IVs.
        </p>
      </div>
    </div>
  )
}

export default Stats