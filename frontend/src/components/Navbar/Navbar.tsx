'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import RSVPButton from '../RSVPButton/RSVPButton';
import styles from './Navbar.module.scss';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/accommodations', label: 'Accommodations' },
    { href: '/tours', label: 'Tours' },
    { href: '/our-favorite-spots', label: 'Our Favorite Spots' },
    { href: '/travel', label: 'Travel' },
];

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Close drawer when window is resized to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsDrawerOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isDrawerOpen]);

    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                {/* Desktop Navigation */}
                <ul className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={styles.navLink}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <RSVPButton className={styles.rsvpButton} />
                    </li>
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                    className={styles.hamburger}
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isDrawerOpen}
                >
                    <span className={`${styles.hamburgerLine} ${isDrawerOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isDrawerOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isDrawerOpen ? styles.open : ''}`}></span>
                </button>
            </div>

            {/* Mobile Drawer Overlay */}
            <div
                className={`${styles.overlay} ${isDrawerOpen ? styles.visible : ''}`}
                onClick={closeDrawer}
                aria-hidden="true"
            />

            {/* Mobile Drawer */}
            <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ''}`}>
                <ul className={styles.drawerNav}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={styles.drawerLink}
                                onClick={closeDrawer}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li className={styles.drawerRsvp}>
                        <RSVPButton className={styles.rsvpButtonMobile} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
