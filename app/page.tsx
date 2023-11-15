import styles from './page.module.scss'

import useStore from '@/zustand/store'
import PokemonDisplay from '@/components/pokemonDisplay/PokemonDisplay'
import { getPokemonList } from './lib/pokemonApi'

const Home = async() => {
  const pokemonList = await getPokemonList()

  return (
    <section className="section">
      <PokemonDisplay 
        pokemonList={pokemonList} 
      />
    </section>
  )
}

export default Home
