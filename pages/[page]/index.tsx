import {gql} from '@apollo/client'
import client from '@/apollo-client'
import Pokemons from '@/components/pokemons'
import Header from '@/components/header'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

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
  page: number
}

export default function Fallback(props: HomeProps) {
  const router = useRouter()

  if (router.isFallback) {
    return null
  }

  return <PokemonPage {...props} />
}

function PokemonPage({pokemons, page}: HomeProps) {
  const [currentPage, setCurrentPage] = useState(page || 1)
  const [allPokemons, setAllPokemons] = useState(pokemons)

  useEffect(() => {
    if (page !== currentPage) setCurrentPage(Number(page))
  }, [page])

  useEffect(() => {
    if (pokemons) {
      setAllPokemons(pokemons)
    }
  }, [pokemons])

  const getNextPage = async (page: number) => {
    const {data} = await client.query({
      query: gql`
        query Pokemons {
          pokemons(first: ${page * 20}) {
            name
            number
            types
            image
          }
        }
      `,
    })
    setAllPokemons(data?.pokemons)
  }

  // console.log(currentPage, allPokemons)
  if (!allPokemons) return null

  return (
    <main className="min-h-screen p-12">
      <Header />
      <div className="overflow-hidden bg-white shadow pokemons-list sm:rounded-lg">
        <Pokemons
          pokemons={
            allPokemons &&
            allPokemons.slice(currentPage * 20 - 20, currentPage * 20)
          }
        />

        <div className="flex items-center justify-between w-full px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-gray-700">
              Showing{' '}
              <span className="font-semibold text-gray-900">
                {currentPage * 20 - 20}
              </span>{' '}
              to{' '}
              <span className="font-semibold text-gray-900">
                {currentPage * 20 -
                  20 +
                  allPokemons.slice(currentPage * 20 - 20, currentPage * 20)
                    .length}
              </span>{' '}
              of <span className="font-semibold text-gray-900">151</span>{' '}
              results
            </span>
            <div className="flex gap-2">
              <Link
                href={`/${currentPage - 1}`}
                className={`inline-flex text-gray-500  ${
                  currentPage === 1 ? 'cursor-not-allowed text-gray-400 ' : ''
                } items-center px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-lg`}
              >
                Previous
              </Link>

              <Link
                href={`/${currentPage + 1}`}
                className={`inline-flex text-gray-500  ${
                  currentPage === 8 ? 'cursor-not-allowed text-gray-400 ' : ''
                } items-center px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-lg`}
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps(props: {params: {page: string}}) {
  const {data} = await client.query({
    query: gql`
    query Pokemons {
      pokemons(first: ${(Number(props.params.page) || 1) * 20}) {
          name
          number
          types
          image
        }
      }
      `,
  })

  return {
    props: {
      pokemons: data.pokemons,
      page: Number(props.params.page),
    },
  }
}

export async function getStaticPaths() {
  // SSG first 3 pages
  return {
    paths: ['/1', '/2', '/3'],
    fallback: true,
  }
}
