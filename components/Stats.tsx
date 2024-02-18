import Link from "next/link"



const Stats = ({userStat}:{userStat:UserStats})  => {

  return (
    <div className="items-ceneter flex flex-col">

        <div className="text-xl font-bold text-center flex flex-col gap-2 t" >
        <p><strong>Your Journals :</strong>  {userStat.totalJournals}</p>
         <p><strong >Average Words Per Journal :</strong> {userStat.avgCount}</p>
         <p><strong>Last Active :</strong> {userStat.lastActive}</p>
        </div>
        <Link href = '/Create' className="text-center border-2 px-4 py-2 border-black font-bold mt-12">Create New</Link>
    </div>
  )
}

export default Stats