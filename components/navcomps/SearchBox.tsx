import { Search } from 'lucide-react'
import React from 'react'
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
  } from "@/components/ui/dialog"
  

const SearchBox = () => {
  return (
    <div> 
        <Dialog >
            <DialogTrigger className='flex items-center '><Search className='text-white'/></DialogTrigger>
            <DialogContent className=' bg-slate-400 border-none'>
                <DialogHeader className='px-5' >
                <form action="">
                    <input type="text" placeholder='search for product...' className='text-black w-full h-8 outline-none mt-4 px-2'/>
                </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default SearchBox
