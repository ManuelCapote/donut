import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AddToCartContext from '../context/CartContext'
import Donut from '../models/Donut'
import './DonutDetailed.css'

interface Props {
  donut: Donut
}

const DonutDetailed = ({ donut }: Props) => {
  const { addToCart, removeFromCart, inTheCart } = useContext(AddToCartContext)

  return (
    <div className='DonutDetailed'>
      <h3>{donut.name}</h3>
      <img src={donut.photo} alt={donut.name} />
      <p>Calories: {donut.calories}</p>
      <p>{donut.extras}</p>
      {inTheCart(donut.id) ? (
        <button onClick={() => removeFromCart(donut.id)}>Remove</button>
      ) : (
        <button onClick={() => addToCart(donut)}>Add to Cart</button>
      )}
    </div>
  )
}

export default DonutDetailed
