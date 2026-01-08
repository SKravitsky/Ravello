import styles from "./page.module.scss";
import RSVPButton from "@/components/RSVPButton/RSVPButton";
import OurStory from "@/components/OurStory/OurStory";
import Schedule from "@/components/Schedule/Schedule";
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
                    <img
                        src="https://images.openai.com/static-rsc-3/CsOYiBzUEqL6gxzciKzV8hQmnpvtoAhfC_2QK1qC0AMrkEh8R5tTjc8wae2CYJV9o3Dfu4DepPeN1Geo2SDIxIATJGycN-wRQpEuLARXjcs"
                        alt="Villa Cimbrone, Ravello"
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <p className={styles.preTitle}>Together with their families</p>

                    <h1 className={styles.coupleNames}>
                        Viktoryia <span className={styles.ampersand}>&</span> Steven
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

            <OurStory />
            <Schedule />
            <Accommodations />
            <Travel />
            <ThingsToDo />
            <FAQ />
            <Footer />
        </>
    );
}
