import type { NextPage } from 'next'
import Head from 'next/head'
import Doc from './doc/[id]'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Text Editor</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Doc/>
    </div>
  )
}

export default Home
