import styles from "./page.module.css";
import { GDPRPrompt, HomepageLayout, Logo } from "./local";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Logo className={styles.logo} />
      </header>
      <main>
        <GDPRPrompt />
        <HomepageLayout />
      </main>
    </>
  );
}
