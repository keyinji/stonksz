import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import logo2 from '../../components/images/logo2.png'
import login from '../../components/images/login.svg'
import Image from "next/image"

function signin({ providers }) {
  return (
    <>
    <div className="flex flex-col items-center justify-center pb-4 pt-2 mt-10">
      <Image 
        src={logo2}
        width={260.1}
        height={86.4}
      />
      <Image 
        src={login}
        width={250}
        height={250}
      />
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button className="p-2 rounded-lg items-center justify-center flex border-black border-1 hover:bg-black hover:text-white w-60"onClick={() => signIn(provider.id, { callbackUrl: "/"})}>
        <img className="w-6 h-6 mr-2" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
          Sign in with {provider.name}
        </button>
      </div>
    ))}
    </div>
  </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}



export default signin