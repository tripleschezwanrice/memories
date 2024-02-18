

import { getLast6, newJournal } from "@/data/actions";
import Link from "next/link"
import { User, getServerSession } from 'next-auth'
import { loginIsRequiredServer } from "@/lib/auth";

const Page = async () => {
await loginIsRequiredServer()

const last6 = await getLast6();
console.log(last6)




const colors = ["border-yellow-400","border-red-400","border-violet-400","border-blue-400"]
const bgcolors = ["hover:bg-yellow-400","hover:bg-red-400","hover:bg-violet-400","hover:bg-blue-400"]


let i = 0;
let j = 0;

  return (
    <div className="h-screen w-full flex justify-center">
      <form action={newJournal} className="flex flex-col bg-black w-[80%] h-screen py-12 px-6 rounded  text-3xl">
        <input
          name="title"  
          type="text"
          required
          placeholder="Title"
          className="w-full p-2 mb-4 outline-none  bg-black border-2 border-white rounded-xl "
        />
        <textarea
          name="content"
          placeholder="Content"
          required
          className="bg-black w-full p-2 mb-4 h-screen text-xl outline-none rounded-xl border-2 border-white underline-offset-8"
        />
        <button
          type="submit"
          className="border-purple-400 text-white border-2 rounded-xl p-2 duration-200 hover:bg-purple-400 hover:text-black"
        >
          Save
        </button>
      </form>


      <div className='w-[20%] mt-12 px-1'>
          <p className="text-2xl mb-4 font-bold">
            Previous Memories
          </p>
          
          {
            last6.map((journal:any)=>(
              <Link href = {`Journals/${journal.id}`} key={journal.id} className={`mb-2 p-2 text-lg text-white border-2 ${colors[(i++)%4]} ${bgcolors[(j++)%4]} hover:text-black duration-200 rounded-xl flex justify-between`}>
                <p>
                  {journal.title}
                </p>
              </Link>
            ))
          }

      </div>
    </div>
  );
};

export default Page;
