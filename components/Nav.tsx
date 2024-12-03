
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './navcomps/SearchBox'
import { HeartIcon } from 'lucide-react'

const Nav = () => {
  return (
    <div className='bg-black px-10 '>
      <div className='flex items-center justify-between py-1'>
        <Link href="/">
        <Image src="/images/mainlogo.jpg" className='rounded-full'
        alt='logo'
        height= {40}
        width={40}
       />
        </Link>
        <div className='flex items-center justify-between space-x-5'>
            <SearchBox />
            <HeartIcon  cursor={"pointer"} className='text-white'/>

        </div>
      </div>
    </div>
  )
}

export default Nav
