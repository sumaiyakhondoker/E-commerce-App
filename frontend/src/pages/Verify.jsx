import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Verify = () => {
    const {token, setCartItems, backendUrl} = useContext(ShopContext)
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")

    const verifyPayment = async()=>{
            try {
                if(!token){
                    return null;
                }
                const response = await axios.post(backendUrl + '/api/order/verifyStripe', {orderId,success}, {headers: {token}})

                if(response.data.success){
                    setCartItems({})
                    // toast.success('')
                    navigate('/orders')
                }else{
                    navigate('/cart')
                }
            } catch (error) {
                console.log(error);
                // toast.error(error.message)
            }
    }


    useEffect(()=>{
        verifyPayment()
    }, [token])

    return (
        <div>
            verify
        </div>
    );
};

export default Verify;