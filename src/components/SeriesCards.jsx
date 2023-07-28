/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
const SeriesCards = ({ id, number, image, name }) => {
  return (
    <div className='col-lg-3 col-md-6 col-sm-12 mb-4' key={id}>
      <div className='card'>
        <div className='card-body'>
          <img
            className='card-img-top'
            src={image}
            alt={name}
          />
          <Link
            className='card-title'
            to={`/serie/${number}`}
          >
            {name}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SeriesCards
