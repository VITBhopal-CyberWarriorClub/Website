import Link from 'next/link';
import styles from './reach.module.css';

function setColor(e){
    e.preventDefault()
    console.log("RUNNING")
    document.documentElement.style.setProperty("--accent-color", "blue");
}

export default function ReachUs() {


  return (
    <div className={styles.reach} id="contact">
        <div className={styles.reachContainer}>
            <div className={styles.heading}>
                <h2>Reach Us</h2>
            </div>
            <div className={styles.socialsContainer}>
                <Link href='https://www.instagram.com/vitb_cwc/' passHref>
                    <a target="_blank" className={styles.links}>
                        <i className='fa fa-instagram' />
                    </a>
                </Link>
                <Link href='https://www.linkedin.com/company/cyberwarriors-vitb/mycompany/'  passHref>
                    <a target="_blank" className={styles.links} >
                        <i className='fa fa-linkedin-square' />
                    </a>
                </Link>
                <Link href='https://github.com/VITBhopal-CyberWarriorClub'  passHref>
                    <a target="_blank" className={styles.links}>
                        <i className='fa fa-github' />
                    </a>
                </Link>
            </div>
            <div className={styles.subscribeContainer}>
                <h3>Subscribe</h3>
                <input type="email" placeholder="john@example.com" />
                <button className={styles.button} onClick={setColor}>Subscribe</button>
            </div>
        </div>
    </div>
  )
}
