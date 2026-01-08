import styles from './Section.module.scss';

type SectionProps = {
    id: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    variant?: 'default' | 'alternate' | 'hero';
    className?: string;
};

const Section = ({
    id,
    title,
    subtitle,
    children,
    variant = 'default',
    className = '',
}: SectionProps) => {
    return (
        <section
            id={id}
            className={`${styles.section} ${styles[variant]} ${className}`}
        >
            <div className={styles.container}>
                {(title || subtitle) && (
                    <div className={styles.header}>
                        {title && <h2 className={styles.title}>{title}</h2>}
                        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                        <div className={styles.divider}>
                            <span className={styles.dividerLine} />
                            <span className={styles.dividerIcon}>&#10022;</span>
                            <span className={styles.dividerLine} />
                        </div>
                    </div>
                )}
                <div className={styles.content}>{children}</div>
            </div>
        </section>
    );
};

export default Section;
