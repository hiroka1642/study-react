import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import {Headline} from '../components/Headline'
import {Links} from '../components/Links'
import styles from '../styles/Home.module.css'

export  default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headline 
        page="about" 
        >
          <code className={styles.code}>pages/about.js</code>
        </Headline>


      </main>

      <Footer />

    </div>
  )
}
