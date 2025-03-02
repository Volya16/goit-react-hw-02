import styles from "./Options.module.css";

export default function Options({
  updateFeedback,
  good,
  neutral,
  bad,
  total,
  reset,
}) {
  return (
    <div className={styles.container}>
      <button onClick={() => updateFeedback("good")} className={styles.button}>
        Good
      </button>

      <button
        onClick={() => updateFeedback("neutral")}
        className={styles.button}
      >
        Neutral
      </button>

      <button onClick={() => updateFeedback("bad")} className={styles.button}>
        Bad
      </button>

      {total === 0 || (
        <button onClick={reset} className={styles.button}>
          Reset
        </button>
      )}
    </div>
  );
}
