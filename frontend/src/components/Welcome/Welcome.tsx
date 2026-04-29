import Section from '../Section/Section';
import styles from './Welcome.module.scss';

const Welcome = () => {
    return (
        <Section
            id="welcome"
            title="Ciao!"
            subtitle="A message from Viktoryia & Steven"
        >
            <div className={styles.welcomeContainer}>
                <div className={styles.messageContent}>
                    <p className={styles.greeting}>
                        We are so excited to celebrate with you in Italy and feel incredibly lucky to have you there.
                        Thank you for making the journey to be part of such a special moment in our lives as
                        it truly means the world to us to share this with the people we love most.
                        </p>
                    <p className={styles.greeting}>
                        The Amalfi Coast has always been a dream destination for us. Experiencing such a beautiful, historic place feels even more meaningful knowing we get to do it
                        surrounded by friends and family. We can&apos;t wait to take in the views, food, and magic of the coast together.
                    </p>
                    <p className={styles.greeting}>
                        We&apos;ve planned a number of optional day trips and experiences throughout the week, including visits to Positano and Capri.
                        We&apos;re so excited about these events and plan to join as many as we can, though we may not be able to attend every outing as we juggle wedding festivities and final preparations.
                    </p>
                    <p className={styles.greeting}>
                        No matter what, we hope you enjoy exploring the Amalfi Coast at your own pace and making unforgettable memories along the way.
                    </p>
                </div>

                <p className={styles.signoff}>
                    See you in Italia!
                    <span className={styles.signature}>With love, Viktoryia & Steven</span>
                </p>

                <br/>

                <div className={styles.contactCard}>
                    <p className={styles.contactIntro}>
                        If you need assistance booking accommodations, transportation, tours, or have
                        general questions, please contact our wonderful wedding planner:
                    </p>
                    <div className={styles.plannerInfo}>
                        <span className={styles.plannerName}>Maryla Colandrea</span>
                        <span className={styles.plannerCompany}>Art of Perfection Events</span>
                    </div>
                    <a
                        href="mailto:info@artofperfectionevents.com?subject=Question%20-%20Vika%20%26%20Steven%20Wedding"
                        className={styles.contactButton}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        info@artofperfectionevents.com
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Welcome;
