import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '../components/navigation/header/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cyber Warriors Club - VIT Bhopal</title>
        <meta name="description" content="A community for advanced penetration testing a forum to improve your digital space skills as the world is moving to a digital age where robots and machines are doing our job and so digital security is also essential for physical security." />
        <meta property="og:site_name" content="Cyber Warriors Club - VIT Bhopal" />
        <meta property="og:title" content="Cyber Warriors Club - VIT Bhopal" />
        <meta property="og:url" content="https://flamekiller22.github.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="A community for advanced penetration testing a forum to improve your digital space skills as the world is moving to a digital age where robots and machines are doing our job and so digital security is also essential for physical security." />
        <meta property="og:image" content="https://cdn3.iconfinder.com/data/icons/coding-8/100/hastag-burning-coding-desktop-window-app-hashtag-burning-fire-flame-overheating-cpu-hogging-error-512.png" />
      </Head>

      <SiteHeader />

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
