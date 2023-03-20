import './App.css';
import { useState } from 'react';

import Ranking from './components/Ranking';
import Leaderboard from './components/Leaderboard';



function App() {
  const [username, setUsername] = useState('')
  let leaderboard = require('./data/league2/leaderboard.json')
  
  const onClick = (username) => {
    setUsername(username)
  }
  return (
      <div className="App">
        <header className="App-header">
          <p>
            Fantasy Survivor Season 44
          </p>
        </header>
        <div className='data-container'>
          <div className='item-container'>
            <Leaderboard leaderboard={leaderboard} onclick={onClick} />
          </div>
          <div className='item-container'>
            {username && <Ranking username={username} />}
          </div>
        </div>
      </div>
  );
}

export default App;
