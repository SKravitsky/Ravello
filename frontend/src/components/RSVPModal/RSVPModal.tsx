'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './RSVPModal.module.scss';

interface RSVPModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type AttendanceStatus = '' | 'yes' | 'no';
type AttendanceDate = '' | 'Wed, August 26th' | 'Fri, August 28th';
type boatStatus = '' | 'yes' | 'no';

export default function RSVPModal({ isOpen, onClose }: RSVPModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attendance, setAttendance] = useState<AttendanceStatus>('');
    const [attendanceDate, setAttendanceDate] = useState<AttendanceDate>('');
    const [guestCount, setGuestCount] = useState('0');
    const [guestNames, setGuestNames] = useState<string[]>(['', '']);
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [songRequest, setSong] = useState('');
    const [message, setMessage] = useState('');
    const [boat, setBoat] = useState('');
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
        setAttendanceDate('');
        setGuestCount('0');
        setGuestNames(['', '']);
        setDietaryRestrictions('');
        setSong('');
        setMessage('');
        setBoat('');
        setSubmitStatus('idle');
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Add the submitter as a guest
        const guests = guestCount;
        const guestWithUser = guestCount + 1;
        setGuestCount(guestWithUser);

        const formData: Record<string, string> = {
            'form-name': 'rsvp',
            name,
            email,
            attendance,
            guestCount,
            attendanceDate,
            dietaryRestrictions,
            songRequest,
            message,
            boat,
        };

        // Add guest names to form data
        guestNames.forEach((guestName, index) => {
            formData[`guestName${index + 1}`] = guestName;
        });

        console.log(formData);
        setGuestCount(guests)

        try {
            const response = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            });

            if (response.ok) {
                setSubmitStatus('success');
            } else {
                console.error('Form submission failed:', response.status, response.statusText);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    const modalContent = submitStatus === 'success' ? (
        <div className={styles.overlay} onClick={handleBackdropClick}>
            <div className={styles.modal} ref={modalRef}>
                <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
                    &times;
                </button>
                <div className={styles.successMessage}>
                    <h2 className={styles.title}>Thank You!</h2>
                    <p className={styles.subtitle}>Your RSVP has been received.</p>
                    <p className={styles.subtitle}>Please check back here regularly for any updates!.</p>
                    <button className={styles.button} onClick={handleClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    ) : (
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
                                    onChange={(e) => {
                                        const newCount = parseInt(e.target.value, 10);
                                        setGuestCount(e.target.value);
                                        setGuestNames(prev => {
                                            const newNames = [...prev];
                                            for (let i = newCount; i < newNames.length; i++) {
                                                newNames[i] = '';
                                            }
                                            return newNames;
                                        });
                                    }}
                                    className={styles.select}
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>

                            {parseInt(guestCount, 10) > 0 && (
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        Guest Name{parseInt(guestCount, 10) > 1 ? 's' : ''} <span className={styles.required}>*</span>
                                    </label>
                                    {Array.from({ length: parseInt(guestCount, 10) }).map((_, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            name={`guestName${index + 1}`}
                                            value={guestNames[index] || ''}
                                            onChange={(e) => {
                                                const newNames = [...guestNames];
                                                newNames[index] = e.target.value;
                                                setGuestNames(newNames);
                                            }}
                                            className={styles.input}
                                            placeholder={`Guest ${index + 1} full name`}
                                            required
                                            style={{ marginTop: index > 0 ? '0.5rem' : '0' }}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className={styles.formGroup}>
                                <label className={styles.label}>
                                    When will you be attending?
                                </label>
                                <div className={styles.radioGroup}>
                                    <label className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="attendanceDate"
                                            value="Wed, August 26th"
                                            checked={attendanceDate === 'Wed, August 26th'}
                                            onChange={(e) => setAttendanceDate(e.target.value as AttendanceDate)}
                                            required
                                        />
                                        <span>Wed, August 26th</span>
                                    </label>
                                    <label className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="attendanceDate"
                                            value="Fri, August 28th"
                                            checked={attendanceDate === 'Fri, August 28th'}
                                            onChange={(e) => setAttendanceDate(e.target.value as AttendanceDate)}
                                        />
                                        <span>Fri, August 28th</span>
                                    </label>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>
                                    Will you be attending the boat tour on Friday, August 28th?
                                </label>
                                <div className={styles.radioGroup}>
                                    <label className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="boat"
                                            value="yes"
                                            checked={boat === 'yes'}
                                            onChange={(e) => setBoat(e.target.value as boatStatus)}
                                            required
                                        />
                                        <span>Yes</span>
                                    </label>
                                    <label className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="boat"
                                            value="no"
                                            checked={boat === 'no'}
                                            onChange={(e) => setBoat(e.target.value as boatStatus)}
                                        />
                                        <span>No</span>
                                    </label>
                                </div>
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

                            <div className={styles.formGroup}>
                                <label htmlFor="songRequest" className={styles.label}>
                                    Share a song request
                                </label>
                                <input
                                    type="text"
                                    id="songRequest"
                                    name="songRequest"
                                    value={songRequest}
                                    onChange={(e) => setSong(e.target.value)}
                                    className={styles.input}
                                    placeholder="Share a song request"
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

    return createPortal(modalContent, document.body);
}
