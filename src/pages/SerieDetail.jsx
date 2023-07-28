import { useState, useEffect } from 'react'
import EpisodeDetail from './EpisodeDetail'

import { useParams } from 'react-router-dom'

const SerieDetail = () => {
  const { show } = useParams()
  console.log('id: ', show)
  const [serie, setSerie] = useState(null)
  const [seasons, setSeason] = useState(null)
  const [cast, setCast] = useState(null)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${show}`)
      .then(res => res.json())
      .then(data => setSerie(data))
      .catch(err => console.log(err))
  }, [show])

  console.log('id: ', show)
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${show}/seasons`)
      .then(res => res.json())
      .then(data => setSeason(data))
      .catch(err => console.log(err))
  }, [show])

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${show}/cast`)
      .then(res => res.json())
      .then(data => setCast(data))
      .catch(err => console.log(err))
  }, [show])
  console.log('cast', cast)

  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{serie?.name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-2'>
              <img src={serie?.image.original} alt={serie?.name} className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={serie?.name}>
                    <td><b>Language</b></td>
                    <td>{serie?.language}</td>
                  </tr>
                  <tr key={serie?.name}>
                    <td><b>Genres</b></td>
                    <td>{serie?.genres}</td>
                  </tr>
                  <tr key={serie?.name}>
                    <td><b>Premiered</b></td>
                    <td>{serie?.premiered}</td>
                  </tr>
                  <tr key={serie?.name}>
                    <td><b>Summary</b></td>
                    <td>{serie?.summary}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='accordion' id='accordionSeasons'>
          <h1 className='trending-title'>Episodes</h1>
          {seasons?.map(season => (
            <EpisodeDetail
              key={season.id}
              id={season.id}
              number={season.number}
            />
          ))}
        </div>
        <section className='horizontal-movieContainer'>
          <div className='trending-container'>
            <h1 className='trending-title'>Cast</h1>
            <ul className='trendingPreview-movieList'>
              {cast?.map(member => (
                <li className='movie-container' key={member.id}>
                  <div className='character-container' key={member.id}>
                    <img src={member.person.image.original} alt={member.character.name} className='movie-img' />
                    <p className='character-name'>'{member.character.name}'</p>
                    <p className='character-name'>{member.person.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
export default SerieDetail
