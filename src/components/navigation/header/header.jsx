import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";


export default function SiteHeader({switchTheme}) {
  


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
