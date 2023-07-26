import Head from 'next/head'
import Image from 'next/image'
import Top from '../components/Top'
import Middle from '../components/Middle'
import Bottom from '../components/Bottom'
import { useRouter } from 'next/router'
import { useEffect } from "react";

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    const loggedIn = localStorage.getItem("token")
    if(!loggedIn){
      router.push("/login")
    }
  })
  return (
    <div>
      <Top />
      <Middle />
      <Bottom />
    </div>
  )
}

export default Home


