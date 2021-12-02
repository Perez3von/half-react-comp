import React from 'react'

export default function SortForm({ sortChange }) {
  return (
    <div>
      <h3>Sort Pokemon!</h3>
      <input
        id="asc"
        type="radio"
        name="sort"
        value="asc"
        onChange={(event) => sortChange(event.target.value)}
      />
      <label htmlFor="asc">Ascending</label>
      <input
        id="desc"
        type="radio"
        name="sort"
        value="desc"
        onChange={(event) => sortChange(event.target.value)}
      />
      <label htmlFor="desc">Descending</label>
      <input
        id="reset"
        type="radio"
        name="sort"
        value=""
        onChange={(event) => sortChange(event.target.value)}
      />
      <label htmlFor="reset">Reset Sort</label>
    </div>
  )
}
