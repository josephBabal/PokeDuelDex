// "use client"
import styles from './page.module.scss'

import useStore from '@/zustand/store'
import PokemonDisplay from '@/components/pokemonDisplay/PokemonDisplay'
import { getPokemonList } from './lib/pokemonApi'
import usePokemonInfoList from '@/hooks/usePokemonInfoList'
import { useEffect, useState } from 'react'
const Home = async() => {
  // const { userEmail } = useStore()
  // const [pokemonList, setPokemonList] = useState<any>([])
  // const getList = async() => {
  //   const response = await getPokemonList()
  //   console.log(response)
  //   setPokemonList(response)
  // }
  // useEffect(() => {
  //   getList()
  // }, [])
  const pokemonList = await getPokemonList()
  // console.log(" home list", pokemonList)

  return (
    <section className="section">
      <PokemonDisplay 
        pokemonList={pokemonList} 
      />
    </section>
  )
}

export default Home
