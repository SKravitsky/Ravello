import Section from '../Section/Section';
import styles from './Travel.module.scss';

const airports = [
    {
        name: 'Naples International Airport (NAP)',
        distance: '~65 km / 1.5-2 hours to Ravello',
        description: 'The closest major airport with direct flights from many European cities and connections from the US.',
        recommended: true,
    },
    {
        name: 'Rome Fiumicino Airport (FCO)',
        distance: '~300 km / 3.5-4 hours to Ravello',
        description: 'Italy\'s largest airport with the most international connections. Consider taking the high-speed train to Naples, then transfer to Ravello.',
        recommended: false,
    },
];

const transportOptions = [
    {
        title: 'Private Transfer',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
        description: 'We highly recommend booking a private transfer from the airport. The winding Amalfi Coast roads are best navigated by experienced local drivers.',
        price: '~€120-150 from Naples Airport',
        recommendation: 'We can help arrange this - contact us!',
    },
    {
        title: 'SITA Bus',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M3 10h18" />
                <circle cx="7" cy="18" r="2" />
                <circle cx="17" cy="18" r="2" />
            </svg>
        ),
        description: 'Public buses run along the Amalfi Coast. From Naples, take the Circumvesuviana train to Sorrento, then SITA bus to Amalfi, and another to Ravello.',
        price: '~€15-20 total',
        recommendation: 'Budget-friendly but time-consuming (3-4 hours)',
    },
    {
        title: 'Ferry + Bus',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 20h20" />
                <path d="M5 20v-8l7-4 7 4v8" />
                <path d="M12 8v12" />
                <path d="M5 12h14" />
            </svg>
        ),
        description: 'Take a ferry from Naples or Salerno to Amalfi (seasonal), then a local bus up to Ravello. A scenic option!',
        price: '~€20-30 for ferry + bus',
        recommendation: 'Great for sightseeing on clear days',
    },
    {
        title: 'Rental Car',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 17H3v-1a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v1h-2" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
                <path d="M5 12l2-6h10l2 6" />
            </svg>
        ),
        description: 'For the adventurous! The Amalfi Coast roads are narrow and winding, but offer incredible views if you\'re comfortable driving in Italy.',
        price: 'Varies by rental company',
        recommendation: 'Only for confident drivers; parking in Ravello is limited',
    },
];

const Travel = () => {
    return (
        <Section
            id="travel"
            title="Getting There"
            subtitle="Your journey to the Amalfi Coast"
        >
            <div className={styles.travelContainer}>
                <div className={styles.airportsSection}>
                    <h3 className={styles.sectionTitle}>Nearest Airports</h3>
                    <div className={styles.airportsGrid}>
                        {airports.map((airport, index) => (
                            <div
                                key={index}
                                className={`${styles.airportCard} ${airport.recommended ? styles.recommended : ''}`}
                            >
                                {airport.recommended && (
                                    <span className={styles.recommendedBadge}>Recommended</span>
                                )}
                                <h4 className={styles.airportName}>{airport.name}</h4>
                                <p className={styles.airportDistance}>{airport.distance}</p>
                                <p className={styles.airportDescription}>{airport.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.transportSection}>
                    <h3 className={styles.sectionTitle}>Getting to Ravello</h3>
                    <div className={styles.transportGrid}>
                        {transportOptions.map((option, index) => (
                            <div key={index} className={styles.transportCard}>
                                <div className={styles.transportIcon}>{option.icon}</div>
                                <h4 className={styles.transportTitle}>{option.title}</h4>
                                <p className={styles.transportDescription}>{option.description}</p>
                                <p className={styles.transportPrice}>{option.price}</p>
                                <p className={styles.transportRecommendation}>{option.recommendation}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.tipsSection}>
                    <h3 className={styles.sectionTitle}>Travel Tips</h3>
                    <div className={styles.tipsGrid}>
                        <div className={styles.tipCard}>
                            <div className={styles.tipIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            </div>
                            <h4>Arrive a Day Early</h4>
                            <p>We recommend arriving by Saturday, August 29 to settle in and recover from jet lag before the festivities begin.</p>
                        </div>
                        <div className={styles.tipCard}>
                            <div className={styles.tipIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                    <line x1="7" y1="7" x2="7.01" y2="7" />
                                </svg>
                            </div>
                            <h4>Pack Light</h4>
                            <p>Ravello involves lots of walking on cobblestone streets and stairs. Bring comfortable shoes and a small, wheeled suitcase.</p>
                        </div>
                        <div className={styles.tipCard}>
                            <div className={styles.tipIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h4>Time Zone</h4>
                            <p>Italy is in Central European Time (CET), which is 6 hours ahead of Eastern Time and 9 hours ahead of Pacific Time.</p>
                        </div>
                        <div className={styles.tipCard}>
                            <div className={styles.tipIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="1" y="4" width="22" height="16" rx="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                            </div>
                            <h4>Currency & Cards</h4>
                            <p>Italy uses the Euro (€). Credit cards are widely accepted, but carry some cash for small purchases and tips.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Travel;
