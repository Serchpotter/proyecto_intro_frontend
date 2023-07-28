/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import SeriesCards from '../components/SeriesCards'
import SearchBar from '../components/Searchbar'
import '../App.css'

const Home = () => {
  const [series, setSeries] = useState([])
  const [search, setSearch] = useState('')

  /* const sendSearch = (search) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then(res => res.json())
      .then(results => {
        const { data } = results
        setSeries(data)
      }).catch(err => console.log(err))
  } */

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows?page=0')
      .then(res => res.json())
      .then(data => setSeries(data))
      .catch(err => console.log(err))
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredSeries = series.filter(serie => {
    return serie.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
    <>
      <div className='container'>
        <div className='card text-center'>
          <div className='card-body'>
            <SearchBar
              handleSearch={handleSearch}
              valueSearch={search}
            />
          </div>
        </div>
        <div className='row'>
          {
            filteredSeries.map(serie => (
              <SeriesCards
                key={serie.id}
                number={serie.id}
                image={serie.image.original}
                name={serie.name}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home
