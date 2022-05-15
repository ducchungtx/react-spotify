import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

function Playing() {
  const {song, nextSong, prevSong} = useContext(Songs);
  return (
    <div>
      <AudioPlayer
        className='player-music'
        src={song.url}
        layout="horizontal"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={() => nextSong(song.id)}
        onClickPrevious={() => prevSong(song.id)}
        autoPlay={true}
        onEnded={() => nextSong(song.id)}
      />
    </div>
  )
}

export default Playing