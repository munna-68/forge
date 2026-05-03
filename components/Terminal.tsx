import styles from "./Terminal.module.css";

interface TerminalProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ label, children, className }: TerminalProps) {
  return (
    <div className={`${styles.terminal} ${className || ""}`}>
      <div className={styles.terminalBar}>
        <div className={`${styles.terminalDot} ${styles.red}`} />
        <div className={`${styles.terminalDot} ${styles.yellow}`} />
        <div className={`${styles.terminalDot} ${styles.green}`} />
        <span>{label}</span>
      </div>
      <div className={styles.terminalBody}>{children}</div>
    </div>
  );
}
