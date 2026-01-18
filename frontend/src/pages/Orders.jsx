import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
    const {products, currency} = useContext(ShopContext)
    return (
        <div className='pt-16 border-t border-gray-300'>
            <div className='text-2xl'>
                <Title text1={'MY'} text2={'ORDERS'}></Title>

            </div>
            <div>
                {
                    products.slice(0,4).map((item,index)=>(
                      <div key={index} className='flex flex-col md:flex-row md:justify-between gap-4 md:items-center py-4 border-y border-gray-300 text-gray-700 '>
                        <div className='flex items-start gap-6 text-sm'>
                            <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                            <div>
                                <p className='sm:text-base font-medium'>{item.name}</p>
                                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                    <p>{currency}{item.price}</p>
                                    <p>Quantity: 1</p>
                                    <p>Size: M</p>
                                </div>
                                <p className='mt-2'>Date: <span className='text-gray-500'>18 Jan, 2026</span></p>
                            </div>
                        </div>
                        <div className='flex justify-between md:w-1/2'>
                            <div className='flex items-center gap-2'>
                                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                <p className='text sm md:text-base'>Ready to ship</p>
                            </div>
                            <button className='border border-gray-300 rounded-sm text-base font-medium px-4 py-2'>Track Order</button>
                        </div>
                      </div>  
                    ))
                }
            </div>
           
        </div>
    );
};

export default Orders;