import React from "react"
import LibrarySong from "./LibrarySong"

const Library = ({songs, setCurrentSong, isPlaying, audioRef, setSongs, libraryState}) => {
    return(
    <div className={`library ${libraryState ? 'active-library' : ''} `}>
        <h2>Library</h2>
        <div className="library-songs">
            {songs.map(song => 
            <LibrarySong
             song = {song}
             setCurrentSong = {setCurrentSong}
             songs={songs} 
             id = {song.id}
             isPlaying = {isPlaying}
             audioRef = {audioRef}
             setSongs = {setSongs}
             />
            )}
            
        </div>
    </div>
    )
}

export default Library
