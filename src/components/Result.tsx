import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AddToCartContext from '../context/CartContext'
import Donut from '../models/Donut'
import './Result.css'

interface Props {
  donut: Donut
}

const Result = ({ donut }: Props) => {
  const { addToCart, removeFromCart, inTheCart } = useContext(AddToCartContext)

  return (
    <li className='Result'>
      <Link className='link' to={`/details/${encodeURIComponent(donut.id)}`}>
        <h3>{donut.name}</h3>
      </Link>
      <img src={donut.photo} alt={donut.name} />
      {inTheCart(donut.id) ? (
        <button onClick={() => removeFromCart(donut.id)}>Remove</button>
      ) : (
        <button onClick={() => addToCart(donut)}>Add to Cart</button>
      )}
    </li>
  )
}

export default Result
