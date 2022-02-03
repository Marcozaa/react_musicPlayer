import React, {useState, useRef} from 'react';

import Player from './components/Player';
import Song from './components/Song';

import './styles/app.scss' 

import songsCatalog from './util'

import Library from './components/Library';

import Nav from './components/Nav';

function App() {

  // Ref
  const audioRef = useRef(null)

    // State
    const [songs, setSongs] = useState(songsCatalog())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false);
    const [libraryState, setlibraryState] = useState(false)


    // State
    const[songInfo, setSonginfo] = useState({
      currentTime: 0,
      duration: 0,
  })


    const timeUpdateHandler = (e) =>{
      const current = e.target.currentTime
      const duration = e.target.duration
      setSonginfo({...songInfo, currentTime: current, duration: duration})
      //console.log(current)
  }
  return (
    <div className="App">
        <Nav setLibraryState={setlibraryState} libraryState={libraryState}/>
        <Song currentSong={currentSong}/>
        <Player 
        setCurrentSong={setCurrentSong} 
        songs={songs} 
        currentSong={currentSong} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}
        audioRef = {audioRef}
        setSonginfo = {setSonginfo}
        songInfo = {songInfo}
        setSongs = {setSongs}
        />
        <Library
         songs={songs} 
         setCurrentSong = {setCurrentSong} 
         isPlaying = {isPlaying}
         audioRef = {audioRef}
         setSongs = {setSongs}
         libraryState = {libraryState}
         
         />
        <audio
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef} 
                src={currentSong.audio}
                onLoadedMetadata={timeUpdateHandler}
        ></audio>
    </div>
                
  );
}

export default App;
