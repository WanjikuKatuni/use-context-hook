import React from 'react';
import { MusicPlayerProvider } from './MusicPlayerContext';
import PlayerControls from './PlayerControls';
import Tracklist from './Tracklist';



function App() {
  return (
    <MusicPlayerProvider>
      <div className='container'>
        <Tracklist/>
        <PlayerControls/>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
