import User from '../../models/User.js';

const getFavorites = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate('favoriteMovies');
    res.json(user.favoriteMovies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToFavorites = async (req, res) => {
  const { userId, movieId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user.favoriteMovies.includes(movieId)) {
      user.favoriteMovies.push(movieId);
      await user.save();
    }
    res.json(user.favoriteMovies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeFromFavorites = async (req, res) => {
  const { userId, movieId } = req.body;
  try {
    const user = await User.findById(userId);
    user.favoriteMovies.pull(movieId);
    await user.save();
    res.json(user.favoriteMovies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getFavorites,
  addToFavorites,
  removeFromFavorites
};
