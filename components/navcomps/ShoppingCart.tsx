"use client"

import { RootState } from '@/store/store';
import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const items = useSelector((state:RootState) => state.cart.items);
  const totalQantity = items.reduce((total, item) => total + item.quantity, 0)
  return (
    <div className='relative'>
      <span className='text-white bg-red-500 absolute rounded-full w-5 h-5 -top-2 -right-2 flex items-center justify-center'>
        {totalQantity}
      </span>
      <ShoppingBagIcon className='text-white' size={26} cursor={"pointer"}/>
    </div>
  )
}

export default ShoppingCart
