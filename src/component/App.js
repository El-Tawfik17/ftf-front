import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import PlayersList from './PlayersList';
import AddPlayers from './AddPlayers';
import PlayersDetail from './PlayersDetail';
import EditPlayers from './EditPlayers';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<PlayersList/>} />
          <Route path='/add' element={<AddPlayers/>} />
          <Route path='/detail/:playerId' element={<PlayersDetail/>}/>
          <Route path='/edit/:playerId' element={<EditPlayers/>}/>

        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
