import { authConfig } from "@/lib/auth";
import {
  HomeIcon,
  PencilIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const Sidebar = async () => {
  const session = await getServerSession(authConfig);

  return (
    <div className="md:h-screen md:w-[128px] md:border-r border-[#a7a1b0] md:flex md:flex-col justify-between md:py-12 py-4 px-4 text-sm font-extralight md:fixed top-0 left-0 flex border-b ">
      <div className="flex md:flex-col gap-8">
        <Link
          href="/"
          className={clsx(`flex md:flex-col items-center font-bold `, {})}
        >
          <HomeIcon className="md:w-10 w-5 font-bold" />
          <p>(Home)</p>
        </Link>

        {session ? (
          <>
            <Link
              href="/Journals"
              className={clsx(
                `flex md:flex-col items-center font-bold box-border`,
                {}
              )}
            >
              <ChatBubbleOvalLeftIcon className="md:w-10 w-5" />
              <p>(Memories)</p>
            </Link>

            <Link
              href="/Create"
              className={clsx(`flex md:flex-col items-center font-bold `, {})}
            >
              <PencilIcon className="md:w-10 w-5" />
              <p>(Create)</p>
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>

      <div>
        {session ? (
          <Link
            href="/logout"
            className={clsx(`flex flex-col items-center font-bold `, {})}
          >
            <Image
              src={`${session.user?.image}`}
              height={50}
              width={50}
              alt=""
              className="md:w-10 w-7 rounded-full"
            />
            
              <p className="md:flex md:flex-col hidden">(Log Out)</p>
          </Link>
        ) : (
          <Link
            href="/login"
            className={clsx(`flex flex-col items-center font-bold `, {})}
          >
            <UserIcon className="md:w-10 w-7" />
            
            <p>(Log In)</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
