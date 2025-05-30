import { useState } from 'react';
import './App.css';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const StatisticLine = ({ text, value }) =>{

  return(
    
      <tr>
        <td id="text">{text}</td> 
        <td id="value">{value}</td>
      </tr>
         
  );
  
};

const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
   <table>
    <h1>Statistics</h1>
      <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={(good - bad) / all || 0}/>
      <StatisticLine text="positive" value={`${(good / all) * 100 || 0}%`}/>
    
      </tbody>
   </table>
      
    
      
   
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
 

 const handleGood = () => {
    setGood(good+1);
    setAll(all+1); // Use updatedGood 
  };

  const handleNeutral = () => {
    setNeutral(neutral+1);
    setAll(all+1); // Use updatedNeutral 
  };

  const handleBad = () => {
    setBad(bad+1);
    setAll(all+1); 
  };
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>

      <Statistics good={good} neutral={neutral} bad={bad} all={all} />

    </div>
  );
};

export default App;
