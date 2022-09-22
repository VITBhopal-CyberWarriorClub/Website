import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AboutUs from '../components/about/about'
import Landing from '../components/landing/landing'
import SiteHeader from '../components/navigation/header/header'
import ReachUs from '../components/reach/reach'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    if (theme == "light") {
      document.documentElement.style.setProperty("--backColor2", "black")
      document.documentElement.style.setProperty("--backColor", "#1f1f1f")
      document.documentElement.style.setProperty("--textColor", "white")
      document.documentElement.style.setProperty("--headerColor", "#171717")

      setTheme("dark")
    }
    else {
      document.documentElement.style.setProperty("--backColor2", "#ffffff")
      document.documentElement.style.setProperty("--backColor", "#dbdada")
      document.documentElement.style.setProperty("--textColor", "black")
      document.documentElement.style.setProperty("--headerColor", "#e4e4e4")

      setTheme("light")

    }
  }

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

      <SiteHeader switchTheme={switchTheme}/>

      <main className={styles.main}>
        <Landing switchTheme={switchTheme}/>
        <AboutUs />
        <ReachUs />
      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}
