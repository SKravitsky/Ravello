import Image from "next/image";
import styles from "./page.module.scss";
import Container from "@/components/Container/Container";

export default function Home() {
    return (
            <main>
                <Container>
                    <Image
                        className={styles.logo}
                        src="/next.svg"
                        alt="Next.js logo"
                        width={100}
                        height={20}
                        priority
                    />
                    <h1>To get started, edit the page.tsx file.</h1>
                </Container>
            </main>
    );
}
