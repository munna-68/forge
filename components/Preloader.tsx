"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.preloader}>
      <div className={styles.preloaderContent}>
        <div className={styles.logo}>
          <span className={styles.accent}>&#10095;</span> forge
        </div>
        <div className={styles.loading}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>
    </div>
  );
}
