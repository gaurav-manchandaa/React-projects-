import { Fragment } from "react";
import UserInput from "./Components/UserInput";
import Header from "./Components/Header";
import { useState } from "react";
import {calculateInvestmentResults} from './util/investment.js'
import Result from "./Components/Result";
function App() {



  const [Data, setData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });



  function HandelChange(event) {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(Data);
    
    console.log(displaydata);
  }
  let displaydata = calculateInvestmentResults(Data);


  return (
    <Fragment>
      <Header />
      <UserInput onselect={HandelChange} />
      <Result displaydata={displaydata}/>
    </Fragment>
  );
}



export default App;
// we will have header section then we will have inputuser section
// in the input user section
// we will be having four input fields these
// fields will be operated
// i need this initialivestment
// annual invsetment
// and all these ammount in the app.jsx file
// so that i can calculate in and can send it to the
