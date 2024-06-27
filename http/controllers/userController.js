import User from '../../models/User.js';
import Review from '../../models/Review.js';

// Get a user's favorite movies
export const getUserFavoriteMovies = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('favoriteMovies');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user.favoriteMovies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a user's reviews
export const getUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.params.userId });
    if (!reviews) {
      return res.status(404).json({ message: 'No reviews found' });
    }
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createUser = async (req, res) => {
    const { email, password, firstName, lastName, birthDate, imageUrl, isAdmin } = req.body;
  
    try {
      const newUser = new User({
        email,
        password,
        firstName,
        lastName,
        birthDate,
        imageUrl,
        isAdmin: isAdmin || false // Default to false if not provided
      });
  
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
// Get a user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export default {
    getUserFavoriteMovies,
    getUserReviews,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};