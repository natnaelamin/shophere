import { Heart, icons, ShoppingBag, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';

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

const ProductCard = ({ product }: { product: productProps }) => {
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);
  
  return (
    <div className='p-5'>
        <div className='w-[200px] h-[150px]'>
          <Image 
          src={product.image}
          alt={product.title}
          height={100}
          width={200} className='h-4/5 w-4/5 object-contain'/>
        </div>
        <p className='text-slate-400 mt-2 text-sm'>{product.category}</p>
        <Link href={`/product/product-details/${product.id}`}>
          <h1 className='text-base cursor-pointer hover:text-blue-300 transition-all hover:underline sm:w-full
          sm:truncate mt-2 font-semibold text-white'>{product.title}</h1>
        </Link>
        <div className='flex items-center'>
          {ratingArray.map((star) => (
          <StarIcon
          key={Math.random() * 1000}
          size={16}
          fill='yellow'
          className='text-yellow-500'/>
          )
          )}
        </div>
        <div className='flex items-center mt-2 space-x-2'>
          <p className='text-white text-base line-through font-semibold opacity-50'>
          {`$${(product.price + 10).toFixed(2)}`}
          </p>
          <p className='text-white text-lg font-bold opacity-80'>${product.price}</p>
        </div>
        <div className='flex items-center space-x-2 mt-2'>
          <Button size={"icon"} className='border rounded'>
            <ShoppingBag size={18}/>
          </Button>
          <Button size={"icon"} className='bg-red-500 rounded overflow-hidden'>
            <Heart size={18}/>
          </Button>
        </div>
    </div>
  )
}

export default ProductCard
