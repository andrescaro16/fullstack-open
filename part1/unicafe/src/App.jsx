import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const calculateAverage = () =>
    (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad);
  const calculatePositive = () => (good / (good + neutral + bad)) * 100;

  return (
    <>
      <h1>statistics</h1>
      {good || neutral || bad ? (
        <>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="average" value={calculateAverage() || 0} />
          <StatisticLine text="positive" value={calculatePositive() || 0} />
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

      <Button handleClick={handleClickOnGood} text="good" />
      <Button handleClick={handleClickOnNeutral} text="neutral" />
      <Button handleClick={handleClickOnBad} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
