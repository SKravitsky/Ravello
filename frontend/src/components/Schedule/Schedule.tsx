import Section from '../Section/Section';
import styles from './Schedule.module.scss';

const scheduleEvents = [
    {
        day: 'Friday, August 28',
        title: 'Welcome Dinner',
        events: [
            {
                time: '7:00 PM',
                title: 'Welcome Aperitivo',
                location: 'Hotel Caruso Terrace',
                description: 'Join us for cocktails and light bites as we kick off the wedding weekend with stunning views of the Amalfi Coast.',
                dress: 'Smart Casual',
            },
        ],
    },
    {
        day: 'Saturday, August 29',
        title: 'Free Day & Rehearsal',
        events: [
            {
                time: 'Daytime',
                title: 'Free Day to Explore',
                location: 'Ravello & Amalfi Coast',
                description: 'Enjoy the beauty of the region! We recommend visiting Amalfi, Positano, or simply relaxing by the pool.',
                dress: 'Casual',
            },
            {
                time: '6:00 PM',
                title: 'Rehearsal Dinner',
                location: 'Ristorante Rossellinis',
                description: 'For wedding party and immediate family only.',
                dress: 'Cocktail Attire',
            },
        ],
    },
    {
        day: 'Sunday, August 30',
        title: 'Pool Day',
        events: [
            {
                time: '12:00 PM - 5:00 PM',
                title: 'Pool Party',
                location: 'Hotel Caruso Pool',
                description: 'Relax by the infinity pool with drinks and snacks before the big day. Swimwear welcome!',
                dress: 'Resort Casual',
            },
        ],
    },
    {
        day: 'Monday, August 31',
        title: 'Wedding Day',
        events: [
            {
                time: '4:00 PM',
                title: 'Ceremony',
                location: 'Villa Cimbrone - Terrace of Infinity',
                description: 'Please arrive by 3:30 PM. The ceremony will take place at the famous Terrace of Infinity overlooking the Mediterranean.',
                dress: 'Black Tie Optional',
            },
            {
                time: '5:00 PM',
                title: 'Cocktail Hour',
                location: 'Villa Cimbrone Gardens',
                description: 'Enjoy champagne and Italian appetizers while strolling through the historic gardens.',
                dress: 'Black Tie Optional',
            },
            {
                time: '7:00 PM',
                title: 'Reception Dinner',
                location: 'Villa Cimbrone Crypt',
                description: 'A seated dinner in the atmospheric medieval crypt, followed by toasts and speeches.',
                dress: 'Black Tie Optional',
            },
            {
                time: '10:00 PM',
                title: 'Dancing Under the Stars',
                location: 'Villa Cimbrone Terrace',
                description: 'Dance the night away with views of the twinkling Amalfi Coast below.',
                dress: 'Black Tie Optional',
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
                            <span className={styles.dayDate}>{day.day}</span>
                            <h3 className={styles.dayTitle}>{day.title}</h3>
                        </div>

                        <div className={styles.eventsList}>
                            {day.events.map((event, eventIndex) => (
                                <div key={eventIndex} className={styles.event}>
                                    <div className={styles.eventTime}>{event.time}</div>
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
