import { useState } from 'react'
import Data from '../data.json'
import './App.css'

const obj = JSON.stringify(Data)
const stringData = JSON.parse(obj)

function Day(props){

  const [clicked, setClicked] = useState(false);
  
  
  const lowHigh = {
    backgroundColor: clicked ? "#76b5bd" : "#eb755d",
    width: "40px",
    height:`${props.graph / 5}vh`,
    borderRadius: "3px",
    transition: "background-color 0.3s ease-in-out"
  }

  const showValue = {
      color: clicked ? "black" : "#fefcf6",
      textAlign:"center",
      fontSize:"12px",
      transition: "color 0.3s ease-in-out"
      
  }

  const handleClick = () => {
    setClicked(!clicked)
   
  }

  return(
    <div className={props.name} >
      <p style={showValue}>${props.graph}</p>
      <div 
      onClick={handleClick}
       className={props.weekdayName} 
       style={lowHigh}></div>
      <p style={
          {textAlign:"center",
          marginTop:"7px",
          color:"hsl(28, 10%, 53%)"}}>
          {props.weekdayName}
      </p>
    </div>
  )
}

function Week(){

  return(
<div className='weekGraph'>
            <Day 
          
            graph={stringData[0].amount}
             weekdayName={stringData[0].day}/>
            <Day 
            graph={stringData[1].amount}
            weekdayName={stringData[1].day}/>
            <Day
            graph={stringData[2].amount} 
            weekdayName={stringData[2].day}/>
            <Day 
            graph={stringData[3].amount}
            weekdayName={stringData[3].day}/>
            <Day 
            graph={stringData[4].amount}
            weekdayName={stringData[4].day}/>
            <Day 
            graph={stringData[5].amount}
            weekdayName={stringData[5].day}/>
            <Day 
            graph={stringData[6].amount}
            weekdayName={stringData[6].day}/>
  </div>
  )
}

function App() {
  return (
    <div className="App">
        <nav>
              <div className='left-nav'>
                <p>My balance</p>
                <h2>$921.48</h2>
              </div>
              <img src='src\assets\logo.svg'></img>
        </nav>
        <main>
         
          <div className='spendings'>Spending - Last 7 days</div>
          <Week />
          <div className='bottom-spendings'>
            <div className='left-bottom'>
              <p>Total this month</p>
              <h2>$478.33</h2>
            </div>
            <div className='right'>
              <h5>+2.4%</h5>
              <p>from last month</p>
            </div>
          </div>
        </main>
    </div>
  )
}

export default App
