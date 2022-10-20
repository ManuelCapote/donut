import { useContext } from 'react'
import CartContext from '../context/CartContext'
import './Cart.css'
import ResultsList from './ResultsList'

const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log('cart', cart)
  return (
    <div className='Cart'>
      <ResultsList donuts={cart} />
    </div>
  )
}

export default Cart
