import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "@/styles/main.scss";
import styles from "./layout.module.scss";
import PasswordProtection from "@/components/PasswordProtection/PasswordProtection";
import Navbar from "@/components/Navbar/Navbar";

const fontPrimary = Cormorant_Garamond({
    variable: "--font-primary",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
});

const fontSecondary = Montserrat({
    variable: "--font-secondary",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
    title: "Viktoryia & Steven | August 31, 2026 | Ravello, Italy",
    description: "Join us for our wedding celebration at Villa Cimbrone in Ravello, Italy on August 31, 2026.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fontPrimary.variable} ${fontSecondary.variable}`}>
                {/* Hidden form for Netlify to detect at build time
                <form
                    name="rsvp"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    style={{ display: 'none' }}
                >
                    <input type="hidden" name="form-name" value="rsvp" />
                    <input type="text" name="bot-field" />
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <input type="text" name="attendance" />
                    <input type="text" name="guestCount" />
                    <input type="text" name="dietaryRestrictions" />
                    <textarea name="message" />
                </form> */}

                <PasswordProtection>
                    <header className={styles.header}>
                        <Navbar />
                    </header>
                    <div className={styles.content}>{children}</div>
                </PasswordProtection>
            </body>
        </html>
    );
}
