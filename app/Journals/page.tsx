import { deleteById, getJournals } from "@/data/actions";
import { loginIsRequiredServer } from "@/lib/auth";
import {
  ArrowLongRightIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const page = async () => {
  await loginIsRequiredServer();

  let i = 0;
  let j = 0;
  let k = 0;

  function dayConverter(dateString: any) {
    const givenDate = new Date(dateString);
    const currentDate = new Date();
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

    if (
      givenDate.getFullYear() === currentDate.getFullYear() &&
      givenDate.getMonth() === currentDate.getMonth() &&
      givenDate.getDate() === currentDate.getDate()
    ) {
      return "today";
    } else if (
      givenDate.getFullYear() === yesterday.getFullYear() &&
      givenDate.getMonth() === yesterday.getMonth() &&
      givenDate.getDate() === yesterday.getDate()
    ) {
      return "yesterday";
    } else {
      // Format the date as needed (e.g., '15 Jan \'24')
      const formattedDate = `${givenDate.getDate()} ${getMonthAbbreviation(
        givenDate.getMonth()
      )} '${(givenDate.getFullYear() % 100).toString().padStart(2, "0")}`;
      return formattedDate;
    }
  }

  function getMonthAbbreviation(month: any) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[month];
  }

  const Journals = await getJournals();
  console.log(Journals);

  return (
    <div className="mt-12 flex flex-wrap  md:max-w-[80%] max-w-[90%] mx-auto">
      <div className="w-full flex justify-between items-center py-4 m-2">
        <p className="md:text-6xl text-4xl font-bold">Memories</p>

        <div className=" bg-gradient-to-r from-[#faf6ea] to-[#00298d] w-full mx-4 h-[2px]"></div>

        <Link
          href="/Create"
          className="border-2 border-[#00298d] hover:bg-[#00298d] hover:text-[#faf6ea] duration-200 rounded-full px-4 py-2"
        >
          <div className="flex gap-2 items-center">
            <PlusIcon className="w-7" />
            
            <p className="text-xl md:grid hidden">New</p>
          </div>
        </Link>
      </div>

      <p className="w-full italic m-2 text-[#a7a1b0]">today</p>
      
      <div className="grid grid-cols-2 gap-2 p-2 w-full">

      {Journals.map((journal: any) => (
        <>
          {dayConverter(journal.createdat) === "today" ? (
            <p className={`hidden ${i++}`}></p>
          ) : (
            <p className="hidden"></p>
          )}

          {dayConverter(journal.createdat) === "today" && (
            <Link
              href={`/Journals/${journal.id}`}
              key={journal.id}
              className={`md:col-span-1 col-span-2 bg-[#316bf8] p-2  h-[50vh] rounded-xl text-black`}
              >
             <div className="overflow-y-auto max-h-full w-full break-after-auto items-center mb-3">
<p className="text-5xl font-bold">{journal.title}</p>
<p className="text-xl">{journal.content}</p>
</div>
            </Link>
          )}
        </>
      ))}

      </div>
      {i > 0 ? <p></p> : <p className="italic">[none]</p>}

      <p className="w-full italic m-2 text-[#a7a1b0] mt-12">yesterday</p>

      <div className="grid grid-cols-2 gap-2 p-2">

{Journals.map((journal: any) => (
  <>
    {dayConverter(journal.createdat) === "yesterday" ? (
      <p className={`hidden ${j++}`}></p>
    ) : (
      <p className="hidden"></p>
    )}

    {dayConverter(journal.createdat) === "yesterday" && (
      <Link
        href={`/Journals/${journal.id}`}
        key={journal.id}
        className={`md:col-span-1 col-span-2 bg-[#316bf8] p-2  h-[50vh] rounded-xl text-black`}
        >
       <div className="overflow-y-auto max-h-full w-full break-after-auto items-center mb-3">
<p className="text-5xl font-bold">{journal.title}</p>
<p className="text-xl">{journal.content}</p>
</div>
      </Link>
    )}
  </>
))}

</div>
      {j > 0 ? <p></p> : <p className="m-2 italic">[none]</p>}





<p className="w-full italic m-2 text-[#a7a1b0] mt-12">previous</p>

<div className="grid grid-cols-2 gap-2 p-2 w-full">

{Journals.map((journal: any) => (
  <>
    {(dayConverter(journal.createdat) !== "today" && dayConverter(journal.createdat) !== "yesterday") ? (
      <p className={`hidden ${k++}`}></p>
    ) : (
      <p className="hidden"></p>
    )}

    {dayConverter(journal.createdat) !== "today" &&  dayConverter(journal.createdat) !== "yesterday" && (
      <Link
        href={`/Journals/${journal.id}`}
        key={journal.id}
        className={`md:col-span-1 col-span-2 bg-[#316bf8] p-2  h-[50vh] rounded-xl text-black`}
        >
       <div className="overflow-y-auto max-h-full w-full break-after-auto items-center mb-3">
<p className="text-5xl font-bold">{journal.title}</p>
<p className="text-xl">{journal.content}</p>
</div>
      </Link>
    )}
  </>
))}

</div>

      {k > 0 ? <p></p> : <p className="m-2 italic">[none]</p>}
    </div>
  );
};

export default page;
