import Image from 'next/image';
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
        image: '/images/hotels/villa-cimbrone.jpg',
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
        image: '/images/hotels/villa-eva.jpg',
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
        image: '/images/hotels/hotel-giordano.jpg',
        bookingNote: null,
        website: 'https://www.giordanohotel.it/',
    },
    {
        name: 'Hotel Parsifal',
        category: 'Mid-Range',
        description: 'A charming, family-run hotel set in a converted 13th-century convent perched above the Amalfi Coast. With panoramic sea and valley views, beautifully restored cloisters, floral gardens, and traditional Mediterranean ambience, it is just a short stroll from the main Ravello piazza and cultural highlights like Villa Rufolo and Villa Cimbrone.',
        priceRange: '€€€',
        distance: '15 min walk to Villa Cimbrone',
        amenities: ['Sea & Valley Views', 'Historic Cloister Garden', 'Bar & Terrace'],
        image: '/images/hotels/hotel-parsifal.jpg',
        bookingNote: null,
        website: 'https://hotelparsifal.it/en/',
    },
];

const maioriHotels: Hotel[] = [
    {
        name: 'Hotel Club Due Torri',
        category: 'Mid-Luxury',
        description: 'A scenic cliffside hotel on the Amalfi Coast with panoramic sea views just steps from Maiori’s sandy beach. Spacious rooms (many with private balconies) overlook the Tyrrhenian Sea, and the property combines relaxed Mediterranean charm with easy access to town and coastal highlights. It is our accommodation for the start of the trip!',
        priceRange: '€€€',
        distance: 'Approx. 3–5 min walk to Maiori Beach and town centre',
        amenities: ['Beach Access', 'Panoramic Sea Views', 'Restaurant', 'Bar', 'Swimming Pool'],
        image: '/images/hotels/hotel-due-torri.jpg',
        bookingNote: 'This is where we have a wedding block',
        website: 'https://www.hotel2torri.com',
    },
        {
        name: 'Residence Due Torri',
        category: 'Apartment Residence',
        description: 'A charming apartment-style residence elevated above the sea with terraced grounds and citrus groves, offering stunning views overlooking the entire Amalfi Coast and the Acqua Chiara valley. Choose from sea view or garden view studios and one-bedroom apartments in this UNESCO heritage setting at the entrance of Maiori.',
        priceRange: '€€',
        distance: 'At the entrance of Maiori, short walk to beach',
        amenities: ['Sea Views', 'Garden Views', 'Terraced Citrus Groves', 'Terraced Grounds', 'Fully Equipped Kitchenettes'],
        image: '/images/hotels/residence-due-torri.jpg',
        bookingNote: 'Reach out to Maryla to book here',
        website: 'https://residenceduetorri.it/en/the-residence/',
    },
        {
        name: 'Al Raggio di Sole in Costiera',
        category: 'Bed & Breakfast',
        description: 'A charming, boutique guesthouse in the heart of Maiori just steps from the sea, offering individually styled double rooms with sea or town views. Guests enjoy authentic Italian hospitality, modern comforts like free Wi-Fi and air conditioning, and easy access to local beaches, shops, and ferries along the Amalfi Coast. The property also provides connections to the nearby Torre Normanna Beach Club for a more relaxing seaside experience.',
        priceRange: '€€',
        distance: 'Just metres from the sea, 10 min walk to Maiori port',
        amenities: ['Close to Beach & Seafront', 'Restaurant', 'Easy Access to Torre Normanna Beach Club (via shuttle or arrangement)'],
        image: '/images/hotels/al-raggio-di-sole.jpg',
        bookingNote: null,
        website: 'https://alraggiodisoleincostiera.it/al-raggio-di-sole-en/',
    }
];

const HotelCard = ({ hotel }: { hotel: Hotel }) => (
    <div className={styles.hotelCard}>
        <div className={styles.imageWrapper}>
            <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
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
                    <circle cx="12" cy="4" r="1.5" />
                    <path d="M9 8.5l-1.5 5 2.5 1 1 4" />
                    <path d="M15 8.5l1.5 5-2.5 1-1 4" />
                    <path d="M9 8.5h6l-1 4H10l-1-4z" />
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
                            Please note that cars are unable to access Villa Cimbrone. Guests will reach the venue on foot via a scenic walk; comfortable footwear is recommended.
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
                            Note: Maiori has its own ferry terminal so getting around is easy!
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
                        (approximately 25-45 minutes).
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Accommodations;
