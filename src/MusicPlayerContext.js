// where we set up the context and also return the contexts provider which will wrap our two other components in

import React from 'react'
import { useState } from 'react';

// Create new context which passes an array with an empty object and empty function as initial value
const MusicPlayerContext = React.createContext([{}, () => {}]);

// define a new react component which returns the music player contexts provider again with no initial value
const MusicPlayerProvider = (props) => {

    const [state, setState] = useState({
        tracks: [
            {
              name: 'Lost Chameleon - Genesis',
            },
            {
              name: 'The Hipsta - Shaken Soda',
            },
            {
              name: 'Tobu - Such Fun',
            },
          ],
          currentTrackIndex: null,
          isPlaying: false,
    })

  return (
    // aalows child components to access the contexts value
    <MusicPlayerContext.Provider value={[state, setState]}>
        {props.children}
    </MusicPlayerContext.Provider>
  )
}

export {MusicPlayerContext, MusicPlayerProvider};