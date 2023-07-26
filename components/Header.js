import Image from "next/image";
import logo2 from "../components/images/logo2.png";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Header() {
  const [session, setSession] = useState();
  useEffect(() => {
    const item = localStorage.getItem("token");
    if (item) {
      setSession(true);
    }
  }, []);

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
    router.reload(window.location.pathname);
  };

  return (
    <div className="shadow-md w-full h-12 top-0 sticky z-10 scroll-pt-12 bg-white md:flex md:items-center py-1 md:h-12">
      {/*Left*/}
      <div className="flex items-center px-2">
        <Link href="/" passHref>
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
                ? "flex-col px-2 bg-white w-full shadow-lg"
                : "hidden md:flex md:flex-grow md:items-center md:space-x-8 ml-2 md:ml-0"
            }
          >
            <Link href="/learn" passHref>
              <div className="cursor-pointer h-10 hover:border-b-2 border-b-blue-500 my-2 md:my-0 md:ml-6">
                <button className="h-10">Learn</button>
              </div>
            </Link>
            <Link href="/markets" passHref>
              <div className="cursor-pointer h-10 hover:border-b-2 border-b-blue-500 my-2 md:my-0">
                <button className="h-10">Markets</button>
              </div>
            </Link>
            <Link href="/portfolio" passHref>
              <div className="cursor-pointer h-10 hover:border-b-2 border-b-blue-500 my-2 md:my-0">
                <button className="h-10">Portfolio</button>
              </div>
            </Link>
            <Link href="/premium">
              <div className="cursor-pointer h-10 hover:border-b-2 border-b-blue-500 my-2 md:my-0">
                <button className="h-10">Premium</button>
              </div>
            </Link>
          </div>
          <div className="bg-white flex gap-10 ml-auto md:ml-0">
            <button
              onClick={logout}
              className=" cursor-pointer absolute right-14 top-3 text-white p-1 font-semibold md:relative md:right-0 md:top-0 mr-1 md:mr-3 bg-blue-500 rounded-md hover:bg-blue-700"
            >
            Log Out
            </button>
          </div>
        </>
      ) : (
        <div className="ml-auto text-right absolute top-3 right-3">
          <Link href="/login">
            <button className="hover:text-blue-500 font-semibold">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
