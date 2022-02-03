import React from 'react'

import playAudio from '../util_2'

const LibrarySong = ({song, setCurrentSong, songs, id, isPlaying, audioRef, setSongs}) => {

    const clickHandler = () =>{
        setCurrentSong(song)

        // Add active state
        const newSongs = songs.map((song) => {
            if(song.id === id){   // Scorriamo l'array delle canzoni usando map,  
                return{          // se l'id della canzone che è nel loop è uguale al'id della canzone che abbiamo cliccato settiamo active:true, ovvero vuol dire che la stiamo riproducendo
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
        setSongs(newSongs)  // newSongs è l'array aggiornato con tutti gli oggetti e i parametri active aggiornati
        // check if the song is playing
        playAudio(isPlaying, audioRef)
        
    }

    return (
        <div onClick={clickHandler}  className={`library-song ${song.active ? 'selected' : ""} `}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong