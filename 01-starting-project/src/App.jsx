import Header from './Components/Header';
import Examples from './Examples';
import CoreComponents from './Components/CoreComponents';
function App() {
  return (
    <div>
      <Header/>
      <main>
        <CoreComponents/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;



// we can devide css into components 
// see if we have header and in the css we have header css then we 
// can put that style into it 


// menu tag is often used to list buttons in the html

// by clicking on the function we can pass it a function its value 
// and can get which button is clicked
// then we can do functionality on that which button is clicked



// to change the content dynamically in the react you have to use 
// this hooks in the react
// okay react does not rerenders the function 
// until hooks inside it have changed its value 


// when an change happens in the react it only renders that
// specific components or the funciton 
// this is the speciallaty of the react 
// that it changes only that part of the UI that is effected or changes 
// then this 

// what does usestate tells it tells the ui that you have to rerender the 
// UI because an button is clicked 
// some state have been changed 



// by this way we can have the content to be displyed in it 
// if you want to have conditional displaying 
// there are sevral methods by which you can do this 
// to do this we can have use ternary operator and && operator 
// many more 


// by this way we can display content dynamically 
// on the webpage 

//an app.jsx file must me small so that it would be clean and should nt handel multiple 
// function on one components 



// when you are definnig a components make sure the the functionality
// they are using should be on the same page 

// it is possible that we have a structure in which we can have
// the section and id in it and then we are using the values in its