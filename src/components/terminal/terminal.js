import styles from './terminal.module.css';

export default function Terminal() {
  return (
    <div className={styles.terminalContainer}>
        <div className={styles.header}>
            <div className={styles.heading}>
                <h3>Terminal</h3>
            </div>
            <div className={styles.optionsContainer}>
                <p className={styles.red}></p>
                <p className={styles.yellow}></p>
                <p className={styles.green}></p>
            </div>
        </div>
    </div>
  )
}
