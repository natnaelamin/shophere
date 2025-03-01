"use client"
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import {Dialog, DialogContent, DialogHeader, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '@/store/searchSlice'
  

const SearchBox = () => {
const [searchTerm, setSearchTerm] = useState("");
const dispatch = useDispatch();

const handleSearch= (e: React.FormEvent)=>{
  e.preventDefault();
  dispatch(setSearchQuery(searchTerm))
  setSearchTerm("");
};

  return (
    <div> 
        <Dialog >
            <DialogTrigger className='flex items-center '><Search className='text-white'/></DialogTrigger>
            <DialogContent className=' bg-slate-400 border-none'>
                <DialogHeader className='px-5' >
                <form onSubmit={handleSearch}>
                    <input type="text" value={searchTerm} placeholder='search for product...'
                    onChange={(e)=>setSearchTerm(e.target.value)} 
                    className='text-black w-full h-8 outline-none mt-4 px-2'/>
                    <DialogClose>
                      <button type="submit" className="mt-2 w-full bg-blue-600 text-white py-1 rounded">
                          Search
                      </button>
                    </DialogClose>
                </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default SearchBox
