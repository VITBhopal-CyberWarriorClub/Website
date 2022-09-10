import Image from 'next/image';
import styles from './about.module.css';

const Member = () => (
    <div className={styles.member}>
        <div className={styles.memberContainer}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} width={100} height={100} alt='' src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' />
            </div>
            <div className={styles.profile}>
                <h5>Person</h5>
                <p>This is the person&apos;s info and what the person does as a club member</p>
            </div>
        </div>
    </div>
)

export default function AboutUs() {
  return (
    <div className={styles.about}>
        <div className={styles.aboutContainer}>
            <div className={styles.heading}>
                <h2>About Us</h2>
                <h4>OUR TEAM</h4>
            </div>
            <div className={styles.teamContainer}>
                <Member />
                <Member />
                <Member />
            </div>
        </div>
    </div>
  )
}
