"use client"
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast';
import { addItem} from '@/store/cartSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

interface productProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:{
      count: number;
      rate: number;
  }
}

const AddToCart = ({product}:{product:productProps}) => {
  const dispatch = useDispatch();
  const {toast} = useToast()

    const addToCartHandler =() => {
      toast({
        description: "Item added to the cart.",
        variant: "success",
      })
      dispatch(addItem(product));
    }

  return (
    <Button onClick={()=>addToCartHandler()} 
    className='text-base mt-6 rounded-xl overflow-hidden 
    bg-gradient-to-r from-violet-900 hover:from-violet-500 to-pink-700 hover:to-pink-500 '>
      Add to cart
    </Button>
  )
}

export default AddToCart
