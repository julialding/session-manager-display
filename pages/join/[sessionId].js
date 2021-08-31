import Head from 'next/head'
import Router from 'next/Router'
import styles from '../../styles/Join.module.scss'
import Link from 'next/link'

export default function Join() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Join a Session</title>
          <meta name="description" content="Join a session using a custom invite link" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <h1 className={styles.header}>Join a Session</h1>
          <h2 className={styles.header2}>Input your name below</h2>
          <input
              required
              className={styles.input}
              type='text'
              placeholder='Name'
            />
          <Link href='/session/session'>
          <button
            className={styles.joinButton}>
            Join session
          </button>
          </Link>
      </div>
    );
  };