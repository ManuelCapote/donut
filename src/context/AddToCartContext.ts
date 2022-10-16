import { createContext } from 'react'
import Donut from '../models/Donut'

interface AddToCartContextModel {
  cart: Donut[]
  addToCart: (donut: Donut) => void
  removeFromCart: (id: string) => void
  inTheCart: (id: string) => boolean
}

const defaultValues: AddToCartContextModel = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  inTheCart: () => false,
}

const AddToCartContext = createContext(defaultValues)

export default AddToCartContext
