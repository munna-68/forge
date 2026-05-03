"use client";

import styles from "./Pricing.module.css";
import { useInView } from "@/utils/useInView";

const plans = [
  {
    tier: "Hobby",
    price: "$0",
    desc: "For personal projects and experiments.",
    features: [
      "1 project",
      "1 region",
      "100 GB bandwidth / mo",
      "Community support",
      "Instant rollbacks",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    tier: "Pro",
    price: "$29",
    desc: "For shipping products that matter.",
    features: [
      "Unlimited projects",
      "All 12 regions",
      "1 TB bandwidth / mo",
      "Priority support",
      "Secrets management",
      "Custom domains",
      "Deploy hooks",
    ],
    cta: "Get Pro",
    featured: true,
  },
  {
    tier: "Team",
    price: "$99",
    desc: "For teams that deploy daily.",
    features: [
      "Everything in Pro",
      "5 team members",
      "Unlimited bandwidth",
      "SSO / SAML",
      "Audit logs",
      "SLA (99.99%)",
      "Dedicated support",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

export function Pricing() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [gridRef, gridInView] = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="pricing" className="section">
      <div
        ref={headerRef}
        className={`${styles.pricingHeader} ${headerInView ? styles.visible : ""}`}
      >
        <div className="sectionEyebrow">Pricing</div>
        <h2 className="sectionTitle">Pay for what you use</h2>
        <p className="sectionDesc">
          Free for side projects. Scales when you do. No credit card to start.
        </p>
      </div>
      <div ref={gridRef} className={styles.pricingGrid}>
        {plans.map((p, i) => (
          <div
            key={p.tier}
            className={`${styles.pricingCard} ${p.featured ? styles.featured : ""}`}
            style={{
              opacity: 0,
              animation: gridInView
                ? `fade-in-up var(--duration-slow) var(--ease-out-expo) ${i * 100}ms forwards`
                : "none",
            }}
          >
            <div className={styles.pricingTier}>{p.tier}</div>
            <div className={styles.pricingPrice}>
              {p.price} <span>/ mo</span>
            </div>
            <div className={styles.pricingDesc}>{p.desc}</div>
            <ul className={styles.pricingFeatures}>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href="#install" className={styles.pricingCta}>
              {p.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
