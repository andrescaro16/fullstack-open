import { useState } from "react";

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

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  );
};

export default App;
