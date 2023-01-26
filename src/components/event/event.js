/* eslint-disable @next/next/no-img-element */
import styles from "./event.module.css";
import Image from "next/image";

export default function EventComponent() {
  return (
    <div className={styles.eventcontainer}>
      <div className={styles.heading}>
        <h1>Cy-Hunt</h1>
      </div>
      <div className={styles.subheading}>
        <h4>Challenging Quiz and Attack & Defence</h4>
      </div>
      <div className={styles.eventimage}>
        <img className={styles.image} src="/event.png" alt="Event Image" />
      </div>
      <div className={styles.eventdescription}>
        <p>
Get ready to put your skills to the test! 🔥 <br />
From here on, the evil 😈 gets real! <br />
<br />
Cyber warrior club is excited to present Cyhunt at AdVITya, the ultimate hacking competition for tech enthusiasts! 💻 <br />
<br />
Show off your knowledge and compete for prizes and recognition against the best in the field. 🏆  <br />
<ul>
  <li>Put your theoretical knowledge to the test by giving answers to some questions and qualify for the next challenge.</li>
  <li>Get wicked and attack your opponents and become your saviour by defending your machine. </li>
</ul>
<br />
<strong><u>Prize List:</u></strong> <br />
<br />
<ul>
<li>
<u>1st Place:</u>{'  '}
Amazon Gift Voucher worth ₨.1200 <br /> <br />
</li>
<li>
<u>2nd Place:</u>{'  '}
Amazon Gift Voucher worth ₨.800 <br /> <br />
</li>
<li>
<u>3rd Place:</u>{'  '}
Amazon Gift Voucher worth ₨.400 <br /> <br />
</li>
</ul>
<br />
This February 8, 2023, get yourselves ready and join us for a day of non-stop action and excitement. Don&apos;t miss out on this opportunity of a lifetime!🔥  <br />
Register now and be a part of the most thrilling event of the year!  <br />
Link: <a href="https://forms.gle/kwdPHRrtcFbN3yxH6" rel="noreferrer" target="_blank">https://forms.gle/kwdPHRrtcFbN3yxH6</a> <br />
<br />
<span>#Advitya2023 #Cyhunt #HackingCompetition #AttackDefense</span> <br />
<br />
Contact Details:  <br />
Mahendra Kumar: <a href="mailto:mahendra.kumar2020@vitbhopal.ac.in">mahendra.kumar2020@vitbhopal.ac.in</a>  <br />
Shridhar Pandey: <a href="mailto:shridhar.pandey2020@vitbhopal.ac.in">shridhar.pandey2020@vitbhopal.ac.in</a> <br />
        </p>
      </div>
    </div>
  );
}
