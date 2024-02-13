import { call, put, takeEvery } from "redux-saga/effects";
import { setSongs, addSong, updateSong, deleteSong } from "../slices/songSlice";

// API URLs
const API_BASE_URL = "http://localhost:3001/api/songs";

// Helper function to handle API requests
const fetchData = async (url: string, options?: any) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// Saga worker functions
function* fetchSongs() {
  try {
    const songs = yield call(fetchData, API_BASE_URL);
    yield put(setSongs(songs));
  } catch (error) {
    // Handle error
  }
}

function* addNewSong(action: any) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    };
    const newSong = yield call(fetchData, API_BASE_URL, options);
    yield put(addSong(newSong));
  } catch (error) {
    // Handle error
  }
}

function* updateExistingSong(action: any) {
  try {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    };
    const updatedSong = yield call(
      fetchData,
      `${API_BASE_URL}/${action.payload._id}`,
      options
    );
    yield put(updateSong(updatedSong));
  } catch (error) {
    // Handle error
  }
}

function* deleteExistingSong(action: any) {
  try {
    const options = {
      method: "DELETE",
    };
    const deletedSong = yield call(
      fetchData,
      `${API_BASE_URL}/${action.payload}`,
      options
    );
    yield put(deleteSong(deletedSong._id));
  } catch (error) {
    // Handle error
  }
}

// Saga watcher function
function* songSaga() {
  yield takeEvery("songs/fetchSongs", fetchSongs);
  yield takeEvery("songs/addSong", addNewSong);
  yield takeEvery("songs/updateSong", updateExistingSong);
  yield takeEvery("songs/deleteSong", deleteExistingSong);
}

export default songSaga;
