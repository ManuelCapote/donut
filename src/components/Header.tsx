import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='Header'>
      <Link to='/'>
        <h3>Home Page</h3>
      </Link>
      <Link to='/Cart'>
        <h3>Cart</h3>
      </Link>
    </header>
  )
}

export default Header
