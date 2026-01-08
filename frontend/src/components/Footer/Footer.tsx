import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.names}>Viktoryia & Steven</div>
                <div className={styles.date}>August 31, 2026</div>
                <div className={styles.location}>Villa Cimbrone, Ravello, Italy</div>
                <div className={styles.divider}>
                    <span className={styles.heart}>&#10084;</span>
                </div>
                <p className={styles.message}>
                    We can&apos;t wait to celebrate with you!
                </p>
            </div>
        </footer>
    );
};

export default Footer;
