import Image from 'next/image';
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
                            <Image
                                src="/napa_vineyard.jpeg"
                                alt="Couple at Napa vineyard"
                                fill
                                className={styles.storyImage}
                            />
                        </div>
                    </div>

                    <div className={styles.textColumn}>
                        <div className={styles.storyContent}>
                            <h3 className={styles.chapterTitle}>How We Met</h3>
                            <p className={styles.storyText}>
                                We met at a mutual friend&apos;s birthday celebration in Manhattan. The group had
                                gathered at Steven&apos;s apartment in Jersey City before heading out dancing in
                                Manhattan. On the walk back from the Meatpacking District to One World Trade
                                Center, Steven and Viktoryia talked the entire way. They continued talking
                                constantly until their first date, an EDM concert in Brooklyn.
                            </p>

                            <h3 className={styles.chapterTitle}>The Proposal</h3>
                            <p className={styles.storyText}>
                                Two of the couples friends, Dennis and Jenn Rupp, had invited us and Matt West to an Airbnb in
                                Napa Valley, California after one of their friends supposedly cancelled. Since
                                Viktoryia and Steven were members of a wine club at Sequoia Grove, they decided
                                to go wine tasting there while everyone else went on a &quot;hike.&quot; Little did
                                Viktoryia know, Steven had planned the whole thing! Dennis&apos;s friend cancelling
                                was all a ruse. She didn&apos;t even notice that nobody was wearing hiking clothes
                                when they left! Steven proposed at Sequoia Grove, and they were later joined by
                                Viktoryia&apos;s family and Steven&apos;s Mom to celebrate.
                            </p>

                            <h3 className={styles.chapterTitle}>Why Ravello</h3>
                            <p className={styles.storyText}>
                                Since Viktoryia is originally from Europe, we knew we wanted to get married
                                somewhere her family could easily travel to. And honestly, have you ever seen
                                an Italian wedding? They&apos;re incredible. Once we discovered Villa Cimbrone—with
                                its centuries of history and those jaw-dropping views over the Amalfi Coast—we
                                were sold. We can&apos;t wait to share this magical place with everyone we love.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineText}>
                            <div className={styles.timelineLabel}>First Met</div>
                            <div className={styles.timelineDate}>October 2017</div>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineText}>
                            <div className={styles.timelineLabel}>First Date</div>
                            <div className={styles.timelineDate}>January 2018</div>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineText}>
                            <div className={styles.timelineLabel}>Moved In Together</div>
                            <div className={styles.timelineDate}>January 2023</div>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineText}>
                            <div className={styles.timelineLabel}>Engaged</div>
                            <div className={styles.timelineDate}>December 2024</div>
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
