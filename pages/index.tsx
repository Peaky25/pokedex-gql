export type PokemonType = {
  name: string
  image: string
  number: string
  classification: string
  maxHP: number
  weight: {
    maximum: string
  }
  height: {
    maximum: string
  }
  types: string[]
}

export type HomeProps = {
  pokemons: PokemonType[]
}

export default function Home() {
  return <div>Redirect to /1</div>
}
