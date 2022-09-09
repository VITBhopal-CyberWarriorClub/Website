import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Landing from '../components/landing/landing'
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
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="A community for advanced penetration testing a forum to improve your digital space skills as the world is moving to a digital age where robots and machines are doing our job and so digital security is also essential for physical security." />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}/favicon.jpg`} />
      </Head>

      <SiteHeader />

      <main className={styles.main}>
        <Landing />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
