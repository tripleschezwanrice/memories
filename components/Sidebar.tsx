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
    <div className="h-screen w-[128px] border-r border-[#a7a1b0] flex flex-col justify-between py-12 text-sm font-extralight fixed top-0 left-0">
      <div className="flex flex-col gap-8">
        <Link
          href="/"
          className={clsx(`flex flex-col items-center font-bold `, {})}
        >
          <HomeIcon className="w-10 font-bold" />
          <p>(Home)</p>
        </Link>

        {session ? (
          <>
            <Link
              href="/Journals"
              className={clsx(
                `flex flex-col items-center font-bold box-border`,
                {}
              )}
            >
              <ChatBubbleOvalLeftIcon className="w-10" />
              <p>(Memories)</p>
            </Link>

            <Link
              href="/Create"
              className={clsx(`flex flex-col items-center font-bold `, {})}
            >
              <PencilIcon className="w-10" />
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
              className=" rounded-full"
            />
              <p>(Log Out)</p>
          </Link>
        ) : (
          <Link
            href="/login"
            className={clsx(`flex flex-col items-center font-bold `, {})}
          >
            <UserIcon className="w-10" />
            <p>(Log In)</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
