import { useState, useEffect } from 'react'
import PokemonList from '../../components/PokemonList/PokemonList'
import {
  fetchFilteredPokemon,
  fetchPokemon,
  fetchSearchPokemon,
  fetchSortedPokemon,
  fetchTypes,
} from '../../services/pokemon'
import './Compendium.css'
import Controls from '../../components/Controls/Controls'
import pokeball from '../../assets/pokeball.png'

export default function Compendium() {
  const [loading, setLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])
  const [searchName, setSearchName] = useState('')
  const [types, setTypes] = useState([])
  const [selectedType, setSelectedType] = useState('all')
  const [sort, setSort] = useState('')

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonList = await fetchPokemon()
      setPokemons(pokemonList)
      setLoading(false)
    }
    getPokemon()
  }, [])

  useEffect(() => {
    async function getTypes() {
      const pokemonTypes = await fetchTypes()
      setTypes(pokemonTypes)
    }

    getTypes()
  }, [])

  useEffect(() => {
    async function getFilteredPokemon() {
      if (!selectedType) return
      setLoading(true)

      if (selectedType !== 'all') {
        const filteredPokemon = await fetchFilteredPokemon(selectedType)
        setPokemons(filteredPokemon)
      } else {
        const pokemonList = await fetchPokemon()
        setPokemons(pokemonList)
      }
      setLoading(false)
      setSort('')
    }

    getFilteredPokemon()
  }, [selectedType])

  useEffect(() => {
    if (!selectedType || selectedType === 'all') return
    async function getSortedPokemon() {
      if (sort) {
        const sortedPokemon = await fetchSortedPokemon({ sort, type: selectedType })
        setPokemons(sortedPokemon)
      } else {
        const filteredPokemon = await fetchFilteredPokemon(selectedType)
        setPokemons(filteredPokemon)
      }
    }

    getSortedPokemon()
  }, [selectedType, sort])

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    fetchSearchPokemon(searchName)
      .then((searchedPokemons) => {
        setPokemons(searchedPokemons)
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false)
        setSearchName('')
        setSelectedType('')
      })
  }

  return (
    <>
      <div className="title">
        <img src={pokeball} alt="pokeball" />
        <h1 className="titleText">Alchemy Compendium</h1>
      </div>
      <Controls
        name={searchName}
        handleSubmit={handleSubmit}
        handleNameChange={setSearchName}
        types={types}
        filterChange={setSelectedType}
        selectedType={selectedType}
        sortChange={setSort}
      />
      {loading ? <h1>Loading...</h1> : <PokemonList pokemons={pokemons} />}
    </>
  )
}
