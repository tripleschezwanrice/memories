
import GithubButton from "@/components/GithubButton";
import GoogleButton from "@/components/GoogleButton";
import SignOut from "@/components/SignOut";
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

  return (
    <div className=" h-screen grid justify-center items-center fixed">
      <div className="flex flex-col">
     
     
      {
        signin?
        <>
        
        <div>
         <p className="text-5xl font-bold mb-12 text-white">{signin.user?.name}</p>
         <SignOut />
         {/* <Stats userStat={UserStat}/> */}
        </div>
        </>
        :
        <div>
          <p className="text-5xl font-bold mb-4 underline-offset-4 underline decoration-yellow-400">Why Journalise?</p>
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
