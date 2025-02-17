"use client"

import { getAllProduct, getProductByCategory } from "@/request/request"
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

const AllProduct = ({productCategory}: { productCategory: string | undefined }) => {
    const [products, setProducts] = useState<productProps[] | null>(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() =>{
        const getData = async () =>{
        setLoading(true);
        try{
            let fetchedProducts: productProps[];
                if (productCategory) {
                    fetchedProducts = await getProductByCategory(productCategory);
                } else {
                    fetchedProducts = await getAllProduct();
                }
                setProducts(fetchedProducts);
        } catch(error){
            console.log(error);
        } finally{
            setLoading(false);
        };
    }; getData();
    }, [productCategory]);

    return (
        <div className="py-14">
            <h1 className="text-center font-bold text-2xl text-white">Our Products</h1>
            {loading? (
                <div className="flex items-center justify-center mt-14">
                    <Loader size={40} className="animation-spin text-white"/>
                </div>
            ):
            (
                <div className="w-4/5 mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {products?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )
            }
        </div>
    )
}

export default AllProduct
