import Head from 'next/head'
import Router from 'next/Router'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Session Manager</title>
        <meta name="description" content="Manage your sessions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.header}>Manage Sessions</h1>
        <h2 className={styles.header2}>Study with others and boost productivity in mere seconds.</h2>
        <button
          onClick={() => Router.push(`/join/${LINK}`)}
          className={styles.startButton}>
          Count me in!
        </button>
      </div>
    </div>
  );
};
