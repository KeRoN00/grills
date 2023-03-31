import { Gallery, Navbar } from '@/Components'
import Head from 'next/head'
import React from 'react'

export default function Galeria() {
  return (
    <>
      <Head>
        <title>Kominki - GL</title>
        <meta name="description" content="Kominki z wędzarnią i wielofunkcyjne zestawy" />
        <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densityDpi=device-dpi"
    />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='xd'>
      <Navbar />
      <Gallery />
      </main>
    </>
  )
}
