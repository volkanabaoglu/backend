import mongoose from "mongoose";
import { reviewSchema } from "./Review.js";  // reviewSchema'yı içe aktarıyoruz

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  actors: {
    type: Array,
    required: true,
  },
  directors: {
    type: Array,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  ratings: [
    {
      rating: { type: Number, required: true },
    },
  ],
  reviews: [reviewSchema],
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
