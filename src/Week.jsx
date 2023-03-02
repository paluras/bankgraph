import React from "react";
import Data from '../data.json'
import Day from "./Day";

const obj = JSON.stringify(Data)
const stringData = JSON.parse(obj)

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

  export default Week