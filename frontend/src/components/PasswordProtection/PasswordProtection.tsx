'use client';

import { useState, useEffect } from 'react';
import styles from './PasswordProtection.module.scss';

interface PasswordProtectionProps {
    children: React.ReactNode;
}

export default function PasswordProtection({ children }: PasswordProtectionProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const auth = localStorage.getItem('wedding-auth');
        if (auth === 'authenticated') {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password.toLowerCase() === 'aspen') {
            setIsAuthenticated(true);
            localStorage.setItem('wedding-auth', 'authenticated');
            setError('');
        } else {
            setError('Incorrect password. Please try again.');
            setPassword('');
        }
    };

    if (isLoading) {
        return null;
    }

    if (!isAuthenticated) {
        return (
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Welcome</h1>
                    <p className={styles.subtitle}>Please enter the password to continue</p>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className={styles.input}
                            autoFocus
                        />
                        {error && <p className={styles.error}>{error}</p>}
                        <button type="submit" className={styles.button}>
                            Enter
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
