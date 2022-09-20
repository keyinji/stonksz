import Image from 'next/image'
import crypto from '../components/images/crypto.svg'


const Top = () => {
  return (
      <div className="justify-center items-center p-3 md:flex">
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl text-blue-500 font-bold md:text-3xl ">
             Trade Crypto Risk-free
          </div>
          <div className="max-w-md text-sm font-normal md:text-lg">
             Stonksz is a free cryptocurrency simulator that helps you test your knowledge and your skills
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={crypto} width={400} height={350} />
        </div>
        </div>
  )
}

export default Top