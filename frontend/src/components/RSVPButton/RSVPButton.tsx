'use client';

import { useState } from 'react';
import RSVPModal from '../RSVPModal/RSVPModal';
import styles from './RSVPButton.module.scss';

interface RSVPButtonProps {
    className?: string;
}

export default function RSVPButton({ className }: RSVPButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button className={`${styles.button} ${className || ''}`} onClick={() => setIsModalOpen(true)}>
                RSVP
            </button>
            <RSVPModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
