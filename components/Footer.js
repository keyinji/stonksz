import { BsInstagram } from "react-icons/Bs";
import { BsTwitter } from "react-icons/Bs";
import { BsFacebook } from "react-icons/Bs";


function Footer() {
	return (
		<>
		<div className="mb-0">
	    <div className="bg-gray-100 w-full flex justify-center items-center text-center md:flex-row flex-col ">
     		 <div className="flex gap-10 p-3">
							<BsInstagram className="text-4xl cursor-pointer hover:text-blue-600" />
							<BsTwitter className="text-4xl cursor-pointer hover:text-blue-600" />
							<BsFacebook className="text-4xl cursor-pointer hover:text-blue-600" />
			  </div>
			</div>
      		<div className="flex justify-center items-center text-center p-1 bg-gray-100 mt-0">
				<div className=" text-gray-800 font-semibold">
					© 2021-2022 All rights reserved
				</div>
			</div>
		</div>
		</>
	);
}

export default Footer;