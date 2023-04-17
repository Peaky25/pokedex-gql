import Link from 'next/link'

export default function Header() {
  return (
    <Link href="/1">
      <h2 className="pb-12 text-3xl font-bold tracking-tight text-gray-900">
        Pokédex
      </h2>
    </Link>
  )
}
