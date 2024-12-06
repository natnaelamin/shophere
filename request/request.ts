
 export async function getAllCatagory(){
    const catagoryRes= await fetch(
        "https://fakestoreapi.com/products/categories"
    );
    return catagoryRes.json()
}  


 