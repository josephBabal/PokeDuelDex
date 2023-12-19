import styles from './page.module.scss'
import useStore from '@/zustand/store'
import PokemonDisplay from '@/components/pokemonDisplay/PokemonDisplay'
import { getPokemonList } from './lib/pokemonApi'

type PokemonList = {
  name: string
  url: string
}

const Home = async () => {
  // const pokemonList: Array<PokemonList> = await getPokemonList()

  return (
    <section className="section">
      <PokemonDisplay 
      />
    </section>
  )
}

export default Home
