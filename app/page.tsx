
import GithubButton from "@/components/GithubButton";
import GoogleButton from "@/components/GoogleButton";
import SignOut from "@/components/SignOut";
import { stats } from "@/data/actions";
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signIn, signOut } from "next-auth/react";


export default async function Home() {
  const signin = await getServerSession(authConfig)
  console.log(signin);

  const handleClick = () =>{
    console.log(123)
    signIn("google");
  }

  const data = await stats()
  console.log(data)

  return (
    <div className="h-screen grid justify-center items-center w-full">
      <div className="flex flex-col ">
      { 
        signin?
        <>
        
        <div className="text-2xl rounded-md  p-12 flex flex-col gap-4">

          <p className="text-5xl mb-12">Welcome Back, {signin.user?.name?.split(" ")[0]}!</p>

         <div className="flex items-center justify-around gap-2">
          <p className="text-nowrap">Memories Created</p>
          <div className=" bg-black   w-[30vw] h-[1px]"></div>
          <p>{data}</p>
         </div>

         <div className="flex items-center justify-around gap-2">
          <p className="text-nowrap">Average Words/Memory</p>
          <div className=" bg-black w-[30vw] h-[1px]"></div>
          <p>280</p>
         </div>
        
         <div className="flex items-center justify-around gap-2">
          <p className="text-nowrap">Last Seen</p>
          <div className=" bg-black w-[30vw] h-[1px]"></div>
          <p>12/2/24</p>
         </div>

         <SignOut />
         {/* <Stats userStat={UserStat}/> */}
        </div>
        </>
        :
        <div>
          <p className="text-5xl font-bold mb-4 underline-offset-4 underline decoration-[#00298d]">Why Journalise?</p>
        <p className=" font-bold">Journaling helps you remember stuff easily, be better at expressing yourself and is a healthy habit which is close to everyone who does it.</p>
        <p className="font-bold">In the modern age where we are so accustomed to using computers and not having used a pen and paper in a long time, why not journalise online?</p>
        <div className="flex items-center gap-2 font-bold mt-12">
        <GoogleButton />
        <GithubButton />
        </div>
        </div>
      }
     
      </div>

     

    </div>
  );
}
