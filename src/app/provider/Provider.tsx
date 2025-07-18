"use client"
import React, { ReactNode } from 'react'
import { CartProvider } from 'react-use-cart'

type Props ={
    children: ReactNode
}
const ProviderClient = ({children}: Props) => {
  return (
    <CartProvider>
        {children}
</CartProvider>
   
  )
}

export default ProviderClient