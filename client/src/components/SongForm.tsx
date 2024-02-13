import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../redux/slices/songSlice';

const SongForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newSong = { title, artist, album, genre };
    dispatch(addSong(newSong));
    setTitle('');
    setArtist('');
    setAlbum('');
    setGenre('');
  };

  return (
    <div>
      <h2>Add New Song</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>Artist: </label>
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
        <br />
        <label>Album: </label>
        <input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} />
        <br />
        <label>Genre: </label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
        <br />
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default SongForm;
