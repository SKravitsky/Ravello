import Section from '../Section/Section';
import styles from './Accommodations.module.scss';

const hotels = [
    {
        name: 'Hotel Caruso',
        category: 'Luxury',
        description: 'A Belmond Hotel perched on the highest point of Ravello, featuring an infinity pool and panoramic views. This is where our welcome events will be held.',
        priceRange: '€€€€',
        distance: '5 min walk to Villa Cimbrone',
        amenities: ['Infinity Pool', 'Spa', 'Fine Dining', 'Gardens'],
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
        bookingNote: 'We have a room block - mention "Steven & Vika Wedding" when booking',
        website: 'https://www.belmond.com/hotels/europe/italy/ravello/belmond-hotel-caruso/',
    },
    {
        name: 'Palazzo Avino',
        category: 'Luxury',
        description: 'A 12th-century palazzo transformed into an elegant five-star hotel with a Michelin-starred restaurant and stunning terraces.',
        priceRange: '€€€€',
        distance: '8 min walk to Villa Cimbrone',
        amenities: ['Private Beach Club', 'Spa', 'Michelin Restaurant', 'Terraces'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
        bookingNote: null,
        website: 'https://www.palazzoavino.com/',
    },
    {
        name: 'Hotel Villa Fraulo',
        category: 'Mid-Range',
        description: 'A charming boutique hotel set in a historic villa with lovely gardens and a pool, offering excellent value in the heart of Ravello.',
        priceRange: '€€€',
        distance: '3 min walk to Villa Cimbrone',
        amenities: ['Pool', 'Garden', 'Restaurant', 'Terrace'],
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
        bookingNote: null,
        website: 'https://www.villafraulo.com/',
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
                        We recommend staying in Ravello itself for the easiest access to wedding events.
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
                        If you prefer to stay in Amalfi or Positano, both towns are accessible by car or bus
                        (approximately 30-45 minutes). We&apos;ll arrange transportation for wedding events, but
                        please let us know in advance so we can plan accordingly.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Accommodations;
