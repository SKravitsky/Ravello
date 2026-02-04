import Section from '../Section/Section';
import styles from './Attire.module.scss';

const attireGuide = [
    {
        id: 'smart-casual',
        name: 'Smart Casual',
        description: 'A polished yet relaxed look. Slightly elevated from casual—think chinos or tailored pants with a nice top, a midi dress, or a blazer over a casual outfit.',
        examples: 'Chinos, tailored pants, midi dresses, blazers, loafers',
    },
    {
        id: 'relaxed',
        name: 'Relaxed',
        description: 'Comfortable attire for the morning of the wedding. Think loungewear-adjacent—robes, comfortable sets, or casual clothes while getting ready.',
        examples: 'Robes, comfortable loungewear, casual morning attire',
    },
    {
        id: 'comfortable-walking-attire',
        name: 'Comfortable Walking Attire',
        description: 'Practical clothing for tours and activities. Prioritize comfortable shoes, breathable fabrics, and clothes you can move in. Don\'t forget sun protection!',
        examples: 'Walking shoes, breathable fabrics, sun hats, comfortable pants or shorts',
    },
    {
        id: 'resort-casual-swimwear',
        name: 'Resort Casual / Swimwear',
        description: 'Boat day attire! Swimsuits with stylish cover-ups, sandals, and sun protection. If you do not want to go swimming then elegant beachwear, flowy dresses, linen sets, or smart casual with a coastal twist.  Think Mediterranean yacht vibes.',
        examples: 'Swimsuits, cover-ups, kaftans, linen shirts, sandals, sunglasses',
    },
    {
        id: 'dolce-vita-chic',
        name: '"Dolce Vita" Chic',
        description: 'Channel your inner Italian movie star! Fun fabrics, vibrant colors, playful accessories. Think 1960s Riviera glamour—bold prints, statement jewelry, and effortless elegance. No jeans or sneakers!',
        examples: 'Bold prints, vibrant colors, statement jewelry, vintage-inspired pieces, silk scarves',
    },
    {
        id: 'costal-chic',
        name: 'Costal Chic',
        description: 'To mirror the stunning colors of the Amalfi Coast, we invite the ladies to wear cocktail or midi-length dresses in shades of Cornflower Blue or Lemon Yellow. For the gentlemen, we envision a sea of relaxed linen suits in light blue, cream, or sand—no ties required. Help us kick off the weekend by dressing like a Mediterranean summer. No jeans or sneakers!',
        examples: 'Cocktail dresses, linen suits, midi-length dress, dress shoes, elegant accessories',
    },
    {
        id: 'black-tie',
        name: 'Black Tie: Summer Solstice Spectacle',
        description: 'We invite you to celebrate in your finest formal attire. To reflect the vibrant energy of a European summer, we kindly request that women wear floor-length gowns in solid, bold colors. Think sunset oranges, deep magentas, sky blues, and lush greens. We ask that guests refrain from wearing black or patterned fabrics to help us create a cohesive, colorful garden of celebration. Gentlemen, please arrive in a classic tuxedo or formal black suit.',
        examples: 'Floor-length gowns, tuxedos, dark formal suits, elegant jewelry, formal shoes',
    },
    {
        id: 'travel-comfortable',
        name: 'Travel Comfortable',
        description: 'Practical travel attire for your journey to and from the airport. Comfortable yet put-together—you never know who you\'ll meet at the airport!',
        examples: 'Comfortable layers, easy shoes, practical bags',
    },
];

const Attire = () => {
    return (
        <Section
            id="attire"
            title="Attire Guide"
            subtitle="What to wear throughout the week"
        >
            <div className={styles.attireContainer}>
                <p className={styles.intro}>
                    Our wedding week features a variety of occasions, from casual beach days to our formal celebration.
                    Here's a guide to help you pack for each event.
                </p>
                <div className={styles.attireGrid}>
                    {attireGuide.map((attire) => (
                        <div key={attire.id} id={attire.id} className={styles.attireCard}>
                            <h3 className={styles.attireName}>{attire.name}</h3>
                            <p className={styles.attireDescription}>{attire.description}</p>
                            <p className={styles.attireExamples}>
                                <span className={styles.examplesLabel}>Examples:</span> {attire.examples}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Attire;
