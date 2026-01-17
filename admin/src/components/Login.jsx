import { useContext, useState } from "react";
import { backendUrl } from "../root/Root";
import axios from 'axios'
import toast from "react-hot-toast";
import { AdminContext } from "../context/AdminContext";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setToken} = useContext(AdminContext)

    const onSubmitHandler = async(e)=>{
        try {
            e.preventDefault()
            const response = await axios.post(backendUrl + '/api/user/admin', {email,password})
            if(response.data.success){
                setToken(response.data.token)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
             toast.error(error.message)
            
        }
    }
    return (
        <div className='min-h-screen w-full flex justify-center items-center'>
            <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>

                <div className='mb-3 min-w-72'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className='rounded-md border border-gray-300 outline-none w-full px-3 py-2' type="email" placeholder='your@email.com' required/>
                </div>
                <div className='mb-3 min-w-72'>
                    <label  className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} className='rounded-md border border-gray-300 outline-none w-full px-3 py-2' type="password" placeholder='Enter your password' required />
                </div>

                <button className='bg-black text-white w-full px-4 py-2 rounded-md mt-2'  type='submit'>Login</button>
                </form>
                
            </div>
        </div>
    );
};

export default Login;