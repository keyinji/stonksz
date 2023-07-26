import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link"

function Footer() {
  return (
    <>
      <div className="w-full bottom-0 mt-4">
        <div className="bg-gray-100 w-full flex justify-center items-center text-center h-12 md:flex-row flex-col ">
          <div className="flex gap-10 px-3">
            <a
              target="_blank"
              href="https://www.instagram.com/stonksz_website"
              className="text-black"
              rel="noreferrer"
            >
              <BsInstagram className="text-3xl cursor-pointer hover:text-blue-600" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/Stonksz_Website"
              className="text-black"
              rel="noreferrer"
            >
              <BsTwitter className="text-3xl cursor-pointer hover:text-blue-600" />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center text-center p-0.5 bg-gray-100 mt-0">
          <div className=" text-gray-800 font-semibold">
            © 2022-2023 All rights reserved
          </div>
        </div>
        <div className="flex justify-center items-center text-center p-0.5 bg-gray-100 mt-0">
          <div className=" text-gray-800 font-semibold flex">
            <Link href="/privacypolicy">
              <div className="px-2 hover:text-blue-500">Privacy Policy</div>
            </Link>
            <Link href="/termsofuse">
              <div className="hover:text-blue-500">Terms and Conditions</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
