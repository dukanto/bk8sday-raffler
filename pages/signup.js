import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SignUpForm from '../components/signup-form'

export default function Home() {

  let [winners, setWinners] = useState('');
  const handleResults = async(results) => {
    setWinners(await results);
    console.log(winners);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>bk8s2022 raffler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sign up to <a href="">the raffle!</a>
        </h1>

        <p className={styles.description}>
          Enter your details below<br/>
          to enter the raffle for some CNCF certifications
        </p>

        <div className={styles.grid}>
          <SignUpForm parentCallback={handleResults} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://day2022.bk8s.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo_border.png" alt="bk8s Logo" width={72} height={45} />
          </span>
        </a>
      </footer>
    </div>
  )
}
