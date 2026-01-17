import Section from '../Section/Section';
import styles from './Schedule.module.scss';

// Placeholder icons for each day
const DayIcons: Record<string, React.ReactNode> = {
    'Wednesday, August 26': (
        // Suitcase - Welcome/Arrival
        <svg className={styles.dayIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="8" width="18" height="13" rx="2" />
            <path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
            <line x1="12" y1="12" x2="12" y2="16" />
        </svg>
    ),
    'Thursday, August 27': (
        // Sun - Experience Day
        <svg className={styles.dayIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
    ),
    'Friday, August 28': (
        // Boat - Capri Day
        <svg className={styles.dayIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 20c2-1 4-2 6-2s4 1 6 2 4 1 6 0" />
            <path d="M4 17l1.5-9h13L20 17" />
            <path d="M12 3v5" />
            <path d="M8 8l4-2 4 2" />
        </svg>
    ),
    'Saturday, August 29': (
        // Wine glass - Welcome Dinner
        <svg className={styles.dayIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 2h8l-1 9a4 4 0 0 1-3 3.5V20h4v2H8v-2h4v-5.5A4 4 0 0 1 9 11l-1-9z" />
            <path d="M7 6h10" />
        </svg>
    ),
    'Sunday, August 30': (
        // Clipboard/checklist - Prep & Rehearsal
        <svg className={styles.dayIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <path d="M9 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3" />
            <line x1="9" y1="10" x2="15" y2="10" />
            <line x1="9" y1="14" x2="15" y2="14" />
        </svg>
    ),
    'Monday, August 31': (
        // Wedding rings - Wedding Day
        <svg className={styles.dayIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="9" cy="12" r="5" />
            <circle cx="15" cy="12" r="5" />
        </svg>
    ),
    'Tuesday, September 1': (
        // Heart with wave - Farewell
        <svg className={styles.dayIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
    ),
};

const scheduleEvents = [
    {
        day: 'Wednesday, August 26',
        title: 'Welcome to the Amalfi Coast',
        events: [
            {
                time: 'Daytime',
                title: 'Guests Arrive',
                location: 'Maiori',
                description: 'Guests arrive in Maiori and check into their hotels along the Amalfi Coast.',
                dress: 'Casual',
            },
            {
                time: 'Afternoon',
                title: 'Free Time',
                location: 'Maiori',
                description: 'Explore a beach club, wander around town, or enjoy espresso and pastries by the piazza.',
                dress: 'Casual',
            },
            {
                time: '6:00 PM',
                title: 'Welcome Aperitivo',
                location: 'Hotel Due Torri Terrace',
                description: 'A light, festive welcome drinks with stunning ocean views. A short welcome toast to kick off the celebrations!',
                dress: 'Smart Casual',
            },
        ],
    },
    {
        day: 'Thursday, August 27',
        title: 'Amalfi Coast Experience Day',
        events: [
            {
                time: 'Morning',
                title: 'Breakfast Overlooking the Sea',
                location: 'Hotel Due Torri',
                description: 'Start your day with a leisurely breakfast and breathtaking views of the Mediterranean.',
                dress: 'Casual',
            },
            {
                time: 'Late Morning',
                title: 'Activities',
                location: 'Maiori & Surrounding Areas',
                description: 'Lemon Grove Tour, beach time, or shopping for ceramics and linens in the local shops.',
                dress: 'Comfortable Walking Attire',
                optional: true,
            },
            {
                time: 'Afternoon',
                title: 'Day Tours',
                location: 'Amalfi Coast',
                description: 'Guest-paid tours available: Positano Tour, Pompeii Tour, or Italian Cooking Class. Contact the wedding planner to reserve your spot.',
                dress: 'Comfortable',
                optional: true,
            },
            {
                time: 'Evening',
                title: 'Free Evening',
                location: 'Amalfi Coast',
                description: 'Explore the local restaurants and nightlife. Try Masaniello Art Cafe in Amalfi or Rada Beach Club in Minori.',
                dress: 'Smart Casual',
            },
        ],
    },
    {
        day: 'Friday, August 28',
        title: 'Private Boat Day to Capri',
        events: [
            {
                time: '9:00 AM',
                title: 'Depart for Capri',
                location: 'Maiori Harbor',
                description: 'Board our private boat for an unforgettable day trip to Capri. Seeing the island from the sea is truly magical!',
                dress: 'Resort Casual / Swimwear',
            },
            {
                time: 'All Day',
                title: 'Boat Day Adventures',
                location: 'Amalfi Coast to Capri',
                description: 'Prosecco and antipasti on board, swimming stops in hidden coves, views of the grottos, and the famous Faraglioni di Capri rocks.',
                dress: 'Resort Casual / Swimwear',
            },
            {
                time: '5:00 PM',
                title: 'Return to Shore',
                location: 'Maiori Harbor',
                description: 'Return from our boat adventure with sun-kissed memories. This often becomes guests\' favorite day!',
                dress: 'Resort Casual',
            },
            {
                time: 'Evening',
                title: 'Free Evening',
                location: 'Amalfi Coast',
                description: 'Nightlife: Music on the Rocks in Positano or Africana Famous Club in Praiano.',
                dress: 'Smart Casual',
                optional: true,
            },
        ],
    },
    {
        day: 'Saturday, August 29',
        title: 'Welcome Dinner',
        events: [
            {
                time: 'Daytime',
                title: 'Free Day to Explore',
                location: 'Amalfi Coast',
                description: 'Enjoy the beauty of the coast! Visit Amalfi Cathedral, explore Positano, or relax at a beach club.',
                dress: 'Casual',
            },
            {
                time: '7:00 PM',
                title: 'Welcome Dinner',
                location: 'Hotel Due Torri Terrace, Maiori',
                description: 'Pizza, pasta, and mozzarella making under the stars with breathtaking ocean views. Spritz bar, gelato bar, tambourines, and Italian fun!',
                dress: '"Dolce Vita" Chic - Fun fabrics, vibrant colors, playful accessories!',
            },
        ],
    },
    {
        day: 'Sunday, August 30',
        title: 'Ravello Prep + Rehearsal',
        events: [
            {
                time: 'Morning',
                title: 'Explore Ravello',
                location: 'Ravello',
                description: 'Visit Villa Rufolo gardens, enjoy coffee in Piazza del Duomo, or take panoramic walks through this enchanting hilltop town.',
                dress: 'Casual',
            },
            {
                time: 'Afternoon',
                title: 'Check-in to Villa Cimbrone',
                location: 'Villa Cimbrone, Ravello',
                description: 'Wedding party and close family check into Villa Cimbrone for the wedding festivities.',
                dress: 'Casual',
            },
            {
                time: '6:30 PM',
                title: 'Rehearsal Dinner',
                location: 'Trattoria da Lorenzo, Scala',
                description: 'An intimate dinner for wedding party and close family at one of our favorite restaurants near Ravello.',
                dress: 'Italian Elegance - Cocktail dresses or tailored suits, no jeans please',
            },
        ],
    },
    {
        day: 'Monday, August 31',
        title: 'Wedding Day at Villa Cimbrone',
        events: [
            {
                time: 'Morning',
                title: 'Getting Ready',
                location: 'Villa Cimbrone',
                description: 'Slow breakfast for the wedding party. Hair and makeup begins. Guests have free time to explore or prepare for the evening.',
                dress: 'Relaxed',
            },
            {
                time: '4:00 PM',
                title: 'Ceremony',
                location: 'Garden of Two Fountains, Villa Cimbrone',
                description: 'Please arrive by 3:30 PM. The ceremony will feature opera singers and violin with stunning views of the Amalfi Coast.',
                dress: 'Black Tie - Long dresses in soft hues for ladies, formal wear for gentlemen',
            },
            {
                time: '5:00 PM',
                title: 'Cocktail Hour',
                location: 'Infinity Terrace, Villa Cimbrone',
                description: 'Champagne, canapes, and acoustic music while capturing golden hour photos on the famous terrace overlooking the Mediterranean.',
                dress: 'Black Tie',
            },
            {
                time: '7:00 PM',
                title: 'Reception Dinner',
                location: 'The Crypt, Villa Cimbrone',
                description: 'A seated dinner in the atmospheric medieval crypt featuring Italian fine dining with elevated local cuisine, floral and candle-heavy tablescape.',
                dress: 'Black Tie',
            },
            {
                time: '10:00 PM',
                title: 'Dancing Under the Stars',
                location: 'Garden of Two Fountains, Villa Cimbrone',
                description: 'Live band and DJ on a black and white checkered dance floor. Open bar with signature drinks: Passion Fruit Martini and Limoncello Martini.',
                dress: 'Black Tie',
            },
        ],
    },
    {
        day: 'Tuesday, September 1',
        title: 'Farewell Brunch',
        events: [
            {
                time: '11:00 AM',
                title: 'Farewell Brunch',
                location: 'Villa Maria Restaurant, Ravello',
                description: 'Fresh fruit, pastries, eggs and focaccia, mimosas and cappuccinos. A thank-you toast to close the weekend with warmth and connection.',
                dress: 'Smart Casual',
            },
            {
                time: 'Afternoon',
                title: 'Departures',
                location: 'Ravello / Naples Airport',
                description: 'Hugs and goodbyes as guests depart for the airport. Arrivederci! See you in Italia again soon!',
                dress: 'Travel Comfortable',
            },
        ],
    },
];

const Schedule = () => {
    return (
        <Section
            id="schedule"
            title="Wedding Schedule"
            subtitle="Join us for a weekend of celebration"
        >
            <div className={styles.scheduleContainer}>
                {scheduleEvents.map((day, dayIndex) => (
                    <div key={dayIndex} className={styles.dayCard}>
                        <div className={styles.dayHeader}>
                            <div className={styles.dayHeaderLeft}>
                                {DayIcons[day.day]}
                                <span className={styles.dayDate}>{day.day}</span>
                            </div>
                            <h3 className={styles.dayTitle}>{day.title}</h3>
                        </div>

                        <div className={styles.eventsList}>
                            {day.events.map((event, eventIndex) => (
                                <div key={eventIndex} className={styles.event}>
                                    <div className={styles.eventTime}>
                                        {event.time}
                                        {event.optional && <span className={styles.optionalLabel}>Optional</span>}
                                    </div>
                                    <div className={styles.eventContent}>
                                        <h4 className={styles.eventTitle}>{event.title}</h4>
                                        <p className={styles.eventLocation}>
                                            <svg
                                                className={styles.locationIcon}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            {event.location}
                                        </p>
                                        <p className={styles.eventDescription}>{event.description}</p>
                                        <span className={styles.dressCode}>Dress: {event.dress}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Schedule;
