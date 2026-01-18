import React, { useState } from 'react';

const Login = () => {
    const [currentState, setCurrentState] = useState('Sign Up')
    const onSubmitHandler = async (e)=>{
        e.preventDefault()
    }
    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4 items-center w-[90%] sm:max-w-96 m-auto mt-14 text-gray-800'>
           <div className='inline-flex items-center gap-2 mb-2 mt-10  '>
                <p className='prata-regular text-3xl '>{currentState}</p>
                {/* <p className=' h-1.5 w-8 text-gray-800'></p> */}
                <hr className='h-0.5 w-8 text-gray-800 '/>
           </div>
        {currentState === 'Login' ? "" : <input className='w-full px-3 py-2 border border-gray-800 ' type="text" placeholder='Name' required/>}   
           <input className='w-full px-3 py-2 border border-gray-800 ' type="email" placeholder='Email' required/>
           <input className='w-full px-3 py-2 border border-gray-800 ' type="password" placeholder='Password' required/>

           <div className='w-full flex justify-between text-sm mt-[-8px] '> 
                <p className='cursor-pointer'>Forgot your password?</p>
                {
                    currentState === "Login" ?
                     <p onClick={()=>setCurrentState("Sign Up")} className='cursor-pointer'>Create account</p> :
                     <p onClick={()=>setCurrentState("Login")} className='cursor-pointer'>Login Here</p>
                }

           </div>
           <button className='bg-black text-white px-8 mt-4 py-2 font-light cursor-pointer'>{currentState === "Login" ? 'Sign In': 'Sign Up'}</button>
        </form>
    )
};

export default Login;