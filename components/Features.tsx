"use client";

import styles from "./Features.module.css";
import { useInView } from "@/utils/useInView";

const features = [
  {
    name: "Zero-config deploys",
    desc: "Point Forge at your project root. It detects your runtime, builds, and ships. No config files to maintain unless you want to.",
    tag: "forge deploy",
  },
  {
    name: "Sub-second builds",
    desc: "Incremental compilation with persistent cache. Only changed files rebuild. Cold builds under 3s for most projects.",
    tag: "0.8s avg",
  },
  {
    name: "Multi-region",
    desc: "One command deploys to every region simultaneously. Automatic DNS routing. No CDN config, no origin setup.",
    tag: "12 regions",
  },
  {
    name: "Git-native",
    desc: "Every deploy is tagged with the current commit. Rollback to any previous commit by SHA. Your Git history is your deployment log.",
    tag: "git-integrated",
  },
  {
    name: "Instant rollbacks",
    desc: "Something broke? forge rollback reverts to the last known-good deploy in under 2 seconds. No rebuild, no re-upload.",
    tag: "< 2s",
  },
  {
    name: "Secrets management",
    desc: "Set, rotate, and scope environment variables per deploy. Encrypted at rest. Never touches your repo. forge secrets set DB_URL.",
    tag: "encrypted",
  },
];

export function Features() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="features" className="section">
      <div ref={ref} className={styles.featuresHeader}>
        {isInView && (
          <>
            <div className="sectionEyebrow">Features</div>
            <h2 className="sectionTitle">What it does</h2>
            <p className="sectionDesc">
              Six things. No more. Each one solves a real problem you hit at 2
              AM.
            </p>
          </>
        )}
      </div>
      <div className={styles.featuresGrid}>
        {features.map((f, i) => (
          <div
            key={f.name}
            className={styles.featureCell}
            style={{
              opacity: 0,
              animation: isInView
                ? `fade-in-up var(--duration-slow) var(--ease-out-expo) ${i * 80}ms forwards`
                : "none",
            }}
          >
            <div className={styles.featureName}>{f.name}</div>
            <div className={styles.featureDesc}>{f.desc}</div>
            <div className={styles.featureTag}>{f.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
