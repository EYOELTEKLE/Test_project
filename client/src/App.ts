import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import SongList from "./components/SongList";
import SongForm from "./components/SongForm";
import Statistics from "./components/Statistics";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Music Library</h1>
        <SongList />
        <SongForm />
        <Statistics />
      </div>
    </Provider>
  );
}

export default App;
