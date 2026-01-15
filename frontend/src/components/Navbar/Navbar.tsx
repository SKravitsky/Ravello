'use client';

import { useState, useEffect } from 'react';
import RSVPButton from '../RSVPButton/RSVPButton';
import styles from './Navbar.module.scss';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#welcome', label: 'Welcome' },
    { href: '#our-story', label: 'Our Story' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#accommodations', label: 'Accommodations' },
    { href: '#travel', label: 'Travel' },
    { href: '#things-to-do', label: 'Things To Do' },
    { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

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

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.slice(1));
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
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

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);

        if (element) {
            const headerOffset = 48;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        closeDrawer();
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                {/* Desktop Navigation */}
                <ul className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
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
                            <a
                                href={link.href}
                                className={`${styles.drawerLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
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
