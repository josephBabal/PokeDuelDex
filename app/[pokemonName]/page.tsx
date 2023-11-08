
import PokeCardInfo from "@/components/pokeCardInfo/PokeCardInfo"

const PokemonDetailsPage = ({ params }: { params: { pokemonName: string } }) => {
  const { pokemonName } = params
  console.log(typeof pokemonName)
 

  return (
    <div>
      {/* <p> {pokemonName[0].toUpperCase() + pokemonName.slice(1)} </p> */}
      <PokeCardInfo pokemonName={pokemonName} />
    </div>
  )
}

export default PokemonDetailsPage