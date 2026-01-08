'use client';

import { useState } from 'react';
import Section from '../Section/Section';
import styles from './FAQ.module.scss';

const faqs = [
    {
        question: 'What is the dress code?',
        answer: 'The wedding ceremony and reception are Black Tie Optional. For gentlemen, this means a dark suit or tuxedo. For ladies, a floor-length gown or elegant cocktail dress. Keep in mind the venue has outdoor areas and stone pathways—block heels or wedges are recommended over stilettos. Other events throughout the weekend are more casual—check the schedule for specific dress codes.',
    },
    {
        question: 'When should I RSVP by?',
        answer: 'Please RSVP by June 1, 2026. This gives us enough time to finalize arrangements with our vendors. We need accurate headcounts for catering, seating, and transportation.',
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
        answer: 'Yes! We will provide shuttle service between Hotel Caruso and Villa Cimbrone for all wedding events. For guests staying at other accommodations, please let us know and we\'ll help coordinate transportation.',
    },
    {
        question: 'What is the weather like in late August?',
        answer: 'Late August in Ravello is typically warm and sunny, with temperatures around 28-32°C (82-90°F). Evenings can be cooler, especially with the sea breeze, so bring a light wrap or jacket for the outdoor reception. Rain is unlikely but we have contingency plans just in case!',
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
        question: 'What if I have more questions?',
        answer: 'We\'re here to help! Feel free to reach out to us directly at wedding@stevenandvika.com or call/text us. We want to make sure you have all the information you need for a wonderful trip.',
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
                    <a href="mailto:wedding@stevenandvika.com" className={styles.contactButton}>
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
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
