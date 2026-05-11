import Head from 'next/head'
import LandingPage from '@/components/LandingPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>NodeVision - Your AI Growth Partners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </>
  )
}
