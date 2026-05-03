"use client";

import styles from "./Footer.module.css";
import { useInView } from "@/utils/useInView";

export function Footer() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <footer id="install" className={styles.footer}>
      <div
        ref={ref}
        className={styles.footerCta}
        style={{
          opacity: 0,
          animation: isInView
            ? "fade-in-up var(--duration-slow) var(--ease-out-expo) forwards"
            : "none",
        }}
      >
        <h2>Ship it.</h2>
        <p>One command. Production in under 5 seconds.</p>
        <div className={styles.footerInstall}>
          <span className="prompt">$ </span>
          npm install -g forge-cli
        </div>
      </div>
      <ul className={styles.footerLinks}>
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">GitHub</a>
        </li>
        <li>
          <a href="#">Changelog</a>
        </li>
        <li>
          <a href="#">Status</a>
        </li>
        <li>
          <a href="#">Discord</a>
        </li>
      </ul>
      <div className={styles.footerCopy}>
        Forge CLI &mdash; built for developers who&apos;d rather type than
        click.
      </div>
    </footer>
  );
}
