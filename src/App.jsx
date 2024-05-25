import UserInput from "../components/UserInput"
import Header from "../components/header"
import Results from "../components/Results";
import { useState } from "react";

function App() {

  const[userInput,setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
       return{
          ...prevUserInput,
          [inputIdentifier]: +newValue
        
       }
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange = {handleChange} userInput =  {userInput}/>
      {/* Results will come here */}
      {!inputIsValid && <p className="center  "> plz enter duration greater than zero.</p>}
      {inputIsValid && <Results userInput={userInput}/>}

    </>
    
  )
}

export default App
