import { getProductByCategory, getSingleProduct } from '@/request/request';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

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

const ProductDetails = async ({params}:{params: {id: string}}) => {

    const id = params.id;
    const singleProduct: productProps = await getSingleProduct(id);
    const relatedProducts: productProps[] = await getProductByCategory(singleProduct.category);
    const num = Math.round(singleProduct.rating.rate);
    const ratingArray = new Array(num).fill(0);
  return (
    <div className='bg-slate-900 pt-20'>
      <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4'>
        <div className='col-span-3 mb-6 lg:mb-0'>
            <Image 
            src={singleProduct.image}
            alt={singleProduct.title}
            width={400} height={400}/>
        
        </div>
        <div className='col-span-4'>
            <h1 className='text-white font-bold text-2xl lg:text-3xl'>{singleProduct.title}</h1>
            <div className='flex items-center mt-2 space-x-2'>
                <div className='flex items-center'>
                    {ratingArray.map((star)=>(
                        <StarIcon key={Math.random()*500} 
                        size={20} fill='yellow' 
                        className='text-yellow-600'/> 
                    ))}
                </div>
                <p className='text-base font-semibold text-slate-500'>
                    ({singleProduct?.rating.count} Reviews)
                </p>
            </div>
            <h1 className='text-3xl lg:text-6xl md:text-4xl text-gray-500 font-bold'>
                ${singleProduct?.price.toFixed(2)}
            </h1>
            <p className='mt-4 text-base text-white'>{singleProduct?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
