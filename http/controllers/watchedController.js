import User from '../../models/User.js';

const getWatched = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate('watchedMovies');
    res.json(user.watchedMovies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToWatched = async (req, res) => {
  const { userId, movieId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user.watchedMovies.includes(movieId)) {
      user.watchedMovies.push(movieId);
      await user.save();
    }
    res.json(user.watchedMovies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeFromWatched = async (req, res) => {
  const { userId, movieId } = req.body;
  try {
    const user = await User.findById(userId);
    user.watchedMovies.pull(movieId);
    await user.save();
    res.json(user.watchedMovies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getWatched,
  addToWatched,
  removeFromWatched
};
