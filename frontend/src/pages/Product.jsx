import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';



const Product = () => {
    const {productId} = useParams()
    const {products, currency} = useContext(ShopContext)
    const [productData, setProductData] = useState(null)
    const [image, setImage] = useState("")
    const [size, setSize] = useState("")



  

    useEffect(()=>{
        if(!products?.length) return 


     const selectedProduct = products.find(p=>p._id === productId)
     if(selectedProduct){
        console.log(selectedProduct);
        setProductData(selectedProduct);
        setImage(selectedProduct.image[0])
     }
        
       
    }, [productId, products])

 
    return productData ? (
        <div className='border-t-2 border-gray-200 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* product data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

                {/* product images */}
                <div className='flex flex-1 flex-col-reverse gap-3 sm:flex-row'>
                    
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.7%]'> 
                       {
                        productData.image.map((item, index)=>(
                            <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer' alt="" />
                        ))
                       }

                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt="" />
                    </div>

                </div>
                {/* product details */}
               <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <div className='flex items-center gap-1 mt-2'>
                    <img src={assets.star_icon} className='w-3.5' alt="" />
                    <img src={assets.star_icon} className='w-3.5' alt="" />
                    <img src={assets.star_icon} className='w-3.5' alt="" />
                    <img src={assets.star_icon} className='w-3.5' alt="" />
                    <img src={assets.star_dull_icon} className='w-3.5' alt="" />
                    <p className='pl-2'>(122)</p>
                </div>
                <p className='text-3xl font-medium mt-5'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                    <p>Select Size</p>
                    <div className='flex gap-2'>
                       {
                        productData.sizes.map((item, index)=>(
                            <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500 bg-orange-100" : ""}`} key={index}>{item}</button>
                        ))
                       }
                    </div>
                </div>

                <button className='bg-black px-8 py-3 text-white text-sm active:bg-gray-700'>ADD TO CART</button>
                <hr className='mt-8 sm:w-4/5 text-gray-300'/>
                <div className='text-sm text-gray-500 mt-5 space-y-1'>
                       <p>100% original product.</p>
                       <p>Cash on delivery available on this product.</p>
                       <p>Easy return and exchange policy within 7 days.</p>
                </div>
               </div>
            </div>

            {/* description and review section */}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='text-sm border px-5 py-3 border-gray-300'>Description</b>
                    <p className='text-sm border px-5 py-3 border-gray-300'>Reviews (122)</p>

                </div>

                <div className='flex flex-col gap-4 border p-6 text-sm text-gray-500 border-gray-300'>
                       <p>This product is designed to combine modern style with everyday comfort. Crafted from high-quality materials, it offers a soft feel, a flattering fit, and long-lasting durability. Whether you’re dressing for a casual day out or a special occasion, this piece adds effortless elegance to your wardrobe.</p>
                       <p>Thoughtfully made with attention to detail, it pairs easily with a variety of outfits and styles. Its versatile design makes it a reliable choice for regular wear, ensuring you look confident and comfortable throughout the day.</p>
                </div>

            </div>

            {/* -------display related products */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory}></RelatedProducts>
        </div>
    ): <div className='opacity-0'></div>
};

export default Product;

