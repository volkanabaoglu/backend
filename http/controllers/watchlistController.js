import User from '../../models/User.js';

const getWatchlist = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate('watchlist');
    res.json(user.watchlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToWatchlist = async (req, res) => {
  const { userId, movieId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user.watchlist.includes(movieId)) {
      user.watchlist.push(movieId);
      await user.save();
    }
    res.json(user.watchlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeFromWatchlist = async (req, res) => {
  const { userId, movieId } = req.body;
  try {
    const user = await User.findById(userId);
    user.watchlist.pull(movieId);
    await user.save();
    res.json(user.watchlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist
};
