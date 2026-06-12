import Image from 'next/image';
import Section from '../Section/Section';
import styles from './ThingsToDo.module.scss';

const activities = [
    {
        category: 'In Ravello',
        items: [
            {
                name: 'Villa Cimbrone Gardens',
                description: 'Explore the stunning gardens where our ceremony will take place. The Terrace of Infinity offers breathtaking views.',
                image: '/images/hotels/villa-cimbrone.jpg',
                type: 'Gardens',
            },
            {
                name: 'Villa Rufolo',
                description: 'A 13th-century villa with beautiful gardens that inspired Wagner\'s Parsifal. Famous for summer concerts.',
                image: '/images/activities/villa-rufolo.jpg',
                type: 'Historic Site',
            },
            {
                name: 'Ravello Duomo',
                description: 'The 11th-century cathedral in the town center features a beautiful bronze door and museum.',
                image: '/images/activities/ravello-duomo.jpg',
                type: 'Church',
            },
        ],
    },
    {
        category: 'Nearby Towns',
        items: [
            {
                name: 'Amalfi',
                description: 'A historic maritime republic with a stunning cathedral, paper museum, and charming streets. Just 20 minutes by bus.',
                image: '/images/activities/amalfi.jpg',
                type: '20 min',
            },
            {
                name: 'Positano',
                description: 'The iconic cliffside village with pastel-colored houses, boutique shopping, and beautiful beaches.',
                image: '/images/activities/positano.jpg',
                type: '45 min',
            },
            {
                name: 'Pompeii',
                description: 'The ancient Roman city preserved by Vesuvius. An unforgettable day trip for history lovers.',
                image: '/images/activities/pompeii.jpg',
                type: '1.5 hrs',
            },
        ],
    },
    {
        category: 'Experiences',
        items: [
            {
                name: 'Boat Tour',
                description: 'See the Amalfi Coast from the sea! Tours include stops for swimming in hidden coves and visits to Capri.',
                image: '/images/activities/boat-tour.jpg',
                type: 'Must Do',
            },
            {
                name: 'Limoncello Tasting',
                description: 'The Amalfi Coast is famous for its lemons. Visit a local producer and learn how limoncello is made.',
                image: '/images/activities/limoncello-tasting.jpg',
                type: 'Food & Drink',
            },
            {
                name: 'Cooking Class',
                description: 'Learn to make fresh pasta, local specialties, and authentic Italian dishes with a local chef.',
                image: '/images/activities/cooking-class.jpg',
                type: 'Experience',
            },
        ],
    },
];

const ThingsToDo = () => {
    return (
        <Section
            id="things-to-do"
            title="Things To Do"
            subtitle="Make the most of your time on the Amalfi Coast"
            variant="alternate"
        >
            <div className={styles.thingsContainer}>
                {activities.map((category, catIndex) => (
                    <div key={catIndex} className={styles.categorySection}>
                        <h3 className={styles.categoryTitle}>{category.category}</h3>
                        <div className={styles.activitiesGrid}>
                            {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} className={styles.activityCard}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                                            className={styles.activityImage}
                                        />
                                        <span className={styles.activityType}>{item.type}</span>
                                    </div>
                                    <div className={styles.activityContent}>
                                        <h4 className={styles.activityName}>{item.name}</h4>
                                        <p className={styles.activityDescription}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className={styles.proTip}>
                    <div className={styles.proTipIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <div className={styles.proTipContent}>
                        <h4>Pro Tip</h4>
                        <p>
                            August is peak season on the Amalfi Coast. Book activities and restaurant reservations
                            in advance, especially for boat tours and popular restaurants. We&apos;re happy to help with
                            recommendations!
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ThingsToDo;
