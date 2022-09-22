import { useState } from 'react';
import styles from './terminal.module.css';




export default function Terminal() {

  const [log, setLog] = useState(null);

  const executeCommand = (e) => {
    e.preventDefault()
    if (e.key == "Enter") {
      if (e.target.value == "/help") {
        const newlog = ["type \"/goto about/contact\" to navigate",
         "\"/theme-color hexcode\" to change the accent color", "\"/switch-theme\" to switch between light and dark mode"]
         setLog(newlog)
         return
      }
      let newLog;
      if (Array.isArray(log)) {
        newLog = log.slice();
        newLog.push(e.target.value)
      }
      else {
        newLog = []
        newLog.push(e.target.value)

      }
      setLog(newLog)

      if(e.target.value == "/switch-theme"){

      }
      
      if (e.target.value == "/goto about") {
        document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
        e.target.value = ""
        return
      }
      if (e.target.value == "/goto contact") {
        document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
        e.target.value = ""

        return
      }
      if (e.target.value == "/switch-theme") {
        e.target.value = ""

        return
      }
      if (e.target.value.startsWith("/theme-color") && (e.target.value.startsWith("#", 13))) {
        let validHex = /^#[0-9A-F]{6}$/i
        const color = e.target.value.substring(13)
        if (validHex.test(color))
          document.documentElement.style.setProperty("--accent-color", color)
        e.target.value = ""

      }
      e.target.value = ""

    }
  }

  let logs;
  if (log != null) {
    logs = log.map(elem => {
      return (
        <div>
        <span style={{color:"white"}}> $</span>: {elem}
        </div>
      )
    })
  }
  else {
    logs = (<div><span style={{color:"white"}}> $</span>: type /help to see all commands.</div>)
  }


  return (
    <div className={styles.terminalContainer}>
      <div className={styles.header}>
        <div className={styles.heading}>
          <h3>terminal</h3>
        </div>
        <div className={styles.optionsContainer}>
          <p className={styles.red}></p>
          <p className={styles.yellow}></p>
          <p className={styles.green}></p>
        </div>
      </div>
      <div className={styles.log}>{logs}</div>
      <input className={styles.cmd} onKeyUp={executeCommand}></input>
    </div>
  )
}
