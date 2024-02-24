"use client"

import { signOut } from "next-auth/react"
import Router from "next/router"
const SignOut = () => {

  const logout = () => {
    signOut()
    Router.push('/')
  }


  return (
 <button onClick={()=>{signOut()}} className="hover:bg-[#00298d] border border-black text-black p-2 text0black rounded-md font-bold hover:text-[#faf6ea] hover:border-[#00298d]  duration-200  border-box m-2 flex mx-auto mt-12">
    Sign Out
 </button> 
  )
}

export default SignOut