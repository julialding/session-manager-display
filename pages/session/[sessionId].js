import Head from 'next/head'
import Router from 'next/Router'
import styles from '../../styles/Session.module.scss'
import Link from 'next/link'

export default function Session() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Study Session</title>
          <meta name="description" content="Session page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <h1 className={styles.header}>Study Session</h1>
          <h2 className={styles.header2}>Input your name below</h2>
          <input
              required
              className={styles.input}
              type='text'
              placeholder='Name'
            />
          <Link href='/session/session'>
          <button
            className={styles.startButton}>
            Join session
          </button>
          </Link>
      </div>
    );
  };