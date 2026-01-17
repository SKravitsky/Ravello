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
            subtitle="A message from Viktoryia & Steven"
        >
            <div className={styles.welcomeContainer}>
                <div className={styles.messageContent}>
                    <p className={styles.greeting}>
                        We are so excited to celebrate with you in Italy and feel increidbly lucky to have you there. 
                        Thank you for making the journey to be part of such a special moment in our lives.
                        </p>
                    <p className={styles.greeting}>
                        The Amalfi Coast is our favorite place, one we cherish the most, and we
                        can&apos;t wait to spend time in such a special location with all of our loved ones.
                    </p>
                    <p className={styles.greeting}>
                        We have coordinated day trips for you while on the Amalfi Coast, including
                        tours to Positano, Capri, and cooking classes. Unfortunately, we
                        won&apos;t be able to attend all of these tours with you as we have lots to do
                        in the days leading up to the wedding!
                    </p>
                </div>

                {/* <div className={styles.toursInfo}>
                    <p className={styles.toursText}>
                        
                    </p>
                </div> */}

                <p className={styles.signoff}>
                    See you in Italia!
                    <span className={styles.signature}>With love, Viktoryia & Steven</span>
                </p>

                <br/>

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
            </div>
        </Section>
    );
};

export default Welcome;
