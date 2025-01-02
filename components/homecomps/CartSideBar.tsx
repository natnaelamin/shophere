
import { addItem, CartItem, removeItem } from '@/store/cartSlice'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { SheetClose } from '../ui/sheet'
import { useDispatch } from 'react-redux'


interface Cart {
    items: CartItem[]
}

const CartSideBar = ({items}:Cart) => {

    const dispatch = useDispatch();

    const addToCartHandler =(item: CartItem) => dispatch(addItem(item));
    const removeFromCartHandler =(id: number) => dispatch(removeItem({id}));
  return (
    <div className='my-5 h-full'>
        <h1 className='text-center text-xl font-bold mb-5'>Your Cart</h1>
        {items.length == 0 ? (
            <div className='flex flex-col items-center justify-center w-full h-[80vh]'>
                <Image className='object-cover mx-auto'
                src="/images/emptycart.png"
                alt='empty cart'
                height={200}
                width={200}
                />
            </div>
        ):
        (
            <div>
                {items?.map((item)=>{
                    return (
                        <div key={item.id}
                        className='pb-4 border-b-2 border-gray-300 border-opacity-60 p-4'>
                            <div>
                                <Image 
                                src={item.image}
                                alt={item.title}
                                width={60}
                                height={60}
                                className='object-cover mb-4'/>
                            </div>
                            <div>
                                <h1 className='text-sm w-4/5 font-semibold truncate'>
                                    {item?.title}
                                </h1>
                                <h1 className='text-base text-blue-950 font-bold'>
                                    ${(item?.price * item?.quantity).toFixed(2)}
                                </h1>
                                <h1 className='text-base font-bold mb-2'>
                                    Quantity : {item?.quantity}
                                </h1>
                                <div className='flex items-center space-x-4'>
                                    <Button onClick={()=>{removeFromCartHandler(item.id)}}
                                    size={"sm"} variant={'destructive'}>Remove</Button>
                                    <Button onClick={() => {addToCartHandler(item)}}
                                     size={"sm"}>Add</Button>
                                </div>
                            </div> 
                        </div>
                    )
                })}

                <Link href="/cart">
                    <SheetClose>
                        <Button className='w-full mb-6 mt-6'>
                            View all cart
                        </Button>
                    </SheetClose>
                </Link>
            </div>
        )}
    </div>
  )
}

export default CartSideBar
