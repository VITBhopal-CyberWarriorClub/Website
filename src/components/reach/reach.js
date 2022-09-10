import Link from 'next/link';
import styles from './reach.module.css';

export default function ReachUs() {
  return (
    <div className={styles.reach}>
        <div className={styles.reachContainer}>
            <div className={styles.heading}>
                <h2>Reach Us</h2>
            </div>
            <div className={styles.socialsContainer}>
                <Link href='' target="_blank" passHref>
                    <a>
                        <i className='fa fa-instagram' />
                    </a>
                </Link>
                <Link href='' target="_blank" passHref>
                    <a>
                        <i className='fa fa-linkedin-square' />
                    </a>
                </Link>
                <Link href='' target="_blank" passHref>
                    <a>
                        <i className='fa fa-github' />
                    </a>
                </Link>
            </div>
            <div className={styles.subscribeContainer}>
                <h3>Subscribe</h3>
                <input type="email" placeholder="john@example.com" />
                <button className={styles.button}>Subscribe</button>
            </div>
        </div>
    </div>
  )
}
