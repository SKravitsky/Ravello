import Section from '../Section/Section';
import styles from './OurStory.module.scss';

const OurStory = () => {
    return (
        <Section
            id="our-story"
            title="Our Story"
            subtitle="How two hearts found each other"
            variant="alternate"
        >
            <div className={styles.storyContainer}>
                <div className={styles.storyGrid}>
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=800&fit=crop"
                                alt="Couple in Italy"
                                className={styles.storyImage}
                            />
                        </div>
                    </div>

                    <div className={styles.textColumn}>
                        <div className={styles.storyContent}>
                            <h3 className={styles.chapterTitle}>How We Met</h3>
                            <p className={styles.storyText}>
                                It was a crisp autumn evening in New York City when fate brought us together.
                                Steven was grabbing his usual espresso at a small café in the West Village,
                                while Vika was there sketching in her notebook. A spilled coffee and a shared
                                laugh later, what started as an accidental encounter became the beginning of
                                our greatest adventure.
                            </p>

                            <h3 className={styles.chapterTitle}>The Proposal</h3>
                            <p className={styles.storyText}>
                                Two years later, during a trip to the Amalfi Coast, Steven led Vika through
                                the winding paths of Villa Cimbrone&apos;s gardens at sunset. At the Terrace of
                                Infinity, with the Mediterranean Sea stretching endlessly before them and the
                                sky painted in shades of gold and rose, he got down on one knee. Vika said yes
                                before he could even finish the question.
                            </p>

                            <h3 className={styles.chapterTitle}>Why Ravello</h3>
                            <p className={styles.storyText}>
                                The magic of that evening stayed with us, and we knew there was no other place
                                we&apos;d rather begin our married life. Villa Cimbrone, perched high above the
                                Amalfi Coast, holds our most treasured memory—and soon, it will be the setting
                                for our most important day. We can&apos;t wait to share this special place with the
                                people we love most.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineText}>
                            <div className={styles.timelineLabel}>First Met</div>
                            <div className={styles.timelineDate}>October 2022</div>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineText}>
                            <div className={styles.timelineLabel}>First Date</div>
                            <div className={styles.timelineDate}>December 2022</div>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineText}>
                            <div className={styles.timelineLabel}>Moved In Together</div>
                            <div className={styles.timelineDate}>June 2024</div>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineText}>
                            <div className={styles.timelineLabel}>Engaged</div>
                            <div className={styles.timelineDate}>September 2025</div>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineText}>
                            <div className={styles.timelineLabel}>Wedding Day</div>
                            <div className={styles.timelineDate}>August 2026</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default OurStory;
