const express = require('express');
const Song = require('../models/songModel');
const router = express.Router();

// Create a new song
router.post('/', async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).send(song);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all songs
router.get('/', async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).send(songs);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a song
router.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'artist', 'album', 'genre'];

  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!song) {
      return res.status(404).send();
    }

    res.status(200).send(song);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a song
router.delete('/:id', async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);

    if (!song) {
      return res.status(404).send();
    }

    res.status(200).send(song);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
