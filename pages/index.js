import Head from 'next/head'
import Image from 'next/image'
import Top from '../components/Top'
import Middle from '../components/Middle'
import Bottom from '../components/Bottom'
import { getSession } from "next-auth/react"


const Home = () => {
  return (
    <div>
      <Top />
      <Middle />
      <Bottom />
    </div>
  )
}

export default Home


export async function getServerSideProps(context) {
    const session = await getSession(context)
  
    if (!session) {
      return {
        redirect: {
          destination: '/auth/signin',
          permanent: false,
        },
      }
    }
  
    return {
      props: { session }
    }
  }

