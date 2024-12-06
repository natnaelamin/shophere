
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './navcomps/SearchBox'
import { HeartIcon, UserIcon } from 'lucide-react'
import ShoppingCart from './navcomps/ShoppingCart'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'

const Nav = () => {
  return (
    <div className='bg-slate-900 px-5 py-2 border-b-2 border-gray-400'>
      <div className='flex items-center justify-between py-1'>
        <Link href="/">
        <Image src="/images/mainlogo.jpg" className='rounded-full mt-1'
        alt='logo'
        height= {40}
        width={40}
       />
        </Link>
        <div className='flex items-center justify-between space-x-5 pt-1'>
            <SearchBox />
            <HeartIcon  cursor={"pointer"} className='text-white'/>
            <ShoppingCart />
            <SignedIn>
              <UserButton/>
            </SignedIn>
            <SignedOut>
              <SignInButton>
              <UserIcon  cursor={"pointer"} size={26} className='text-white'/>
              </SignInButton>
            </SignedOut>
        </div>
      </div>
    </div>
  )
}

export default Nav
