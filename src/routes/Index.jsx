import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import SerieDetail from '../pages/SerieDetail'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/serie/:show' element={<SerieDetail />} />
    </Routes>
  )
}
export default RoutesIndex
