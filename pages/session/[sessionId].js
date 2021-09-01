import Head from 'next/head'
import Router from 'next/Router'
import styles from '../../styles/Session.module.scss'
import Participant from "../../components/Participant/Participant";

export default function Session() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Study Session</title>
          <meta name="description" content="Session page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <h1 className={styles.header}>Study Session</h1>
          <Participant />
      </div>
    );
  };