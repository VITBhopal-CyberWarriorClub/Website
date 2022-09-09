import Terminal from '../terminal/terminal';
import styles from './landing.module.css';

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.landingContainer}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <h1>CyberWarriors Club</h1>
            <h3>VIT BHOPAL</h3>
          </div>
          <p className={styles.description}>
            A community for advanced penetration testing a forum to improve your digital space skills as the world is moving to a digital age where robots and machines are doing our job and so digital security is also essential for physical security.
          </p>
        </div>
        <div className={styles.right}>
          <Terminal />
        </div>
      </div>
    </div>
  )
}
