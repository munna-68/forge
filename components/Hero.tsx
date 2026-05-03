import styles from "./Hero.module.css";
import { Terminal } from "./Terminal";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          Deploy from
          <br />
          the terminal.
          <br />
          <span className={styles.accent}>Nothing else.</span>
        </h1>
        <p className={styles.heroDeck}>
          Forge CLI ships your code to production in one command. No dashboards.
          No YAML pipelines. No waiting. Git-native, zero-config, instant
          rollbacks.
        </p>
        <div className={styles.heroCta}>
          <a href="#install" className={styles.btnPrimary}>
            $ npm install -g forge-cli
          </a>
          <a href="#how-it-works" className={styles.btnGhost}>
            Read the docs &rarr;
          </a>
        </div>
      </div>
      <div className={styles.heroTerminal}>
        <Terminal label="~/my-app — zsh">
          <>
            <div>
              <span className="prompt">$ </span>
              <span className="cmd">forge init</span>
            </div>
            <div className="dim"> Detected Node.js project</div>
            <div className="dim"> Created forge.config.ts</div>
            <br />
            <div>
              <span className="prompt">$ </span>
              <span className="cmd">forge deploy</span>{" "}
              <span className="flag">--prod</span>
            </div>
            <div className="dim"> Building...</div>
            <div className="dim"> Uploading 3 assets (2.4 MB)</div>
            <div className="success"> ✓ Deployed to us-east-1 (1.2s)</div>
            <div className="success"> ✓ Deployed to eu-west-1 (0.8s)</div>
            <div className="success"> ✓ Deployed to ap-southeast-1 (1.1s)</div>
            <br />
            <div className="dim"> Live at &rarr; </div>
            <span style={{ color: "var(--accent)" }}>my-app.forge.run</span>
            <br />
            <br />
            <div>
              <span className="prompt">$ </span>
              <span className="cursor" />
            </div>
          </>
        </Terminal>
      </div>
    </section>
  );
}
