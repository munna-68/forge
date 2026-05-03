import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLogo}>
        <span>&#10095;</span> forge
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#how-it-works">Docs</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}
