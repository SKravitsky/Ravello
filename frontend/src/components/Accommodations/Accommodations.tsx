import Section from '../Section/Section';
import styles from './Accommodations.module.scss';

const hotels = [
    {
        name: 'Villa Cimbrone',
        category: 'Luxury',
        description: 'A stunning 11th-century palazzo transformed into an exclusive boutique hotel, featuring the iconic Terrace of Infinity with breathtaking views over the Amalfi Coast. The historic gardens are among the most beautiful in Italy.',
        priceRange: '€€€€€',
        distance: 'You are at Villa Cimbrone',
        amenities: ['Historic Gardens', 'Terrace of Infinity', 'Fine Dining', 'Spa', 'Pool', 'Sea Views'],
        image: 'https://www.hotelvillacimbrone.com/wp-content/uploads/2020/02/Hotel-Villa-Cimbrone-23-1920.jpg',
        bookingNote: null,
        website: 'https://www.hotelvillacimbrone.com/',
    },
    {
        name: 'Villa Eva',
        category: 'Luxury',
        description: 'An elegant family-run villa nestled in lush Mediterranean gardens, offering intimate suites with private terraces and panoramic coastal views. Known for its warm hospitality and tranquil atmosphere.',
        priceRange: '€€€€',
        distance: '5 min walk to Villa Cimbrone',
        amenities: ['Garden', 'Pool', 'Sea Views', 'Private Terraces', 'Breakfast Included'],
        image: 'https://wi-web-eiw.s3.eu-west-1.amazonaws.com/exclusiveitaly/images/original/90b6765a-fc62-4ed0-b9b5-7d52843c3dfb/villa-eva-01.jpg',
        bookingNote: null,
        website: 'https://www.villa-eva.it/',
    },
    {
        name: 'Hotel Giordano',
        category: 'Mid-Luxury',
        description: 'A charming family-owned hotel in a beautifully restored 19th-century villa, located steps from Ravello\'s main piazza. Features lovely gardens, an outdoor pool, and an excellent restaurant serving traditional Amalfi Coast cuisine.',
        priceRange: '€€€€',
        distance: '10 min walk to Villa Cimbrone',
        amenities: ['Pool', 'Garden', 'Restaurant', 'Terrace', 'Central Location', 'Bar'],
        image: 'https://www.giordanohotel.it/public/web/gallerie/gf_3wed_clr_0002_16.jpg',
        bookingNote: null,
        website: 'https://www.giordanohotel.it/',
    },
    {
        name: 'Hotel Parsifal',
        category: 'Mid-Range',
        description: 'A former 13th-century convent with authentic character, beautiful cloisters, and one of the best views in Ravello from its restaurant terrace.',
        priceRange: '€€',
        distance: '6 min walk to Villa Cimbrone',
        amenities: ['Historic Building', 'Restaurant', 'Sea Views', 'Cloister'],
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
        bookingNote: null,
        website: 'https://www.hotelparsifal.com/',
    },
    {
        name: 'Villa Amore',
        category: 'Budget-Friendly',
        description: 'A family-run guesthouse offering simple, comfortable rooms with spectacular views. Perfect for travelers seeking authentic Italian hospitality.',
        priceRange: '€',
        distance: '4 min walk to Villa Cimbrone',
        amenities: ['Sea Views', 'Terrace', 'Family-Run', 'Breakfast Included'],
        image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=400&fit=crop',
        bookingNote: null,
        website: 'https://www.villaamore.it/',
    },
];

const Accommodations = () => {
    return (
        <Section
            id="accommodations"
            title="Where to Stay"
            subtitle="Ravello offers accommodation for every style and budget"
            variant="alternate"
        >
            <div className={styles.accommodationsContainer}>
                <div className={styles.intro}>
                    <p>
                        For the night of the wedding recommend staying in Ravello itself for the easiest access to wedding events.
                        The town is small and walkable, and staying nearby means you can fully enjoy the
                        celebration without worrying about transportation. Below are our top recommendations.
                    </p>
                </div>

                <div className={styles.hotelsGrid}>
                    {hotels.map((hotel, index) => (
                        <div key={index} className={styles.hotelCard}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={hotel.image}
                                    alt={hotel.name}
                                    className={styles.hotelImage}
                                />
                                <span className={styles.category}>{hotel.category}</span>
                            </div>

                            <div className={styles.hotelContent}>
                                <div className={styles.hotelHeader}>
                                    <h3 className={styles.hotelName}>{hotel.name}</h3>
                                    <span className={styles.priceRange}>{hotel.priceRange}</span>
                                </div>

                                <p className={styles.distance}>
                                    {/* Clock Icon */}
                                    <svg
                                        className={styles.icon}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    {hotel.distance}
                                </p>

                                <p className={styles.description}>{hotel.description}</p>

                                <div className={styles.amenities}>
                                    {hotel.amenities.map((amenity, i) => (
                                        <span key={i} className={styles.amenity}>
                                            {amenity}
                                        </span>
                                    ))}
                                </div>

                                {hotel.bookingNote && (
                                    <p className={styles.bookingNote}>
                                        <strong>Note:</strong> {hotel.bookingNote}
                                    </p>
                                )}

                                <a
                                    href={hotel.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.bookButton}
                                >
                                    View Hotel
                                    <svg
                                        className={styles.arrowIcon}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.alternativeStays}>
                    <h3 className={styles.alternativeTitle}>Alternative Options</h3>
                    <p className={styles.alternativeText}>
                        If you prefer to stay in Amalfi, Maiori, Praiano, or  Positano these towns are accessible by car or bus
                        (approximately 25-45 minutes). We&apos;ll arrange transportation for wedding events, but
                        please let us know in advance so we can plan accordingly.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Accommodations;
