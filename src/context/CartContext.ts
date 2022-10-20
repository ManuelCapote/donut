import { createContext } from 'react'
import Donut from '../models/Donut'

interface CartContextModel {
  cart: Donut[]
  addToCart: (donut: Donut) => void
  removeFromCart: (id: string) => void
  inTheCart: (id: string) => boolean
}

const defaultValues: CartContextModel = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  inTheCart: () => false,
}

const CartContext = createContext(defaultValues)

export default CartContext
