import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'

const ShoppingCart = () => {
  return (
    <div className='relative'>
      <span className='text-white bg-red-500 absolute rounded-full w-5 h-5 -top-2 -right-2 flex items-center justify-center'>6</span>
      <ShoppingBagIcon className='text-white' size={26} cursor={"pointer"}/>
    </div>
  )
}

export default ShoppingCart
