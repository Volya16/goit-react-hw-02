import styles from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div className={styles.container}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive} %</p>
    </div>
  );
}
