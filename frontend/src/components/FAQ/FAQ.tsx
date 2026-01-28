'use client';

import { useState } from 'react';
import Section from '../Section/Section';
import styles from './FAQ.module.scss';

const faqs = [
    {
        question: 'What is the dress code?',
        answer: 'The wedding ceremony and reception are Black Tie. Ladies: embrace the romance with long dresses in soft hues—consider bringing a shawl for the evening, chunky heels for the garden pathways, and a spare pair of dancing shoes! Gentlemen: formal wear is requested, and an extra collared shirt is not a bad idea as the August sun can be warm. For the Welcome Dinner, think "Dolce Vita" Chic—fun fabrics, vibrant colors, and playful accessories. For the Rehearsal Dinner, Italian Elegance—sophisticated cocktail dresses or tailored suits, no jeans please.',
    },
    {
        question: 'When should I RSVP by?',
        answer: 'Please RSVP as soon as you can with the last day to respond being June 1, 2026. This gives us enough time to finalize arrangements with our vendors. We need accurate headcounts for catering, seating, and transportation.',
    },
    {
        question: 'Can I bring a plus one?',
        answer: 'Due to venue capacity, we can only accommodate guests who are specifically named on the invitation. If you received a plus one, it will be noted on your invitation. We hope you understand!',
    },
    {
        question: 'Are children welcome?',
        answer: 'While we love your little ones, our wedding will be an adults-only celebration. We hope this gives you a chance to enjoy a romantic getaway on the Amalfi Coast!',
    },
    {
        question: 'Will transportation be provided?',
        answer: 'Yes! We will provide pickup from Naples Airport to your first hotel as a courtesy for traveling. For guests staying at other accommodations, please let us know and we\'ll help coordinate transportation.',
    },
    {
        question: 'What is the weather like in late August?',
        answer: 'Late August in Ravello is typically warm and sunny, with temperatures around 28-32°C (82-90°F). Evenings can be cooler, especially with the sea breeze, so bring a light wrap or jacket for the outdoor reception. Rain is unlikely but we have contingency plans just in case!',
    },
    {
        question: 'What currency is used and how should I handle money?',
        answer: 'The currency in Italy is the Euro. We advise exchanging dollars for euros before your departure. ATMs are available but typically limit withdrawals to 500 euros per day. Be sure to notify your bank that you will be traveling outside the country to avoid any card issues.',
    },
    {
        question: 'What should I pack for the trip?',
        answer: 'Don\'t forget your power adapter converter for European outlets! We also suggest a portable USB phone charger as Amalfi Coast outlets can be scarce and internet isn\'t always strong. If traveling with others and checking bags, consider mixing belongings between suitcases in case one is lost. We recommend bringing wedding attire in your carry-on. AirTags are a great investment for all luggage!',
    },
    {
        question: 'I get motion sickness - any tips for the Amalfi Coast roads?',
        answer: 'The winding coastal roads are beautiful but can be challenging for those prone to motion sickness! We recommend purchasing "Sea-Bands" and ginger candy before your arrival. These will help both on the roads and during our boat day to Capri.',
    },
    {
        question: 'How do I book tours or get help with accommodations?',
        answer: 'Our wonderful wedding planner Maryla Colandrea can assist with booking accommodations, transportation, tours, or answer any questions. Contact her at info@artofperfectionevents.com with your details.',
    },
    {
        question: 'Is there a gift registry?',
        answer: 'Your presence at our wedding is the greatest gift! However, if you wish to give a gift, we have a small registry available. We also welcome contributions to our honeymoon fund. Details will be included with your invitation.',
    },
    {
        question: 'Do I need a visa to travel to Italy?',
        answer: 'US citizens do not need a visa for stays up to 90 days in Italy/the Schengen Area. Make sure your passport is valid for at least 6 months beyond your travel dates. Travelers from other countries should check visa requirements for Italy.',
    },
    {
        question: 'Will there be vegetarian/vegan options?',
        answer: 'Absolutely! Italian cuisine offers wonderful vegetarian dishes. Please indicate any dietary restrictions or allergies on your RSVP card, and we\'ll ensure you\'re well taken care of.',
    },
    {
        question: 'What nightlife options are on the Amalfi Coast?',
        answer: 'There\'s plenty to explore! In Amalfi: Masaniello Art Cafe, Marinella Beach Club, and Hotel la Bussola Sea Waves bar. In Praiano: Africana Famous Club. In Positano: Music on the Rocks. In Minori: Rada Beach Club. In Ravello: Le Mosaique Club near Hotel Giordano.',
    },
    {
        question: 'What if I have more questions?',
        answer: 'We\'re here to help! Feel free to reach out to contact our wedding planner Maryla at info@artofperfectionevents.com. We want to make sure you have all the information you need for a wonderful trip!',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section
            id="faq"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know"
        >
            <div className={styles.faqContainer}>
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className={styles.faqIcon}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </span>
                            </button>
                            <div className={styles.faqAnswer}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.contactBox}>
                    <h3>Still have questions?</h3>
                    <p>We&apos;re happy to help with anything you need.</p>
                    <a
                        href="mailto:info@artofperfectionevents.com?subject=Question%20-%20Vika%20%26%20Steven%20Wedding"
                        className={styles.contactButton}
                        // onClick={(e) => handleMailto(e, 'info@artofperfectionevents.com', 'Question - Vika & Steven Wedding')}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        info@artofperfectionevents.com
                    </a>
                    {/* <a href="mailto:" className={styles.contactButton}>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Email Us
                    </a> */}
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
