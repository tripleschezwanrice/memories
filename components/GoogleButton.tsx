"use client"

import { signIn } from "next-auth/react";


export async function GoogleButton() {
   
    const handleClick = async () => {
      await signIn("google", { callbackUrl: "https://memories4you.vercel.app/"});

    };
  
    return (
      <button
        onClick={handleClick}
        className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl  transition-colors border-2 border-black hover:border-[#00298d] rounded-md hover:bg-[#00298d] duration-200 hover:text-[#faf6ea]"
      >
        <span className="ml-4">Continue with Google</span>
      </button>
    );
  }

export default GoogleButton