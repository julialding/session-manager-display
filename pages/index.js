import Head from 'next/head'
import Router from 'next/Router'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Session Manager</title>
        <meta name="description" content="Manage your sessions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className={styles.header}>Manage Sessions</h1>
        <h2 className={styles.header2}>Study with others and boost productivity in mere seconds.</h2>
        <Link href='/join/session'>
        <button
          className={styles.startButton}>
          Count me in!
        </button>
        </Link>
    </div>
  );
};
