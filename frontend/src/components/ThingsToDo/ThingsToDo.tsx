import Section from '../Section/Section';
import styles from './ThingsToDo.module.scss';

const activities = [
    {
        category: 'In Ravello',
        items: [
            {
                name: 'Villa Cimbrone Gardens',
                description: 'Explore the stunning gardens where our ceremony will take place. The Terrace of Infinity offers breathtaking views.',
                image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=500&h=350&fit=crop',
                type: 'Gardens',
            },
            {
                name: 'Villa Rufolo',
                description: 'A 13th-century villa with beautiful gardens that inspired Wagner\'s Parsifal. Famous for summer concerts.',
                image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=500&h=350&fit=crop',
                type: 'Historic Site',
            },
            {
                name: 'Ravello Duomo',
                description: 'The 11th-century cathedral in the town center features a beautiful bronze door and museum.',
                image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&h=350&fit=crop',
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
                image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=500&h=350&fit=crop',
                type: '20 min',
            },
            {
                name: 'Positano',
                description: 'The iconic cliffside village with pastel-colored houses, boutique shopping, and beautiful beaches.',
                image: 'https://images.unsplash.com/photo-1533656338503-b22f63cb0e0e?w=500&h=350&fit=crop',
                type: '45 min',
            },
            {
                name: 'Pompeii',
                description: 'The ancient Roman city preserved by Vesuvius. An unforgettable day trip for history lovers.',
                image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&h=350&fit=crop',
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
                image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=350&fit=crop',
                type: 'Must Do',
            },
            {
                name: 'Limoncello Tasting',
                description: 'The Amalfi Coast is famous for its lemons. Visit a local producer and learn how limoncello is made.',
                image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=500&h=350&fit=crop',
                type: 'Food & Drink',
            },
            {
                name: 'Cooking Class',
                description: 'Learn to make fresh pasta, local specialties, and authentic Italian dishes with a local chef.',
                image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=350&fit=crop',
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
                                        <img
                                            src={item.image}
                                            alt={item.name}
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
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
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
