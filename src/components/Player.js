import React, {useRef, useState, useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'


import playAudio from '../util_2'

let conta = 0

const Player = ({setCurrentSong, songs, currentSong, isPlaying, setIsPlaying, audioRef, setSonginfo, songInfo, setSongs}) => {    


    // Event Handlers
    const playSongHandler = () =>{
        if(isPlaying){
        audioRef.current.pause()
        setIsPlaying(!isPlaying)
        }else{
        audioRef.current.play()
        setIsPlaying(!isPlaying)
        }
    }

    useEffect (() => {
                // Add active state
                const newSongs = songs.map((song) => {
                    if(song.id === currentSong.id){   
                        return{          
                            ...song,
                            active: true,
                        }
                    }else{
                        return{
                            ...song,
                            active: false,
                        }
                    }
                })
                setSongs(newSongs)
    }, [currentSong])

    const skip = () => {
        
            let conta = songs.findIndex((song) => song.id === currentSong.id)
            console.log(conta)
            setCurrentSong(songs[(conta +1)%songs.length]) 
            
            playAudio(isPlaying, audioRef)
        
    }

    const getTime =(time)=>{
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time %60)).slice(-2)
        )
    }


    
   

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSonginfo({...songInfo, currentTime: e.target.value})
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                type="range" 
                min={0} max={songInfo.duration} 
                value={songInfo.currentTime}
                onChange={dragHandler}
                max = { songInfo.duration || 0}
                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className = "skip-back" size = "2x" icon = {faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className = "play" size = "2x" icon = {isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon onClick={skip} className = "skip-forward" size = "2x" icon = {faAngleRight}/>
            </div>

        </div>
    )
}

export default Player