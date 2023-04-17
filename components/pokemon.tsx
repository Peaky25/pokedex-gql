import {PokemonType} from '@/pages/index'
import Types from './types'

export default function Pokemon({
  pokemon,
  isDetailed,
}: {
  pokemon: PokemonType
  isDetailed?: boolean
}) {
  return (
    <div className="relative px-4 py-3 border rounded-md group">
      <div className="flex w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-60">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="object-contain object-center w-full h-full bg-white"
        />
        {isDetailed ? (
          <div className="px-6 mx-auto min-w-[450px] max-w-7xl lg:px-8">
            <dl className="flex flex-col gap-4 text-center">
              {/* <div className="flex justify-between w-full m-0 mx-auto mt-4 gap-y-4">
                <dd className="order-first text-base leading-7 text-gray-600">
                  Types
                </dd>
                <dt className="text-lg font-semibold tracking-tight text-gray-900 ">
                  {pokemon.types.map(type => (
                    <Types key={type} type={type} />
                  ))}
                </dt>
              </div> */}
              <div className="flex justify-between w-full m-0 mx-auto mt-4 gap-y-4">
                <dd className="order-first text-base leading-7 text-gray-600">
                  Category
                </dd>
                <dt className="text-lg font-semibold tracking-tight text-gray-900 ">
                  {pokemon.classification}
                </dt>
              </div>
              <div className="flex justify-between w-full m-0 mx-auto mt-4 gap-y-4">
                <dd className="order-first text-base leading-7 text-gray-600">
                  Weight
                </dd>
                <dt className="text-lg font-semibold tracking-tight text-gray-900 ">
                  {pokemon.weight.maximum}
                </dt>
              </div>
              <div className="flex justify-between w-full m-0 mx-auto mt-4 gap-y-4">
                <dd className="order-first text-base leading-7 text-gray-600">
                  Height
                </dd>
                <dt className="text-lg font-semibold tracking-tight text-gray-900 ">
                  {pokemon.height.maximum}
                </dt>
              </div>
              <div className="flex justify-between w-full m-0 mx-auto mt-4 gap-y-4">
                <dd className="order-first text-base leading-7 text-gray-600">
                  HP
                </dd>
                <dt className="text-lg font-semibold tracking-tight text-gray-900 ">
                  {pokemon.maxHP}
                </dt>
              </div>
            </dl>
          </div>
        ) : null}
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {pokemon.name}
          </h3>
          {/* <p className="mt-1 text-sm text-gray-500">{pokemon.color}</p> */}
        </div>
        <p className="text-sm font-medium text-gray-900"># {pokemon.number}</p>
      </div>
      <div className="flex mt-2">
        {pokemon.types.map(type => (
          <Types key={type} type={type} />
        ))}
      </div>
    </div>
  )
}
