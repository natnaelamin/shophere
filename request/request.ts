
 export async function getAllCatagory(){
    const catagoryRes= await fetch(
        "https://fakestoreapi.com/products/categories"
    );
    return catagoryRes.json()
}

export async function getAllProduct(){
    const productRes = await fetch(
        "https://fakestoreapi.com/products"
    );
    return productRes.json()
}


 