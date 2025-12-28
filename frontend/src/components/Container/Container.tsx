import styles from "./Container.module.scss";

type ContainerProps = {
    children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>{children}</div>
        </div>
    );
};

export default Container;
