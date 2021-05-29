import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CoolFaucet - get free DOGE</title>
        <meta name="description" content="coolFaucet" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://arc.io/widget.min.js#NP3eThpG"></script>
      </Head>
      <div>
        <input type="text" placeholder="enter DOGE address linked with faucetpay.io" />
      </div>
    </div>
  )
}
