import Image from "next/image";
import styles from "./page.module.scss";
import RSVPButton from "@/components/RSVPButton/RSVPButton";
import OurStory from "@/components/OurStory/OurStory";
import Welcome from "@/components/Welcome/Welcome";
import Schedule from "@/components/Schedule/Schedule";
import Attire from "@/components/Attire/Attire";
import Accommodations from "@/components/Accommodations/Accommodations";
import Travel from "@/components/Travel/Travel";
import ThingsToDo from "@/components/ThingsToDo/ThingsToDo";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <main id="home" className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/hero.jpg"
                        alt="Villa Cimbrone, Ravello"
                        fill
                        priority
                        sizes="100vw"
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <p className={styles.preTitle}>Together with their families</p>

                    <h1 className={styles.coupleNames}>
                        Viktoryia
                    </h1>
                    <h1 className={styles.coupleNames}>
                        <span className={styles.ampersand}>&</span>
                    </h1>
                    <h1 className={styles.coupleNames}>
                         Steven
                    </h1>

                    <div className={styles.divider}>
                        <span className={styles.dividerLine} />
                        <span className={styles.dividerIcon}>&#10022;</span>
                        <span className={styles.dividerLine} />
                    </div>

                    <p className={styles.inviteText}>
                        Request the pleasure of your company<br />
                        at their wedding celebration
                    </p>

                    <div className={styles.details}>
                        <div className={styles.date}>
                            <span className={styles.dateDay}>31</span>
                            <span className={styles.dateSuper}>st</span>
                            <div className={styles.dateMonthYear}>
                                <span>August</span>
                                <span>2026</span>
                            </div>
                        </div>
                    </div>

                    <p className={styles.location}>
                        <span className={styles.venue}>Villa Cimbrone</span>
                        <span className={styles.city}>Ravello, Italy</span>
                    </p>

                    <RSVPButton className={styles.rsvpButton} />
                </div>

                <div className={styles.scrollIndicator}>
                    <span>Scroll to explore</span>
                    <div className={styles.scrollArrow} />
                </div>
            </main>

            <Welcome />
            <OurStory />
            <Schedule />
            <Attire />
            <Accommodations />
            <Travel />
            <ThingsToDo />
            <FAQ />
            <Footer />
        </>
    );
}
