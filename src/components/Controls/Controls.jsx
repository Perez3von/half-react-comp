import React from 'react'
import FilterForm from '../Forms/FilterForm'
import SearchForm from '../Forms/SearchForm/SearchForm'
import SortForm from '../Forms/SortForm'
import './Controls.css'

export default function Controls({
  name,
  handleSubmit,
  handleNameChange,
  types,
  filterChange,
  selectedType,
  sortChange,
}) {
  const hasType = selectedType && selectedType !== 'all'
  return (
    <div className="controlsContainer">
      <SearchForm name={name} handleSubmit={handleSubmit} handleNameChange={handleNameChange} />
      <FilterForm types={types} filterChange={filterChange} selectedType={selectedType} />
      {hasType && <SortForm sortChange={sortChange} />}
    </div>
  )
}
