"use client";
import { useEffect, useState } from "react";
import { getAllCatagory } from "@/request/request";

interface CategoryProps {
    HandleCategory: (category: string) => void;
}

const Catagory = ({ HandleCategory }: CategoryProps) => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllCatagory();
                setCategories(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div className="py-16 mt-24">
            <h1 className="text-center font-bold text-white text-3xl">Shop by Category</h1>
            <div className="w-4/5 mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 mt-10">
                <button
                      onClick={() => HandleCategory("")}
                      className="text-center px-5 py-2 rounded-xl cursor-pointer 
                        hover:scale-110 transition-all bg-gradient-to-r from-violet-900 hover:from-violet-500
                        to-pink-700 hover:to-pink-500 "
                  >
                      <h1 className="text-white text-lg">Products</h1>
                  </button>
                {categories.map((category) => (
                    <button
                        onClick={() => HandleCategory(category)}
                        key={category}
                        className="text-center px-5 py-2 rounded-xl cursor-pointer 
                         hover:scale-110 transition-all bg-gradient-to-r from-violet-900 hover:from-violet-500
                          to-pink-700 hover:to-pink-500"
                    >
                        <h1 className="text-white text-lg">{category}</h1>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Catagory;
