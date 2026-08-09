'use client';

import Section from '../Section/Section';
import styles from './Schedule.module.scss';

const getDayTabLabel = (day: string): string => {
    const [weekday, monthDay] = day.split(', ');
    const dayNum = monthDay?.split(' ')[1] ?? '';
    return `${weekday.slice(0, 3)} ${dayNum}`;
};

const dayAnchor = (day: string): string =>
    `day-${day.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

interface ScheduleEvent {
    time: string;
    title: string;
    location: string;
    description: string;
    dress: string;
    optional?: boolean;
    inviteOnly?: boolean;
    joiningUs?: boolean;
}

// Map dress code text to attire section anchor IDs
const getDressCodeAnchor = (dress: string): string => {
    const dressLower = dress.toLowerCase();
    if (dressLower.includes('dolce vita')) return 'dolce-vita-chic';
    if (dressLower.includes('coastal chic')) return 'coastal-chic';
    if (dressLower.includes('black tie')) return 'black-tie';
    if (dressLower.includes('white') && (dressLower.includes('swimwear') || dressLower.includes('boat'))) return 'white-party';
    if (dressLower.includes('resort casual') && dressLower.includes('swimwear')) return 'resort-casual-swimwear';
    if (dressLower.includes('smart casual')) return 'smart-casual';
    if (dressLower.includes('comfortable walking')) return 'comfortable-walking-attire';
    if (dressLower.includes('travel comfortable')) return 'travel-comfortable';
    if (dressLower === 'relaxed') return 'relaxed';
    return '';
};

const handleDressCodeClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const element = document.getElementById(anchor);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

// Placeholder icons for each day
const DayIcons: Record<string, React.ReactNode> = {
    'Wednesday, August 26': (
        // Suitcase - Welcome/Arrival
        <svg className={styles.dayIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="6" width="14" height="14" rx="2" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            <line x1="9" y1="2" x2="9" y2="3" />
            <circle cx="8" cy="22" r="1" />
            <circle cx="16" cy="22" r="1" />
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

const scheduleEvents: { day: string; title: string; events: ScheduleEvent[] }[] = [
    {
        day: 'Wednesday, August 26',
        title: 'Benvenuti in Italia!',
        events: [
            {
                time: 'Daytime',
                title: 'Benvenuti ',
                location: 'Maiori',
                description: 'Guests arrive in Maiori and check into their hotels along the Amalfi Coast. We have a room block at Hotel due Torri. Hope you can join us there! If not there are many hotels within walking distance',
                dress: 'Travel Comfortable',
            },
            {
                time: 'Afternoon',
                title: 'Free Time',
                location: 'Maiori',
                description: 'Explore a beach club, wander around town, or enjoy espresso and pastries by the piazza. Do not forget to explore Minori which is the next town over!',
                dress: 'Smart Casual',
            },
            {
                time: '6:30 PM',
                title: 'Welcome Aperitivo',
                location: 'Hotel Due Torri Terrace',
                description: 'Gather for a welcome toast with us on the Hotel Due Torri Terrace to kick off the celebration with small Italian-inspired bites!',
                dress: 'Smart Casual',
            },
            {
                time: 'Evening',
                title: 'Free Time',
                location: 'Maiori',
                description: 'Continue your exploration of the coast or grab a quick bite of dinner!',
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
                dress: 'Relaxed',
            },
            {
                time: '8:30 AM',
                title: 'Pompeii Tour',
                location: 'Pompeii',
                description: 'Guest-paid tours available to Pompeii (~€150 per person). Note that this is an all day tour, you will not return in time to do other tours this day',
                dress: 'Comfortable Walking Attire',
                optional: true,
                joiningUs: true,
            },
            {
                time: 'Afternoon',
                title: 'Day Tours',
                location: 'Amalfi Coast',
                description: 'Guest-paid tours available: Positano Tour or Italian Cooking Class. Contact the wedding planner to reserve your spot.',
                dress: 'Comfortable Walking Attire',
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
        title: 'White Party Boat Day to Capri',
        events: [
            {
                time: 'Morning',
                title: 'Depart for Capri',
                location: 'Maiori Harbor',
                description: 'Board our private boat for an unforgettable day trip to Capri. Seeing the island from the sea is truly magical! This is a White Party — please wear your best white boat clothes and swimwear!',
                dress: 'White Boat Attire / White Swimwear',
                joiningUs: true,
            },
            {
                time: 'All Day',
                title: 'Boat Day Adventures',
                location: 'Amalfi Coast to Capri',
                description: 'Prosecco and antipasti on board, swimming stops in hidden coves, views of the grottos, and the famous Faraglioni di Capri rocks.',
                dress: 'White Boat Attire / White Swimwear',
            },
            {
                time: '5:00 PM',
                title: 'Return to Shore',
                location: 'Maiori Harbor',
                description: 'Return from our boat adventure with sun-kissed memories.',
                dress: 'White Boat Attire / White Swimwear',
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
        title: 'Welcome Soirée',
        events: [
            {
                time: '9:00 AM',
                title: 'Sentiero dei Limoni (Path of Lemons)',
                location: 'Maiori',
                description: 'Ancient path that connects Maiori to Minori that was used by farmers to transport lemons. 2.5 mile hike with 800ft of elevation gain.',
                dress: 'Comfortable Walking Attire',
                optional: true,
                joiningUs: true,
            },
            {
                time: 'Daytime',
                title: 'Free Day to Explore',
                location: 'Amalfi Coast',
                description: 'Enjoy the beauty of the coast! Visit Amalfi Cathedral, explore Positano, or relax at a beach club.',
                dress: 'Smart Casual',
            },
            {
                time: '7:00 PM',
                title: 'Welcome Soirée Dinner',
                location: 'Hotel Due Torri, Maiori',
                description: 'Let the celebrations begin! Please join us for a welcome soirée Italian-style, think sunset views, spritzes in hand, and effortless elegance. Come mingle, unwind, and ease into the weekend as we celebrate with good company, great wine, and la dolce vita.',
                dress: 'Coastal Chic',
            },
        ],
    },
    {
        day: 'Sunday, August 30',
        title: 'CIAO Ravello! + Rehearsal',
        events: [
            {
                time: 'Morning',
                title: 'Explore Ravello',
                location: 'Ravello',
                description: 'Visit Villa Rufolo gardens, enjoy coffee in Piazza del Duomo, or take panoramic walks through this enchanting hilltop town.',
                dress: 'Smart Casual',
            },
            {
                time: 'Afternoon',
                title: 'Check-in to Villa Cimbrone',
                location: 'Villa Cimbrone, Ravello',
                description: 'Check-in to your Ravello Hotel. We will be staying at the wedding venue, Villa Cimbrone. But, there are plenty hotels just a walk away.',
                dress: 'Smart Casual',
            },
            {
                time: '6:30 PM',
                title: 'Rehearsal Dinner',
                location: 'Trattoria da Lorenzo, Scala',
                description: 'By invitation only — for wedding party and immediate family at one of our favorite restaurants near Ravello.',
                dress: '"Dolce Vita" Chic',
                inviteOnly: true,
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
                description: 'Please arrive by 3:30 PM. Our ceremony will be held at the iconic Villa Cimbrone in Ravello—an extraordinary place suspended between sky and sea. With the gardens in bloom and the coast stretching endlessly below, we will say our vows surrounded by beauty, history, and the people we love the most.',
                dress: 'Black Tie: Summer Solstice Spectacle',
            },
            {
                time: '5:00 PM',
                title: 'Cocktail Hour',
                location: 'Infinity Terrace, Villa Cimbrone',
                description: 'Champagne, canapes, and acoustic music while capturing golden hour photos on the famous terrace overlooking the Mediterranean.',
                dress: 'Black Tie: Summer Solstice Spectacle',
            },
            {
                time: '7:00 PM',
                title: 'Reception Dinner',
                location: 'The Crypt, Villa Cimbrone',
                description: 'A seated dinner in the atmospheric medieval crypt featuring Italian fine dining with elevated local cuisine.',
                dress: 'Black Tie: Summer Solstice Spectacle',
            },
            {
                time: '10:00 PM',
                title: 'Dancing Under the Stars',
                location: 'Garden of Two Fountains, Villa Cimbrone',
                description: 'Dinner, then dancing under the stars—because what happens in Italia, stays in Italia!',
                dress: 'Black Tie: Summer Solstice Spectacle',
            },
        ],
    },
    {
        day: 'Tuesday, September 1',
        title: 'Arrivederci!',
        events: [
            {
                time: '11:00 AM',
                title: "Farewell Brunch & Viktoryia's Birthday Celebration!",
                location: 'Villa Maria Restaurant, Ravello',
                description: "Please join us for a farewell brunch as we say arrivederci, celebrate one final time together, and wish Viktoryia a very happy birthday!",
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
    const handleDayTabClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
        e.preventDefault();
        const element = document.getElementById(anchor);
        if (element) {
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <Section
            id="schedule"
            title="Wedding Schedule"
            subtitle="Join us for an Italian celebration"
        >
            <div className={styles.scheduleContainer}>
                <nav className={styles.dayTabs} aria-label="Jump to a day">
                    {scheduleEvents.map((day) => {
                        const anchor = dayAnchor(day.day);
                        return (
                            <a
                                key={anchor}
                                href={`#${anchor}`}
                                className={styles.dayTab}
                                onClick={(e) => handleDayTabClick(e, anchor)}
                            >
                                {getDayTabLabel(day.day)}
                            </a>
                        );
                    })}
                </nav>

                {scheduleEvents.map((day, dayIndex) => (
                    <div key={dayIndex} id={dayAnchor(day.day)} className={styles.dayCard}>
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
                                        {event.inviteOnly && <span className={styles.inviteOnlyLabel}>Invite Only</span>}
                                        {event.joiningUs && <span className={styles.joiningUsLabel}>We&apos;re joining!</span>}
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
                                        {getDressCodeAnchor(event.dress) ? (
                                            <a
                                                href={`#${getDressCodeAnchor(event.dress)}`}
                                                className={styles.dressCode}
                                                onClick={(e) => handleDressCodeClick(e, getDressCodeAnchor(event.dress))}
                                            >
                                                Dress: {event.dress}
                                            </a>
                                        ) : (
                                            <span className={styles.dressCode}>Dress: {event.dress}</span>
                                        )}
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
