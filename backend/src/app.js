const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const songRoutes = require('./routes/songRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/songsDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/songs', songRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});