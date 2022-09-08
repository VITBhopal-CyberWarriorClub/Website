import Link from "next/link";
import styles from "./header.module.css";

export default function SiteHeader() {
  return (
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
  )
}