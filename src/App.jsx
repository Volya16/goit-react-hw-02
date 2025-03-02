import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const updateFeedback = (feedbackType) => {
    console.log("Feedback Type:", feedbackType);
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        reset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
