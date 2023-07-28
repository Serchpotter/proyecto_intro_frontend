/* eslint-disable react/prop-types */
import { useState } from 'react'

const SearchBar = ({ handleSearch, valueSearch }) => {
  // const [search, setSearch] = useState('')
  return (
    <form className='form-inline'>
      <div className='form-row d-flex align-items-center justify-content-center'>
        <div className='col-sm-3 my-1'>
          <input
            className='form-control'
            type='text'
            placeholder='Buscar serie'
            onChange={handleSearch}
            value={valueSearch}
          />
        </div>
      </div>
    </form>
  )
}
export default SearchBar
