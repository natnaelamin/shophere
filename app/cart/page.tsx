"use client"

import PaypalButton from "@/components/homecomps/PaypalButton";
import { Button } from "@/components/ui/button";
import { addItem, CartItem, clearCart, removeItem } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
const router = useRouter()
const items = useSelector((state:RootState) => state.cart.items);
const totalQantity = items.reduce((total, item) => total + item.quantity, 0)

const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)
.toFixed(2);

const vat = (+totalPrice * 0.15).toFixed(2);
const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);

const {user} = useUser();
const dispatch = useDispatch();

const AddItemHandler = (item: CartItem) =>{
  dispatch(addItem(item))
}

const RemoveItemHandler = (id: number)=>{
  dispatch(removeItem({id}))
}

const handleSuccess = (details: any ) =>{
  router.push("/success")
  dispatch(clearCart())
}

  return (
    <div className=" min-h-[60vh] bg-slate-900 pt-20">
     {items.length == 0 && (
        <div className="flex flex-col items-center justify-center w-full h-[80vh] ">
            <Image 
            src="/images/emptycart.png"
            alt="empty cart"
            width={400}
            height={400} 
            className="object-cover mx-auto text-white rounded"/>

            <Link href="/">
                <Button className="mt-8 text-lg bg-gradient-to-r from-violet-900 hover:from-violet-500 to-pink-700 hover:to-pink-500 px-8 rounded-xl">
                    Shop now
                </Button> 
            </Link>
        </div>
     )} 
     {items.length > 0  && (
      <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12 bg-slate-900">
        <div className="shadow-md xl:col-span-4">
          <h1 className="p-4 text-xl sm:text-2xl rounded-t-xl md:text-3xl font-bold text-white bg-blue-700 mb-5">
          Your cart ({totalQantity} Items)</h1>
          {items.map((item) =>(
            <div key={item.id}>
              <div className="flex pb-6 mt-2 p-5 border-b border-opacity-25 border-gray-700 items-center space-x-10">
                <div>
                  <Image 
                  src={item.image}
                  alt={item.title}
                  height={180}
                  width={180}
                  />
                </div>
                <div>
                  <h1 className="text-base md:text-xl font-bold text-white">
                    {item.title}
                  </h1>
                  <h1 className="text-sm md:text-lg font-medium text-slate-400">
                    Category : {item.category}
                  </h1>
                  <h1 className="text-lg md:text-2xl font-bold text-white">
                    ${item.price}
                  </h1>
                  <h1 className="text-sm md:text-lg font-medium text-slate-400">
                    Quantity : {item.quantity}
                  </h1>
                  <div className="flex items-center space-x-2 mt-4">
                    <button onClick={()=>AddItemHandler(item)} className="bg-blue-700 text-white px-2 rounded">Add More</button>
                    <button onClick={()=>RemoveItemHandler(item.id)} className="text-white bg-red-600 px-2 rounded">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="xl:col-span-2">
          <div className="bg-indigo-800 sticky top-[25vh] p-6 rounded-xl">
            <h1 className="text-center text-white my-8 text-3xl font-semibold">Summary</h1>
            <div className="w-full bg-white bg-opacity-20 h-1"></div>
            <div className="flex text-xl mt-4 uppercase font-medium text-white items-center justify-between">
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex text-xl mt-10 mb-10 uppercase font-medium text-white items-center justify-between">
              <span>VAT</span>
              <span>${vat}</span>
            </div>
            <div className="flex text-xl mb-6 uppercase font-medium text-white items-center justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="w-full bg-white bg-opacity-20 h-1"></div>
            <div className="flex text-xl my-6 uppercase font-medium text-white items-center justify-between">
              <span>Total</span>
              <span>${totalPriceWithVat}</span>
            </div>
            {!user && (
              <Link href="/sign-in">
                <Button className="bg-orange-500 text-lg rounded w-full">Sign In to Checkout</Button>
              </Link>
            )}
            {user && (
              <PaypalButton amount={totalPriceWithVat} onSuccess={handleSuccess}/>
            )}
          </div>
        </div>
      </div>
     )}
    </div>
  )
}

export default CartPage
