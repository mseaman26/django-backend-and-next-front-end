import Head from 'next/head'
import { useState, useEffect } from 'react';

export default function Home() {

  const rootURL = process.env.NEXT_PUBLIC_API_URL

  const handleLoginSubmit = async (e) =>{
    e.preventDefault()
    try{
      const response = await fetch
    }catch(err){

    }
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    console.log('signup')
  }



  
  return (
    <>
      <div className='bg-gray-500 h-screen'>
        <h1>Login</h1>
        <form className='flex flex-col w-48'>
          <input type='text' placeholder='username' className='m-4'></input>
          <input type='password' placeholder='password' className='m-4'></input>
          <button className='bg-green-500' onClick={handleLoginSubmit}>Submit</button>
        </form>
        <h1>Sign up</h1>
        <form className='flex flex-col w-48'>
          <input type='text' placeholder='username' className='m-4'></input>
          <input type='password' placeholder='password' className='m-4'></input>
          <button className='bg-green-500' onClick={handleSignupSubmit}>Submit</button>
        </form>
      </div>
        
    </>
  )
}
