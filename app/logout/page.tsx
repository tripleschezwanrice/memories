"use client"

// Import necessary modules
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
    // Initialize useRouter hook
    const router = useRouter();

    // Define logout function
    const logout = async () => {
        await signOut({ callbackUrl: "https://memories4you.vercel.app/"}); 
    };

    // Return JSX for the component
    return (
        <div className=" items-center h-screen justify-center flex flex-col">
            <div className="min-w-[50%] text-center text-3xl gap-8 flex flex-col items-center">
            <p>Do you really want to log out?</p>
            <button type="button" className = "border rounded-md border-black p-2 w-fit hover:bg-[#00298d] duration-200 hover:text-[#faf6ea] " onClick={logout}>Log Out</button>
            </div>
        </div>
    );
};

export default Page;
