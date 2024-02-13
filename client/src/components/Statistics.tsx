import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/slices';

const Statistics: React.FC = () => {
  const songs = useSelector((state: RootState) => state.song.songs);

  // Implement statistics display based on your requirements

  return (
    <div>
      <h2>Statistics</h2>
      {/* Display your statistics here */}
    </div>
  );
};

export default Statistics;
