import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-slate-900'>
      <div className='w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mx-auto pb-8 border-b border-slate-300'>
        <div>
            <h1 className='text-white mb-4 font-semibold text-xl'>
                Shophere
            </h1>
            <p className='text-sm text-slate-400'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Eum explicabo dolores minima, tempore dolor eaque voluptatem nostrum
                  sed molestiae veritatis atque, amet cumque magnam vel soluta quos, eos aspernatur incidunt.
            </p>
            <p className='text-base mt-6 text-slate-400'>
                +251912345678
            </p>
        </div>

        <div className='lg:mx-auto'>
            <h1 className='footer_title'>Information</h1>
            <p className='footer_link'>About us</p>
            <p className='footer_link'>Privacy policy</p>
            <p className='footer_link'>Return policy</p>
            <p className='footer_link'>Dropshipping</p>
            <p className='footer_link'>Shipping policy</p>
        </div>
        <div className='lg:mx-auto'>
            <h1 className='footer_title'>Account</h1>
            <p className='footer_link'>Dashboard</p>
            <p className='footer_link'>My orders</p>
            <p className='footer_link'>Account details</p>
            <p className='footer_link'>Track orders</p>
        </div>
        <div className='lg:mx-auto'>
            <h1 className='footer_title'>Shop</h1>
            <p className='footer_link'>Affiliate</p>
            <p className='footer_link'>Best sellers</p>
            <p className='footer_link'>Latest products</p>
            <p className='footer_link'>Sale products</p>
        </div>
      </div>

      <div className='grid gird-cols-1 sm:grid-cols-2 justify-between w-4/5 mx-auto mt-8 gap-5'>
        <p className='text-sm text-white'>@copyright shopehere 2024</p>
        <Image 
        src="/images/payment.jpg"
        alt='payment'
        width={150}
        height={100}
        className='object-contain sm:ml-auto'
        />
      </div>
    </div>
  )
}

export default Footer
