import React from 'react'

export default function Types({type}: {type: string}) {
  switch (type) {
    case 'Water':
      return (
        <span className="leading-relaxed bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
          Water
        </span>
      )
    case 'Fire':
      return (
        <span className="leading-relaxed bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          Fire
        </span>
      )
    case 'Bug':
      return (
        <span className="leading-relaxed bg-green-100 text-green-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          Bug
        </span>
      )
    case 'Grass':
      return (
        <span className="leading-relaxed bg-emerald-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          Grass
        </span>
      )
    case 'Poison':
      return (
        <span className="leading-relaxed bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          Poison
        </span>
      )
    case 'Flying':
      return (
        <span className="leading-relaxed bg-slate-400 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          Flying
        </span>
      )
    case 'Normal':
      return (
        <span className="leading-relaxed bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          Normal
        </span>
      )

    case 'Electric':
      return (
        <span className="leading-relaxed bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          Electric
        </span>
      )

    case 'Ground':
      return (
        <span className="leading-relaxed bg-orange-400 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          Ground
        </span>
      )

    case 'Psychic':
      return (
        <span className="leading-relaxed bg-lime-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          Psychic
        </span>
      )
    case 'Fighting':
      return (
        <span className="leading-relaxed bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          Fighting
        </span>
      )

    case 'Ghost':
      return (
        <span className="leading-relaxed bg-zinc-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          Ghost
        </span>
      )
    case 'Fairy':
      return (
        <span className="leading-relaxed bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
          Fairy
        </span>
      )

    default:
      break
  }
  return null
}
