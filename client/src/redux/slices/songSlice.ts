import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SongState {
  songs: Song[];
}

const initialState: SongState = {
  songs: [],
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSongs: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
    },
    addSong: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    updateSong: (state, action: PayloadAction<Song>) => {
      const index = state.songs.findIndex(
        (song) => song.title === action.payload.title
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    deleteSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song.title !== action.payload);
    },
  },
});

export const { setSongs, addSong, updateSong, deleteSong } = songSlice.actions;

export default songSlice.reducer;
