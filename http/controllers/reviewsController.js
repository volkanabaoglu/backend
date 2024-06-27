import Review from '../../models/Review.js';

// Get reviews by movie ID
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ movie: req.params.movieId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const addReview = async (req, res) => {
  const { name, email, content, rating } = req.body;
  const newReview = new Review({
    movie: req.params.movieId,
    name,
    email,
    content,
    rating,
    date: new Date(),
  });

  try {
    const savedReview = await newReview.save();
    const reviews = await Review.find({ movie: req.params.movieId });
    res.status(201).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a review
export const updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.reviewId, req.body, { new: true });
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a review
export const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.reviewId);
    res.status(200).json({ message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export default {
  getReviews,
  addReview,
  updateReview,
  deleteReview,
};
