import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSongById, songSelector } from '../redux/Slice/SongSlice';
import { getListSong, songsSelector } from '../redux/Slice/SongsSlice';

function ListSongs() {
  const dispatch = useDispatch();
  const { songs } = useSelector(songsSelector);
  const { song } = useSelector(songSelector);
  const [idSong, setIdSong] = useState(0);

  const handlePlaySong = idSong => {
    setIdSong(idSong);
    dispatch(getSongById(idSong));
  }

  useEffect(() => {
    dispatch(getListSong());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIdSong(song.id);
  }, [song]);

  return (
    <div className='col-span-2 overflow-y-scroll'>
      <table className='table-auto w-full'>
        <thead className='text-white'>
          <tr className='text-left h-12'>
            <th className='w-[10%] text-center'>#</th>
            <th>Title</th>
            <th className='w-[10%]'>Author</th>
            <th className='w-[10%]'><i className='fa fa-download'></i></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => {
            return (
              <tr
                key={index}
                className={`
                  bg-slate-800
                  text-left
                  pl-2 h-12
                  text-gray-500
                  hover:bg-slate-600
                  ${idSong === song.id ? 'bg-slate-600 text-teal-400' : ''}
                `}
                onClick={() => handlePlaySong(song.id)}
              >
                <td className='w-[10%] text-center'>{index + 1}</td>
                <td className='w-[80%]'>{song.name}</td>
                <td className='w-[10%]'>{song.author}</td>
                <td className='w-[10%] text-white'><a href={song.url}><i className='fa fa-download'></i></a></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListSongs