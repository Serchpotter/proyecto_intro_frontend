/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

const EpisodeDetail = ({ key, id, number }) => {
  const [episodes, setEpisode] = useState(null)
  const collapseT = '#collapse' + id
  const collapse = 'collapse' + id
  const heading = 'heading' + id

  useEffect(() => {
    fetch(`https://api.tvmaze.com/seasons/${id}/episodes`)
      .then(res => res.json())
      .then(data => {
        setEpisode(data)
      }).catch(err => console.log(err))
  }, [id])

  return (
    <div className='card' key={key}>
      <div className='card-header' id={heading}>
        <h5 className='mb-0'>
          <button type='button' className='btn btn-link' data-bs-toggle='collapse' data-bs-target={collapseT} aria-expanded='false' aria-controls={collapse}>
            Season {number}
          </button>
        </h5>
      </div>
      <div id={collapse} className='collapse hide' aria-labelledby={heading} data-bs-parent='accordionSeasons'>
        {episodes?.map(episode => (
          <div className='card-body' key={episode.id}>
            <p><b>E{episode.number}</b> {episode.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EpisodeDetail
