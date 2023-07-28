import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between px-4'>
      <NavLink className='navbar-brand' to='#'>Best Series</NavLink>

      <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/'>Home</NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/About'>Acerca de Best Series</NavLink>
        </li>
      </ul>

    </nav>
  )
}
export default Navbar
