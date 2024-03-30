import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const calculateAverage = () =>
    (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad);
  const calculatePositive = () => (good / (good + neutral + bad)) * 100;

  return (
    <>
      <h1>statistics</h1>
      {good || neutral || bad ? (
        <>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>average {calculateAverage() || 0}</p>
          <p>positive {calculatePositive() || 0} %</p>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickOnGood = () => setGood(good + 1);
  const handleClickOnNeutral = () => setNeutral(neutral + 1);
  const handleClickOnBad = () => setBad(bad + 1);

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={handleClickOnGood}>good</button>
      <button onClick={handleClickOnNeutral}>neutral</button>
      <button onClick={handleClickOnBad}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
