import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Webjump - Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header></Header>
    </div>
  )
}
