import {HomeProps} from '@/pages/index'
import Link from 'next/link'
import Pokemon from './pokemon'

export default function Pokemons({pokemons}: HomeProps) {
  if (!pokemons || !pokemons.length) return null
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {pokemons.map(pokemon => (
            <Link key={pokemon.number} href={`/pokemon/${pokemon.name}`}>
              <Pokemon pokemon={pokemon} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
