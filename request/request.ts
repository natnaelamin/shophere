
 export async function getAllCatagory(){
    const catagoryRes= await fetch(
        "https://fakestoreapi.com/products/categories"
    );
    return catagoryRes.json();
}

export async function getAllProduct(){
    const productRes = await fetch(
        "https://fakestoreapi.com/products"
    );
    return productRes.json();
}

export async function getSingleProduct(id:string){
    const singleProduct = await fetch(
        `https://fakestoreapi.com/products/${id}`
    );
    return singleProduct.json();
}

export async function getProductByCategory(category: string){
    const productByCategoryRes = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
    )
    return productByCategoryRes.json();
}

 