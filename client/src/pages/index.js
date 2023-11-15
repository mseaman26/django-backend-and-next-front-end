import Head from 'next/head'
import { useState, useEffect } from 'react';
import { logoutUser, getCSRFToken } from '@/utils';

export default function Home() {

  const rootURL = process.env.NEXT_PUBLIC_API_URL
  const [signupEmail, setSignupemail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')

  const handleLoginSubmit = async (e) =>{
    e.preventDefault()
    try{
      const response = await fetch
    }catch(err){

    }
  }

  const handleSignupSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch(`${rootURL}/api/signup/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCSRFToken()
        },
        body: JSON.stringify({email: signupEmail, password: signupPassword}),
        credentials: 'include'
      })
      if(response.ok){
        console.log('user created successfully')
      }else{
        console.error('Signup failed')
      }
    }catch(err){
      console.error('signup failed', err)
    }
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
          <input type='text' placeholder='email' className='m-4'onChange={(e)=>setSignupemail(e.target.value)}></input>
          <input type='password' placeholder='password' className='m-4'onChange={(e)=>setSignupPassword(e.target.value)}></input>
          <button className='bg-green-500' onClick={handleSignupSubmit}>Submit</button>
        </form>
        <button className='bg-red-500' onClick={(rootURL) => logoutUser}>Log Out</button>
      </div>
        
    </>
  )
}
