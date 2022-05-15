import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSongByIndex, songSelector } from '../redux/Slice/SongSlice';
import { songsSelector } from '../redux/Slice/SongsSlice';

function Playing() {
  const dispatch = useDispatch();
  const { song } = useSelector(songSelector);
  const { songs } = useSelector(songsSelector);

  const nextSong = (songId) => {
    // find index of current song and plus 1
    const index = songs.findIndex((song) => song.id === songId);
    const nextIndex = index + 1;
    // if index is last song, return first song
    if (nextIndex === songs.length) {
      dispatch(getSongByIndex(0));
    } else {
      dispatch(getSongByIndex(nextIndex));
    }
  }

  const prevSong = (songId) => {
    // find index of current song and subtract 1
    const index = songs.findIndex((song) => song.id === songId);
    const prevIndex = index - 1;
    // if index is first song, return last song
    if (prevIndex === -1) {
      dispatch(getSongByIndex(songs.length - 1));
    } else {
      dispatch(getSongByIndex(prevIndex));
    }
  }

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