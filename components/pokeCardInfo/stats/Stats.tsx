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
            <div className={styles.statName} style={statNameStyle}> {stat.name} </div>
            <div className={styles.base}> {pokemon.stats[idx].base_stat}  </div>
            <div className={styles.skillBar} >
              <div className={`${styles.skillPer} bg-primary-${pokemon.types[0].type.name}`} style={styleBar} >

              </div>
            </div>
            <div className={styles.min}> {stat.min}</div>
            <div className={styles.max}> {stat.max}</div>
          </div>
        )})
      }

      <div className={styles.statWrap}>
        <div className={styles.statName} style={statNameStyle}> Total </div>
        <div className={styles.total}> {totalBaseStats} </div>
        <div className={styles.skillBar}></div>
        <div className={styles.minTotal}> min </div>
        <div className={styles.maxTotal}> max </div>
      </div>
      {/* <div> {pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat} {hpStat.min} {hpStat.max} </div>
      <div> {pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat} {atkStat.min} {maxAtk} </div>
      <div> {pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat} </div>
      <div> {pokemon.stats[3].stat.name}: {pokemon.stats[3].base_stat} </div>
      <div> {pokemon.stats[4].stat.name}: {pokemon.stats[4].base_stat} {min} </div>
      <div> {pokemon.stats[5].stat.name}: {pokemon.stats[5].base_stat} </div>   */}
    </div>
  )
}

export default Stats