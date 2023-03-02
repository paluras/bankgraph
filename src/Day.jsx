import React from "react";
import Data from '../data.json'

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

  export default Day