

import { getLast6, newJournal } from "@/data/actions";
import Link from "next/link"
import { User, getServerSession } from 'next-auth'
import { loginIsRequiredServer } from "@/lib/auth";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const Page = async () => {
await loginIsRequiredServer()

const last6 = await getLast6();
console.log(last6)




  return (
    <div className="h-screen w-full md:flex justify-center">
      <form action={newJournal} className="flex flex-col md:w-[80%] h-screen py-12 px-6 rounded  text-3xl">
        <input
          name="title"  
          type="text"
          required
          placeholder="Title"
          className="w-full p-2 mb-4 outline-none hover:border-black duration-200 bg-transparent border-2 border-[#a7a1b0] focus:border-black rounded-xl "
        />
        <textarea
          name="content"
          placeholder="Content"
          required
          className="bg-transparent w-full p-2 mb-4 h-screen text-xl outline-none rounded-xl focus:border-black hover:border-black duration-200 border-2 border-[#a7a1b0] underline-offset-8"
        />
        <button
          type="submit"
          className="border-black text-black border-2 rounded-xl p-2 duration-200 hover:bg-[#00298d] hover:text-[#faf6ea] hover:border-[#00298d]"
        >
          Save
        </button>
      </form>


      <div className='md:w-[20%]  mt-12 md:px-1 p-6'>
          <p className="text-2xl mb-4 font-bold">
            Previous Memories
          </p>

          <div className="grid grid-cols-2 md:flex">
          {
            last6.length != 0 &&  last6.map((journal:any)=>(
              <Link href = {`Journals/${journal.id}`} key={journal.id} className={`mb-2 col-span-1 p-2 text-lg text-white border-2 bg-[#316bf8] gap-1 rounded-xl flex Link duration-200 hover:gap-6 `}>
                <p>
                  {journal.title}
                </p>
                <ArrowLongRightIcon className="w-7 " />
              </Link>
            ))
          }
 </div>
{
            last6.length === 0 && <p className="italic">[none]</p>
          }

      </div>
    </div>
  );
};

export default Page;
