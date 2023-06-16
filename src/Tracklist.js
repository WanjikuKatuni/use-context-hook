import React, { useContext } from 'react'
import { MusicPlayerContext } from './MusicPlayerContext'
import useMusicPlayer from './useMusicPlayer'

import {CiPause1, CiPlay1} from 'react-icons/ci'

const Tracklist = () => {

    const {tracklist, currentTrackName, playTrack, isPlaying} = useMusicPlayer();


  return (
    // <button onClick={() => setState(state => ({...state, name: 'Clicked'}))}>
    //     {state.name}
    // </button>

    // map over new tracks array from the contexts state
    <>
        {tracklist.map((track, index) => (
            <div className='box'>
                <button className='button' onClick={() => playTrack(index)}>
                    {currentTrackName === track.name && isPlaying ? <CiPause1 /> : <CiPlay1/>}
                </button>
                <div className='song-title'>
                    {track.name}
                </div>
            </div>
        ))}
    </>
  )
}

export default Tracklist