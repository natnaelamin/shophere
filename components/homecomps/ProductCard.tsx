import Image from 'next/image';
import React from 'react'

interface productProps {
    id: number;
    title: string;
    price: number;
    description: string;
    catagory: string;
    image: string;
    rating:{
        count: number;
        rate: number;
    }
}

const ProductCard = ({ product }: { product: productProps }) => {
  return (
    <div className='p-5'>
        <div className='w-[200px] h-[150px]'>
        <Image 
        src={product.image}
        alt={product.title}
        height={100}
        width={200} className='h-4/5 w-4/5 object-contain'/>
        </div>
    </div>
  )
}

export default ProductCard
