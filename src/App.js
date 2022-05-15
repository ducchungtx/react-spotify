import './App.css';
import { useState } from 'react';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import Navbar from './components/Navbar';
import Playing from './components/Playing';

import { Songs } from './Context';
import DataSongs from './data/songs.json';

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSong = (songId) => {
    const song = DataSongs.find((song) => song.id === songId);
    setSong(song);
  }

  const nextSong = (songId) => {
    // find index of current song and plus 1
    const index = DataSongs.findIndex((song) => song.id === songId);
    const nextIndex = index + 1;
    // if index is last song, return first song
    if (nextIndex === DataSongs.length) {
      setSong(DataSongs[0]);
    } else {
      setSong(DataSongs[nextIndex]);
    }
  }

  const prevSong = (songId) => {
    // find index of current song and subtract 1
    const index = DataSongs.findIndex((song) => song.id === songId);
    const prevIndex = index - 1;
    // if index is first song, return last song
    if (prevIndex === -1) {
      setSong(DataSongs[DataSongs.length - 1]);
    } else {
      setSong(DataSongs[prevIndex]);
    }
  }

  return (
    <div>
      <Songs.Provider value={{ DataSongs, song, setSong: handleSong, nextSong, prevSong }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
          {/* span1 */}
          <DetailSong />
          {/* span2 */}
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
