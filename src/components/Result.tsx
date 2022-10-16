import { useContext } from 'react'
import AddToCartContext from '../context/AddToCartContext'
import Donut from '../models/Donut'
import './Result.css'

interface Props {
  donut: Donut
}

const Result = ({ donut }: Props) => {
  const { addToCart, removeFromCart, inTheCart } = useContext(AddToCartContext)

  return (
    <li>
      <h1>{donut.name}</h1>
      <img src={donut.photo} alt={donut.name} />
      <p>{donut.calories}</p>
      <p>{donut.extras}</p>
      {inTheCart(donut.id) ? (
        <button onClick={() => removeFromCart(donut.id)}>Remove</button>
      ) : (
        <button onClick={() => addToCart(donut)}>Add to Cart</button>
      )}
    </li>
  )
}

export default Result
