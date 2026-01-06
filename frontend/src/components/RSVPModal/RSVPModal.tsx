'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './RSVPModal.module.scss';

interface RSVPModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type AttendanceStatus = '' | 'yes' | 'no';

export default function RSVPModal({ isOpen, onClose }: RSVPModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attendance, setAttendance] = useState<AttendanceStatus>('');
    const [guestCount, setGuestCount] = useState('1');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Close when clicking outside the modal
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setAttendance('');
        setGuestCount('1');
        setDietaryRestrictions('');
        setMessage('');
        setSubmitStatus('idle');
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
            });

            if (response.ok) {
                setSubmitStatus('success');
            } else {
                setSubmitStatus('error');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    if (submitStatus === 'success') {
        return (
            <div className={styles.overlay} onClick={handleBackdropClick}>
                <div className={styles.modal} ref={modalRef}>
                    <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
                        &times;
                    </button>
                    <div className={styles.successMessage}>
                        <h2 className={styles.title}>Thank You!</h2>
                        <p className={styles.subtitle}>Your RSVP has been received.</p>
                        <button className={styles.button} onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.overlay} onClick={handleBackdropClick}>
            <div className={styles.modal} ref={modalRef}>
                <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
                    &times;
                </button>

                <h2 className={styles.title}>RSVP</h2>
                <p className={styles.subtitle}>We can&apos;t wait to celebrate with you!</p>

                {submitStatus === 'error' && (
                    <p className={styles.error}>Something went wrong. Please try again.</p>
                )}

                <form
                    name="rsvp"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className={styles.form}
                >
                    {/* Hidden fields for Netlify */}
                    <input type="hidden" name="form-name" value="rsvp" />
                    <p className={styles.hidden}>
                        <label>
                            Don&apos;t fill this out: <input name="bot-field" />
                        </label>
                    </p>

                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            Full Name <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.input}
                            required
                            autoFocus
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            Email Address <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            Will you be attending? <span className={styles.required}>*</span>
                        </label>
                        <div className={styles.radioGroup}>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="yes"
                                    checked={attendance === 'yes'}
                                    onChange={(e) => setAttendance(e.target.value as AttendanceStatus)}
                                    required
                                />
                                <span>Joyfully Accept</span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="no"
                                    checked={attendance === 'no'}
                                    onChange={(e) => setAttendance(e.target.value as AttendanceStatus)}
                                />
                                <span>Regretfully Decline</span>
                            </label>
                        </div>
                    </div>

                    {attendance === 'yes' && (
                        <>
                            <div className={styles.formGroup}>
                                <label htmlFor="guestCount" className={styles.label}>
                                    Number of Guests
                                </label>
                                <select
                                    id="guestCount"
                                    name="guestCount"
                                    value={guestCount}
                                    onChange={(e) => setGuestCount(e.target.value)}
                                    className={styles.select}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="dietaryRestrictions" className={styles.label}>
                                    Dietary Restrictions
                                </label>
                                <input
                                    type="text"
                                    id="dietaryRestrictions"
                                    name="dietaryRestrictions"
                                    value={dietaryRestrictions}
                                    onChange={(e) => setDietaryRestrictions(e.target.value)}
                                    className={styles.input}
                                    placeholder="e.g., vegetarian, gluten-free, allergies"
                                />
                            </div>
                        </>
                    )}

                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>
                            Message for the Couple
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={styles.textarea}
                            rows={3}
                            placeholder="Share your well wishes..."
                        />
                    </div>

                    <button type="submit" className={styles.button} disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Submit RSVP'}
                    </button>
                </form>
            </div>
        </div>
    );
}
