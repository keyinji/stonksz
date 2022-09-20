import Image from "next/image";
import logo2 from "../components/images/logo2.png";
import { SearchIcon, LogoutIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { TbDiamond } from "react-icons/Tb";
import { TbLogout } from "react-icons/Tb";
import { signOut } from "next-auth/react";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import React, { useState } from "react";

function Header() {
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md stick-top z-50 bg-white md:flex md:items-center py-1 md:h-12">
      {/*Left*/}
      <div className="flex items-center px-2">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={logo2}
            width={130.05}
            height={43.2}
            layout="fixed"
          />
        </Link>
      </div>
      {session ? (
        <>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-4 top-3 cursor-pointer md:hidden"
          >
            {open ? <IoMdClose /> : <IoMdMenu />}
          </div>
          <div
            className={
              open
                ? "flex-col ml-2"
                : "hidden md:flex md:flex-grow md:items-center md:justify-center md:space-x-10 ml-2 md:ml-0"
            }
          >
            <Link href="/all">
              <div className="cursor-pointer h-10 hover:border-b-2 border-b-blue-500 my-2 md:my-0">
                <button className="h-10">All</button>
              </div>
            </Link>
            <Link href="/market">
              <div className="cursor-pointer h-10 hover:border-b-2 border-b-blue-500 my-2 md:my-0">
                <button className="h-10">Market Cap</button>
              </div>
            </Link>
            <Link href="/gainers">
              <div className="cursor-pointer h-10 hover:border-b-2 border-b-blue-500 my-2 md:my-0">
                <button className="h-10">Gainers</button>
              </div>
            </Link>
            <Link href="/losers">
              <div className="cursor-pointer h-10 hover:border-b-2 border-b-blue-500 my-2 md:my-0">
                <button className="h-10">Losers</button>
              </div>
            </Link>
            <Link href="/portfolio">
              <div className="cursor-pointer h-10 hover:border-b-2 border-b-blue-500 my-2 md:my-0">
                <button className="h-10">Portfolio</button>
              </div>
            </Link>
          </div>
          <div className="bg-white flex gap-10 ml-auto md:ml-0">
            <TbDiamond className="text-3xl cursor-pointer absolute right-24 mr-3 top-3 text-gray-700 md:relative md:right-0 md:top-0 md:mr-0 hover:text-black" />
            <TbLogout
              onClick={() => signOut()}
              className="text-3xl cursor-pointer absolute right-14 top-3 text-gray-700 md:relative md:right-0 md:top-0 hover:text-black mr-1 md:mr-3"
            />
          </div>
        </>
      ) : (
        <div className="ml-auto text-right">
          <button>Sign In</button>
        </div>
      )}
    </div>
  );
}

export default Header;
