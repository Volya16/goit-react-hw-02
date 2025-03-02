import styles from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad, total }) {
  return (
    <div className={styles.container}>
      <p className="styles.text">Good: {good}</p>
      <p className="styles.text">Neutral: {neutral}</p>
      <p className="styles.text">Bad: {bad}</p>
      <p className="styles.text">Total: {total}</p>
      <p className="styles.text">Positive: 0</p>
    </div>
  );
}
