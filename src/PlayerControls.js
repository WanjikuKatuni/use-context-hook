import React from 'react'
import useMusicPlayer from './useMusicPlayer'

import {FaBackward, FaForward, FaPlay, FaPause} from 'react-icons/fa'

const PlayerControls = () => {

    const {isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack} = useMusicPlayer();

  return (
    <>
    <div className='box controls has-background-grey-dark'>
        <div className="current-track has-text-light">
            <marquee>{currentTrackName}</marquee>
        </div>
        <div>
            <button  className="button has-text-light has-background-grey-dark" onClick={playPreviousTrack} disabled={!currentTrackName}>
                <FaBackward/>
            </button>

            <button className="button has-text-light has-background-grey-dark" onClick={togglePlay} disabled={!currentTrackName}>
                {isPlaying ? <FaPause/> : <FaPlay/>}
            </button>
            
            <button className="button has-text-light has-background-grey-dark" onClick={playNextTrack} disabled={!currentTrackName}>
                <FaForward/>
            </button>
        </div>
    </div>
    </>
  )
}

export default PlayerControls