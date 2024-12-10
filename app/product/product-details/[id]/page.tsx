import { getProductByCategory, getSingleProduct } from '@/request/request';
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
      </div>
    </div>
  )
}

export default ProductDetails
