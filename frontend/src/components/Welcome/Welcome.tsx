'use client';

import { useState } from 'react';
import Section from '../Section/Section';
import styles from './Welcome.module.scss';

const Welcome = () => {
    // const [boatName, setBoatName] = useState('');
    // const [boatEmail, setBoatEmail] = useState('');
    // const [boatGuests, setBoatGuests] = useState('1');
    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // const handleMailto = (e: React.MouseEvent<HTMLAnchorElement>, email: string, subject: string) => {
    //     e.preventDefault();
    //     window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    // };

    // const handleBoatRsvp = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);

    //     const formData: Record<string, string> = {
    //         'form-name': 'boat-trip-rsvp',
    //         name: boatName,
    //         email: boatEmail,
    //         guests: boatGuests,
    //     };

    //     try {
    //         const response = await fetch('/__forms.html', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //             body: new URLSearchParams(formData).toString(),
    //         });

    //         if (response.ok) {
    //             setSubmitStatus('success');
    //             setBoatName('');
    //             setBoatEmail('');
    //             setBoatGuests('1');
    //         } else {
    //             console.error('Form submission failed:', response.status, response.statusText);
    //             setSubmitStatus('error');
    //         }
    //     } catch (error) {
    //         console.error('Form submission error:', error);
    //         setSubmitStatus('error');
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    return (
        <Section
            id="welcome"
            title="Ciao!"
            subtitle="A message from Vika & Steven"
        >
            <div className={styles.welcomeContainer}>
                <div className={styles.messageContent}>
                    <p className={styles.greeting}>
                        We are so excited to see you in Italy. We cannot imagine celebrating our
                        wedding without you and are incredibly grateful you are making the trip.
                        </p>
                        <p className={styles.greeting}>
                        The Amalfi Coast is our favorite place, one we cherish the most, and we
                        can&apos;t wait to spend time in such a special location with all of our loved ones.
                    </p>
                </div>

                <div className={styles.boatTripCard}>
                    <div className={styles.boatTripIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 17h18M5 12l7-7 7 7M5 12v5h14v-5" />
                            <path d="M2 20c1.5-1 3-1.5 5-1.5s3.5.5 5 1.5c1.5-1 3-1.5 5-1.5s3.5.5 5 1.5" />
                        </svg>
                    </div>
                    <h3 className={styles.boatTripTitle}>Private Boat Day to Capri</h3>
                    <p className={styles.boatTripDate}>Friday, August 28th, 2026</p>
                    <p className={styles.boatTripDescription}>
                        We&apos;re taking a private boat from the Amalfi Coast to Capri! Join us for
                        Prosecco, swimming in hidden coves, and views of the famous Faraglioni rocks.
                    </p>

                    {/* {submitStatus === 'success' ? (
                        <div className={styles.successMessage}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Thank you! Your RSVP has been received.</span>
                        </div>
                    ) : (
                        <form
                            name="boat-trip-rsvp"
                            method="POST"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                            onSubmit={handleBoatRsvp}
                            className={styles.boatForm}
                        >
                            <input type="hidden" name="form-name" value="boat-trip-rsvp" />
                            <p className={styles.hidden}>
                                <label>
                                    Don&apos;t fill this out: <input name="bot-field" />
                                </label>
                            </p>

                            {submitStatus === 'error' && (
                                <p className={styles.errorMessage}>Something went wrong. Please try again.</p>
                            )}

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="boat-name" className={styles.formLabel}>
                                        Name <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="boat-name"
                                        name="name"
                                        value={boatName}
                                        onChange={(e) => setBoatName(e.target.value)}
                                        className={styles.formInput}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="boat-email" className={styles.formLabel}>
                                        Email <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="boat-email"
                                        name="email"
                                        value={boatEmail}
                                        onChange={(e) => setBoatEmail(e.target.value)}
                                        className={styles.formInput}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="boat-guests" className={styles.formLabel}>
                                        Guests
                                    </label>
                                    <select
                                        id="boat-guests"
                                        name="guests"
                                        value={boatGuests}
                                        onChange={(e) => setBoatGuests(e.target.value)}
                                        className={styles.formSelect}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={styles.rsvpButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'RSVP for Boat Trip'}
                            </button>
                        </form>
                    )} */}
                </div>

                <div className={styles.toursInfo}>
                    <p className={styles.toursText}>
                        We have coordinated day trips for you while on the Amalfi Coast, including
                        tours to Positano, Pompeii, and Italian cooking classes. Unfortunately, we
                        won&apos;t be able to attend all of these tours with you as we have lots to do
                        in the days leading up to the wedding!
                    </p>
                </div>

                <div className={styles.contactCard}>
                    <p className={styles.contactIntro}>
                        If you need assistance booking accommodations, transportation, tours, or have
                        general questions, please contact our wonderful wedding planner:
                    </p>
                    <div className={styles.plannerInfo}>
                        <span className={styles.plannerName}>Maryla Colandrea</span>
                        <span className={styles.plannerCompany}>Art of Perfection Events</span>
                    </div>
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
                </div>

                <p className={styles.signoff}>
                    See you in Italia!
                    <span className={styles.signature}>With love, Vika & Steven</span>
                </p>
            </div>
        </Section>
    );
};

export default Welcome;
