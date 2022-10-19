import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Form from '../components/form'
import WinnerList from '../components/winnerList'

export default function Home() {

  let [winners, setWinners] = useState('');
  const handleResults = async(results) => {
    const r = await results;
    setWinners(r.peopleWhoWon);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>bk8s2022 raffler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">the raffle!</a>
        </h1>

        <p className={styles.description}>
          We will raffle some CNCF certifications <br/>
          between those who had joined the list at<br/>
          <code className={styles.code}>https://raffle2022.bk8s.tech/signup</code>
        </p>

        <div className={styles.grid}>
          <Form parentCallback={handleResults} />
          <WinnerList winners={winners}/>
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
