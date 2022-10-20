import { ReactNode, useState } from 'react'
import Donut from '../models/Donut'
import CartContext from './CartContext'

interface Props {
  children: ReactNode
}

const CartContextProvider = ({ children }: Props) => {
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
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, inTheCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
