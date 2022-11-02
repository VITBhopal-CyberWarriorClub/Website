import Image from 'next/image';
import { useState } from 'react';
import styles from './about.module.css';



const Member = (props) => {
    const [isInfo,showInfo] = useState(false);  

    const changeInfo = () => {
        const currInfo = !isInfo;
        showInfo(currInfo);
    }

    return(
    <div className={styles.member} onMouseEnter={changeInfo} onMouseLeave={changeInfo}>
        {isInfo&& <div className={styles.overlay}>{props.info}</div>}
        <div className={styles.memberContainer}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} width={100} height={100} alt='' src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' />
            </div>
            <div className={styles.profile}>
                <h4>{props.name}</h4>
                <h5 style={{color:"white",}}>{props.title}</h5>
                <p>This is the person&apos;s info and what the person does as a club member</p>
            </div>
        </div>
    </div>)
}



export default function AboutUs() {
  return (
    <div className={styles.about} id="about">
        <div className={styles.aboutContainer}>
            <div className={styles.heading}>
                <h2>About Us</h2>
                <h4>OUR TEAM</h4>
            </div>
            <div className={styles.teamContainer}>
                <Member name="Ranjan Kumar" title="Web-Dev Lead" info="The best coder in the team"/>
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />

            </div>
        </div>
    </div>
  )
}
