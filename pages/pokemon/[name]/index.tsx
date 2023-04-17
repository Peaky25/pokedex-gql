import {Inter} from 'next/font/google'
import {gql} from '@apollo/client'
import client from '@/apollo-client'
import Pokemon from '@/components/pokemon'
import Header from '@/components/header'
import {PokemonType} from '../../index'

const inter = Inter({subsets: ['latin']})

type PokemonProps = {
  pokemon: PokemonType
}

export default function Home({pokemon}: PokemonProps) {
  if (!pokemon) return
  return (
    <main className="min-h-screen p-12">
      <Header />

      <div className="overflow-hidden bg-white shadow pokemons-list sm:rounded-lg">
        <Pokemon isDetailed pokemon={pokemon} />
      </div>
    </main>
  )
}

export async function getStaticProps(props: any) {
  console.log('props', props.params.name)
  const {data} = await client.query({
    query: gql`
      query Pokemon {
        pokemon(name: "${props.params.name}") {
          name,
          image,
          number,
          types,
          weight {
            maximum
          },
          height {
            maximum
          },
          classification,
          maxHP,
        }
      }
    `,
  })

  return {
    props: {
      pokemon: data.pokemon,
    },
  }
}

export async function getStaticPaths() {
  const {data} = await client.query({
    query: gql`
      query Pokemons {
        pokemons(first: 20) {
          name
          number
          types
          image
        }
      }
    `,
  })
  console.log(
    ...data.pokemons.map((pokemon: PokemonType) => ({
      params: {name: pokemon.name},
    })),
  )
  return {
    paths: [
      ...data.pokemons.map((pokemon: PokemonType) => ({
        params: {name: pokemon.name},
      })),
    ],
    fallback: true,
  }
}
