// custom React Hook

import React, { useContext } from 'react'
import { MusicPlayerContext } from './MusicPlayerContext'

const useMusicPlayer = () => {

    const [state, setState] = useContext(MusicPlayerContext)

    // toggle play and pause function
    function togglePlay() {
        setState(state => ({...state, isPlaying: !state.isPlaying }))
    }

    // play a specific track
    function playTrack(index){
        if (index === state.currentTrackIndex){
            togglePlay()
        }
        else{
            setState(state => ({...state, currentTrackIndex: index, isPlaying: true}))
        }
    }

    // play previous track
    function playPreviousTrack(){
        const newIndex = ((state.currentTrackIndex + -1) % state.tracks.length + state.tracks.length) % state.tracks.length;
        
        playTrack(newIndex)
    }

    // play  next track
    function playNextTrack(){
        const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;

        playTrack(newIndex)
    }

    return {
        togglePlay,
        playTrack,
        currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
        tracklist: state.tracks,
        isPlaying: state.isPlaying,
        playPreviousTrack,
        playNextTrack,
    }

}

export default useMusicPlayer