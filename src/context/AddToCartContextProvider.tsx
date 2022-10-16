import { ReactNode, useState } from 'react'
import Donut from '../models/Donut'
import AddToCartContext from './AddToCartContext'

interface Props {
  children: ReactNode
}

const AddToCartContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<Donut[]>([])
  const addToCart = (donut: Donut): void => {
    setCart((prev) => [...prev, donut])
  }
  const removeFromCart = (id: string): void => {
    setCart((prev) => {
      const index: number = prev.findIndex((item) => item.id === id)
      return [...prev.slice(0, index), ...prev.slice(index + 1)]
    })
  }
  const inTheCart = (id: string): boolean =>
    cart.some((donut) => donut.id === id)

  return (
    <AddToCartContext.Provider
      value={{ cart, addToCart, removeFromCart, inTheCart }}
    >
      {children}
    </AddToCartContext.Provider>
  )
}

export default AddToCartContext
