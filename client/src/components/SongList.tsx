import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/slices';
import { deleteSong } from '../redux/slices/songSlice';

const SongList: React.FC = () => {
  const songs = useSelector((state: RootState) => state.song.songs);
  const dispatch = useDispatch();

  const handleDelete = (title: string) => {
    dispatch(deleteSong(title));
  };

  return (
    <div>
      <h2>Song List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.title}>
            {song.title} - {song.artist} - {song.album} - {song.genre}
            <button onClick={() => handleDelete(song.title)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
