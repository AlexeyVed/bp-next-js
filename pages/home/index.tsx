import Head from 'next/head'
import { ReactElement } from 'react'

import GeneralLayout from '../../components/Layouts/GeneralLayout'
import NavButton from '../../components/UI/NavButton'

import { TNextPageWithLayout } from '../../types'

const Home: TNextPageWithLayout = () => {

  return (
    <div>
      <Head>
        <title>Home - page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      HOME PAGE
      <br />
      <NavButton to={'/login'} />
    </div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <GeneralLayout>
      {page}
    </GeneralLayout>
  )
}

export default Home
