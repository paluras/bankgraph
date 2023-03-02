import { useState } from 'react'
import Data from '../data.json'
import './App.css'
import Week from './Week'

function App() {
  return (
    <div className="App">
        <nav>
              <div className='left-nav'>
                <p>My balance</p>
                <h2>$921.48</h2>
              </div>
              <img src='https://raw.githubusercontent.com/paluras/bankgraph/cdf01eba7cd21770dcd1d9ad4fd95df11c23ee4a/src/assets/logo.svg'></img>
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
