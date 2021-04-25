import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.branding}>
        <p className={styles.branding}>
          <span>{"</>"}</span>Dawood Shahat
        </p>
      </Link>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="/blog">Writings</Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="/resume">Resume</Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
