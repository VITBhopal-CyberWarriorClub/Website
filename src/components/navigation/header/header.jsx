import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";


export default function SiteHeader() {
  
  const [theme,setTheme] = useState("dark");

  const switchTheme = () =>{
    if(theme=="light"){
      document.documentElement.style.setProperty("--backColor2","black")
      document.documentElement.style.setProperty("--backColor","#1f1f1f")
      document.documentElement.style.setProperty("--textColor","white")
      document.documentElement.style.setProperty("--headerColor","#171717")

      setTheme("dark")
    }
    else{
      document.documentElement.style.setProperty("--backColor2","#ffffff")
      document.documentElement.style.setProperty("--backColor","#dbdada")
      document.documentElement.style.setProperty("--textColor","black")
      document.documentElement.style.setProperty("--headerColor","#e4e4e4")

      setTheme("light")

    }
  }

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
            <a className={styles.option} href="#about">
              About
            </a>
            {/*   <a className={styles.option}>Cyber Games</a>*/}
            <a className={styles.option} href="#contact">
              Contact Us
            </a>
          </div>
          <div className={styles.themeToggle} onClick={switchTheme}>
          <i className="fa fa-sun-o" />
            <div className={styles.light}>
              <i className="fa fa-moon" />
            </div>
          </div>
          <div className={styles.hamburger}>
            <i className="fa fa-bars" />
          </div>
        </div>
      </div>
    </header>
  );
}
