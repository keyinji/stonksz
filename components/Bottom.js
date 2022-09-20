import trade from '../components/images/trade.png'
import Image from 'next/image'

const Bottom = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="text-xl text-blue-500 font-bold md:text-3xl">
            Invest anywhere, anytime
        </div>
        <div className="max-w-md text-sm font-normal md:text-lg">
          Take you trading game to the next level
        </div>
        <Image src={trade} width={218.625} height={400.6875}/>
      </div>

    )
  }
  
  export default Bottom