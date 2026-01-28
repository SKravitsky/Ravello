import Section from '../Section/Section';
import styles from './Accommodations.module.scss';

type Hotel = {
    name: string;
    category: string;
    description: string;
    priceRange: string;
    distance: string;
    amenities: string[];
    image: string;
    bookingNote: string | null;
    website: string;
};

const ravelloHotels: Hotel[] = [
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
];

const maioriHotels: Hotel[] = [
    {
        name: 'Hotel Club Due Torri',
        category: 'Mid-Luxery',
        description: 'A scenic cliffside hotel on the Amalfi Coast with panoramic sea views just steps from Maiori’s sandy beach. Spacious rooms (many with private balconies) overlook the Tyrrhenian Sea, and the property combines relaxed Mediterranean charm with easy access to town and coastal highlights. It is our accommodation for the start of the trip!',
        priceRange: '€€€',
        distance: 'Approx. 3–5 min walk to Maiori Beach and town centre',
        amenities: ['Beach Access', 'Panoramic Sea Views', 'Restaurant', 'Bar', 'Swimming Pool'],
        image: 'https://www.hotel2torri.com/wp-content/uploads/2019/06/es1.jpg',
        bookingNote: 'Our accommodation for the start of the trip',
        website: 'https://www.hotel2torri.com',
    },
    {
        name: 'TBD',
        category: 'TBD',
        description: 'We\'re still researching great options in Maiori. If you have suggestions for hotels in the area, please let us know!',
        priceRange: '€€',
        distance: 'TBD',
        amenities: ['Suggestions Welcome'],
        image: 'https://www.pngkey.com/png/detail/360-3608307_placeholder-hotel-house.png',
        bookingNote: 'Looking for recommendations',
        website: '#',
    },
    {
        name: 'TBD',
        category: 'TBD',
        description: 'We\'re still researching great options in Maiori. If you have suggestions for hotels in the area, please let us know!',
        priceRange: '€€',
        distance: 'TBD',
        amenities: ['Suggestions Welcome'],
        image: 'https://www.pngkey.com/png/detail/360-3608307_placeholder-hotel-house.png',
        bookingNote: 'Looking for recommendations',
        website: '#',
    },
];

const HotelCard = ({ hotel }: { hotel: Hotel }) => (
    <div className={styles.hotelCard}>
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
);

const Accommodations = () => {
    return (
        <Section
            id="accommodations"
            title="Where to Stay"
            subtitle="Accommodation options in Ravello and Maiori"
            variant="alternate"
        >
            <div className={styles.accommodationsContainer}>
                {/* Ravello Section */}
                <div className={styles.locationSection}>
                    <h2 className={styles.locationTitle}>Ravello</h2>
                    <div className={styles.intro}>
                        <p>
                            For the night of the wedding we recommend staying in Ravello itself for the easiest access to wedding events.
                            The town is small and walkable, and staying nearby means you can fully enjoy the
                            celebration without worrying about transportation.
                        </p>
                        <p>
                            Note: Cars cannot fit near the venue, you will need to walk the last 10 minutes!
                        </p>
                    </div>

                    <div className={styles.hotelsGrid}>
                        {ravelloHotels.map((hotel, index) => (
                            <HotelCard key={index} hotel={hotel} />
                        ))}
                    </div>
                </div>

                {/* Maiori Section */}
                <div className={styles.locationSection}>
                    <h2 className={styles.locationTitle}>Maiori</h2>
                    <div className={styles.intro}>
                        <p>
                            Maiori is where we'll be staying at the start of the trip. It's a charming coastal town
                            with the longest beach on the Amalfi Coast and a more relaxed atmosphere than some of
                            the busier tourist spots.
                        </p>
                        <p>
                            We're still looking for more hotel suggestions in this area — if you have recommendations, please let us know!
                        </p>
                    </div>

                    <div className={styles.hotelsGrid}>
                        {maioriHotels.map((hotel, index) => (
                            <HotelCard key={index} hotel={hotel} />
                        ))}
                    </div>
                </div>

                <div className={styles.alternativeStays}>
                    <h3 className={styles.alternativeTitle}>Alternative Stay Options</h3>
                    <p className={styles.alternativeText}>
                        If you prefer to stay in Amalfi, Praiano, or Positano these towns are accessible by car or bus
                        (approximately 25-45 minutes). We will help arrange transportation for wedding events, but
                        please let us know in advance so we can plan accordingly.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Accommodations;
