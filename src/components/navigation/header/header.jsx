import Link from "next/link";
import styles from "./header.module.css";
import { useEffect, useState } from "react";


export default function SiteHeader() {

  const [theme, setTheme] = useState("dark");
  
  const switchTheme = () => {
    if (theme == "light") {
      document.documentElement.style.setProperty("--backColor2", "black")
      document.documentElement.style.setProperty("--backColor", "#1f1f1f")
      document.documentElement.style.setProperty("--textColor", "white")
      document.documentElement.style.setProperty("--headerColor", "#171717")
      localStorage.setItem('theme', 'dark')

      setTheme("dark")
    }
    else {
      document.documentElement.style.setProperty("--backColor2", "#ffffff")
      document.documentElement.style.setProperty("--backColor", "#dbdada")
      document.documentElement.style.setProperty("--textColor", "black")
      document.documentElement.style.setProperty("--headerColor", "#e4e4e4")
      localStorage.setItem('theme', 'light')

      setTheme("light")

    }
  }

  useEffect(() => {
    let theme = localStorage.getItem('theme');
    if (theme) {
      if (theme === 'dark') {
        document.documentElement.style.setProperty("--backColor2", "black")
        document.documentElement.style.setProperty("--backColor", "#1f1f1f")
        document.documentElement.style.setProperty("--textColor", "white")
        document.documentElement.style.setProperty("--headerColor", "#171717")
      } else if (theme === 'light') {
        document.documentElement.style.setProperty("--backColor2", "#ffffff")
        document.documentElement.style.setProperty("--backColor", "#dbdada")
        document.documentElement.style.setProperty("--textColor", "black")
        document.documentElement.style.setProperty("--headerColor", "#e4e4e4")
      }
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          {/* <img className={styles.logo} src={} /> */}
          <h2 className={styles.logo}>
            <Link href="/" passHref>
              <a>
                cwc_<span>vitb</span>
              </a>
            </Link>
          </h2>
        </div>
        <div className={styles.headerContent}>
          <div className={styles.optionsContainer}>
            <Link href="/event" passHref>
              <a className={styles.option} onClick={() => {document.querySelector(`.${styles.optionsContainer}`).classList.remove(styles.active)}}>
                Event
              </a>
            </Link>
            <Link href="/#about" passHref>
              <a className={styles.option} onClick={() => {document.querySelector(`.${styles.optionsContainer}`).classList.remove(styles.active)}}>
                About
              </a>
            </Link>
            <Link href="/#contact" passHref>
              <a className={styles.option} onClick={() => {document.querySelector(`.${styles.optionsContainer}`).classList.remove(styles.active)}}>
                Contact Us
              </a>
            </Link>
          </div>
          <div className={styles.themeToggle} id="themetoggle" onClick={switchTheme}>
          <i className="fa fa-sun-o" />
            <div className={styles.light}>
              <i className="fa fa-moon" />
            </div>
          </div>
          <div className={styles.hamburger} onClick={() => {document.querySelector(`.${styles.optionsContainer}`).classList.toggle(styles.active)}}>
            <i className="fa fa-bars" />
          </div>
        </div>
      </div>
    </header>
  );
}
