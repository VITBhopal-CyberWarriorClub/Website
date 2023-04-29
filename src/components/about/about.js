import Image from 'next/image';
import { useState } from 'react';
import styles from './about.module.css';



const Member = (props) => {
    const [isInfo, showInfo] = useState(false);

    const changeInfo = () => {
        const currInfo = !isInfo;
        showInfo(currInfo);
    }

    return (
        <div className={styles.member} onMouseEnter={changeInfo} onMouseLeave={changeInfo}>
            {isInfo && <div className={styles.overlay}><p>{props.info}</p></div>}
            <div className={styles.memberContainer}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} width={100} height={100} alt='' src={require(`../../dp/${props.name}_cropped (1).jpeg`)} />
                </div>
                <div className={styles.profile}>
                    <h4>{props.name}</h4>
                    <h5 style={{ color: "var(--textColor)", }}>{props.title}</h5>
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
                    <Member name="Dr. Azath. H" title="Faculty Coordinator" info="Dr. H. AZATH, Senior Assistant Professor Grade 2, VIT Bhopal University, INDIA. Dr. H. Azath received his degrees Ph.D, ME, BE in the field of Computer Science & Engineering and M.TECH-IT, MBA in Education Management. He has 16+ years of academic experience under various capacities in India and Abroad." />

                    <Member name="Dr. Prabu M" title="Faculty Co-Coordinator" info="Dr. Prabu M is an alumnus of VIT University, Vellore, where he obtained a Ph.D. with support from ISRO-SAC, Ahmedabad. He has over twelve years of experience including two years at Loyola College in Chennai, seven years at VIT University-Vellore, and three years at CHRIST (Deemed to be University) -Bangalore." />

                    <Member name="Sumon Nath" title="Founder" info="Bugxploit a person who exploits the bugs" />

                    <Member name="G.S.V. Prharsha" title="Founder" info="A simple guy with a keen interest in OSINT, reverse engineering, malware analysis, and cloud security." />

                    <Member name="Mahendra Kumar" title="Secretary and Club's Technical Supervisor" info="I am a pre-final CSE cyber security student. My domain of interest in cyber is web and network security and also have projects and research in these domains. I like problem solving and I am a 4 star coder on codechef. Pro hacker on HTB. Practical learning is what I believe in." />

                    <Member name="Kapil Kataria" title="Technical Lead" info="I'm a intermediate programmer and CTF player with strong passion to learn and grow.Stock Market Investing,  Pentesting and cloud security are my area of interest." />

                    <Member name="Rishabh Rai" title="Hacker's Squad Lead" info="I am a curious guy and always ready to learn more about any topic that interests me in any aspect. I have interests in crypto, cloud computing and networks with a bit of scripting." />

                    <Member name="Ayush Juneja" title="Hacker's Squad Lead" info="I have a keen interest in the cyber field and I have hands on experience in the same. Other than this I'm a bug hunter starving to help others by securing them." />

                    <Member name="Mohammad Shoab" title="Hacker's Squad" info="I am a Cyber Security Enthusiast and a Hacker with an Ethical mindset.
I am having experience in Web-app security and Vulnerability Assessment. I am experienced with tools like burp suite, Nmap and of course with Kali Linux & some GitHub open-source tools like Amass, Aquatone...etc many more for finding the vulnerabilities in the web application." />

                    <Member name="Vaibhavi Paliya" title="Hacker's Squad" info="Third Year Btech Cyber Security student. I am from Lucknow, Uttar Pradesh. I like doing CTFs and solving rubik's cube. I aspire to be a cybersecurity professional proficient in her tasks and Knowledge capable enough to bring about change in the community for the betterment of the same " />

                    <Member name="Pradyumn Singh Padiyar" title="Hacker's Squad" info="Cyber enthusiast" />

                    <Member name="Akshat Roy" title="Hacker's Squad" info="I am a cybersecurity enthusiast who likes working in the field of network security and cloud security." />

                    <Member name="Sanidhya Soni" title="Hacker's Squad" info="I can be best described as an ingenious tech nerd turned infosec enthusiast and bug hunter , someone who is keen to learn new technologies as well as how to break them through hard work." />
                    <Member name="Ranjan" title="Web Development Team" info="I am a Full Stack Developer and a Game Dev with a great fascination with the creative process. I love bringing mine and other people's ideas to life."/>
                    <Member name="Abhinay Prakash Reddy" title="Web Development Team" info="Myself Tech explorer , Problem Solver, Mr.Calm , Web developer, Blockchain dev, web 3.0 enthusiastic. competitive  Coder" />

                    <Member name="Bharath D" title="Web Development Team" info="I am a web developer, working on improving my skills and securing the sites I build by learning cyber security." />

                    <Member name="Aryan Rana" title="Web Development Team" info="Myself Aryan Rana, I am doing my undergrad from VIT Bhopal, CSE core department.I am a React developer currently learning flutter.." />

                    <Member name="Shefali Jain" title="Content Team" info="I'm in Content team" />

                    <Member name="Alisha Verma" title="Content Team" info="I am a 3rd-year cyber security student exploring the domain and learning new things while giving small inputs to society. Exploration and content creation is what keep me sane." />

                    <Member name="Yuvraj Singh Rathore" title="Database Team" info="Myself Yuvraj Singh, currently 2nd year CSE core student. I am very enthusiastic to learn about cyber security, Pro-Hacker and practising CTF's." />

                    <Member name="Harsh Gupta" title="Database Team" info="I am a student of CSE(core) branch. I like to empower and improve myself by each passing day to become the best version of myself." />

                    <Member name="Abhinav Dey" title="Event Management Lead" info="Third Year CSE student. Enjoying life in an overwhelmed environment. Passionate about Cyber world , IoT  and ML. Enjoy Playing Basket Ball, Table tennis." />

                    <Member name="Varun Shukla" title="Event Management Lead" info="I am Varun Shukla ... passionate about self development and a team person who loves to work in teams" />

                    <Member name="Garima Singh" title="Event Management Team" info="Creative and hardworking student. I enjoy working and collaborating with others. I am Self - motivated, easy going and solution oriented person." />

                    <Member name="Atisha Shrivas" title="Event Management Team" info="I am optimistic, responsible, and social person. I am self-reliant,  well-behaved, and above all a person of strong character.  " />

                    <Member name="Utkarsh Singh" title="Multimedia Team" info="So, talking about myself I am interested in UX designing, editing, Photoshop and also have a keen interest in Sports. " />

                    <Member name="Ayan Panda" title="Multimedia Team" info="I am a talented, ambitious and hardworking individual, with broad skills.
My curiosity is extreme, about people and their work . " />

                    <Member name="Ayushi Singh" title="Outreach Team" info="I am currently second year student  in  CSE core and a aspiring Flutter developer." />

                    <Member name="Shikhar Agarwal" title="Outreach Team" info="Hi ! I am pursuing Computer Science and Engineering at VIT Bhopal. I am interested in acquiring new skills and passionate about management related work." />

                    <Member name="Pranav Maheshwari" title="Outreach Team" info="I am offering extraordinary communication and leadership skills and the crucial ability to operate in stressful and deadline-driven business environments h I am a fresher, I am a good and enthusiastic learner and highly trainable also Being a Engineering Student I have a good knowledge of Basic Foundation Programing Language i.e. C, C++, core java and DSA, My SQL and DBMS " />

                    <Member name="Anurag Sourav" title="Research Team lead" info="This is Anurag Sourav a pre- final year CSE student. I am a cyber security enthusiast and security researcher . Open to new experiences and ready to learn." />

                    <Member name="Varun Nair" title="Research Team" info="I describe myself as confident and responsible. I believe having good communication skills makes me a good team player and being calm under pressure helps me solve any problem quickly and accurately." />

                    <Member name="Kunal Attri" title="Research Team" info="Highly motivated student looking forward to develop efficient technologies!" />

                    <Member name="Shraddha Pandey" title="Research Team" info="I'm doing an Integrated MTech in CSE with a focus in Cyber Security at VIT in Bhopal. I find a career in security to be both challenging and fascinating, and I am passionate to contribute to enhancing security." />

                    <Member name="Hemal Shingloo" title="Social media lead" info="Front End developer, Logo designing, C++, and Python. Interested in Software Development. Can bring good ideas to the table and have an innovative and learning mind" />





                </div>
            </div>
        </div>
    )
}
