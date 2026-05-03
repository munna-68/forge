import styles from "./Steps.module.css";
import { Terminal } from "./Terminal";

const steps = [
  {
    num: "01",
    title: "Install and authenticate",
    desc: "One npm install. One login. Forge stores your credentials locally — no session tokens that expire mid-deploy.",
    terminalLabel: "install",
    terminalContent: (
      <>
        <div>
          <span className="prompt">$ </span>
          <span className="cmd">npm install -g forge-cli</span>
        </div>
        <div>
          <span className="prompt">$ </span>
          <span className="cmd">forge login</span>
        </div>
        <div className="dim"> Opening browser for OAuth...</div>
        <div className="success"> ✓ Authenticated as @you</div>
      </>
    ),
  },
  {
    num: "02",
    title: "Initialize your project",
    desc: "Forge inspects your project, detects the framework, and creates a minimal config. Override anything you want — or don't.",
    terminalLabel: "init",
    terminalContent: (
      <>
        <div>
          <span className="prompt">$ </span>
          <span className="cmd">forge init</span>
        </div>
        <div className="dim"> Framework: Next.js 14</div>
        <div className="dim"> Runtime: Node 20</div>
        <div className="dim"> Build cmd: next build</div>
        <div className="success"> ✓ forge.config.ts created</div>
      </>
    ),
  },
  {
    num: "03",
    title: "Deploy to production",
    desc: "Build, upload, route — all in one command. Forge shows you real-time output so you never wonder what's happening.",
    terminalLabel: "deploy",
    terminalContent: (
      <>
        <div>
          <span className="prompt">$ </span>
          <span className="cmd">forge deploy</span>{" "}
          <span className="flag">--prod</span>
        </div>
        <div className="dim"> Build complete (1.2s)</div>
        <div className="dim"> 3 regions updated</div>
        <div className="success"> ✓ Live at my-app.forge.run</div>
      </>
    ),
  },
];

export function Steps() {
  return (
    <section id="how-it-works" className="section">
      <div className={styles.stepsHeader}>
        <div className="sectionEyebrow">How it works</div>
        <h2 className="sectionTitle">Three Commands</h2>
        <p className="sectionDesc">
          Install, connect, deploy. That&apos;s the entire workflow.
        </p>
      </div>
      <div className={styles.steps}>
        {steps.map((s) => (
          <div key={s.num} className={styles.step}>
            <div className={styles.stepNum}>{s.num}</div>
            <div className={styles.stepContent}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Terminal label={s.terminalLabel} className={styles.stepTerminal}>
                {s.terminalContent}
              </Terminal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
