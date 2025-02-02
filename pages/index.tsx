import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { siteMap } from '../data/siteMap';
import { GeneralContext } from '../Context/GeneralContext';
import { useEffect } from "react";


import Link from 'next/link';
import Script from 'next/script';

/* -------------------- Imports end -------------------------- */


export default function Home() {

  const siteState = GeneralContext();

  useEffect(() => {
    siteState.updateLocation(siteMap.home);
    console.log("log from home:", siteState.currentLocation)
  })



  return (
    <div className={styles.container}>
      <Head>
        <title>{siteState.currentLocation.title}</title>
        <meta name="description" content="Black Sheep arts collective. View artists portfolios and upcomming events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://kit.fontawesome.com/1960917441.js" crossOrigin="anonymous"></Script>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a> Black sheep</a>
        </h1>

        <p className={styles.description}>
          /
          <Link href="Members">
            <a> portfolios </a>
          </Link>
          /
          <Link href="UpComing">
            <a> upcoming events </a>
          </Link>
          /
          <Link href="Projects">
            <a> Projects </a>
          </Link>
          /
        </p>

        <div className={styles.grid}>

        </div>
      </main>

      <footer className={styles.footer}>

        210 go spurs go!
        <span className={styles.logo}>
          {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        </span>

      </footer>
    </div >
  )
}
