import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cyber Warriors Club - VIT Bhopal</title>
        <meta name="description" content="A community for advanced penetration testing a forum to improve your digital space skills as the world is moving to a digital age where robots and machines are doing our job and so digital security is also essential for physical security." />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            {/* <img className={styles.logo} src={} /> */}
            <h2 className={styles.logo}>
              <Link href='/' passHref>
                <a>cwc_<span>vitb</span></a>
              </Link>
            </h2>
          </div>
          <div className={styles.headerContent}>
            <div className={styles.optionsContainer}>
              <a className={styles.option}>About</a>
              <a className={styles.option}>Cyber Games</a>
              <a className={styles.option}>Contact Us</a>
            </div>
            <div className={styles.themeToggle}>
              <ul>
                <li className={styles.dark}>
                  <i className="fa fa-sun-o" />
                </li>
                <li className={styles.light}>
                  <i className="fa fa-moon" />
                </li>
              </ul>
            </div>
            <div className={styles.hamburger}>
              <i className='fa fa-bars' />
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
