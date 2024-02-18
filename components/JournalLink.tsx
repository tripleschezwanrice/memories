import { getJournalById } from "@/data/actions"
import Link from "next/link"


const JournalLink = async ({id}:{id:string}) => {
 
  const journals = await getJournalById(id)
 
  return (
  
    <Link href={`/Journals/${id}`} className="border-2 border-black flex justify-between p-2 text-xl">
        <p>{journals[0].title}</p>
        <p>{journals[0].content.split(0,5)}</p>
    </Link>

  )
}

export default JournalLink