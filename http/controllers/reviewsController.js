import Movie from "../../models/Movie.js";

// Get reviews for a movie
export const getReviews = async (req, res) => {
  const { movieId } = req.params;
  try {
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie.reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a review to a movie
export const addReview = async (req, res) => {
  const { movieId } = req.params;
  const { name, email, content } = req.body;

  const review = {
    name,
    email,
    content,
    date: new Date(),
  };

  try {
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    movie.reviews.push(review);
    await movie.save();
    res.json(movie.reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a review
export const updateReview = async (req, res) => {
  const { movieId } = req.params;
  const { reviewId, name, email, content } = req.body;

  try {
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    const review = movie.reviews.id(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    review.name = name || review.name;
    review.email = email || review.email;
    review.content = content || review.content;
    review.date = new Date();

    await movie.save();
    res.json(movie.reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove a review
export const removeReview = async (req, res) => {
  const { movieId } = req.params;
  const { reviewId } = req.body;

  try {
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    movie.reviews.id(reviewId).remove();
    await movie.save();
    res.json(movie.reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getReviews,
  addReview,
  updateReview,
  removeReview
};
