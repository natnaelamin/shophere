"use client"

import { getAllProduct } from "@/request/request"
import { Loader} from "lucide-react";
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

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

const AllProduct = () => {
    const [products, setProducts] = useState<productProps[] | null>(null)
    const [loading, setLoading] = useState(true)

    
    useEffect(() =>{
        const getData = async () =>{
        setLoading(true);
        try{
            const products: productProps[] = await getAllProduct()
            setProducts(products);
            console.log(products);
        } catch(error){
            console.log(error);
        } finally{
            setLoading(false);
        };
    }; getData();
    }, []);

    return (
        <div className="py-14">
            <h1 className="text-center font-bold text-2xl text-white">All Products</h1>
            {loading? (
                <div className="flex items-center justify-center mt-14">
                    <Loader size={32} className="animation-spin"/>
                </div>
            ):
            (
                <div className="w-4/5 mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {products?.map((product) =>(
                        <ProductCard product={product}/>
                    ))}
                </div>
            )
            }
        </div>
    )
}

export default AllProduct
