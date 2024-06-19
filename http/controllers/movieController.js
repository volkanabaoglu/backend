  import Movie from "../../models/Movie.js";

  const getAllMovies = async (req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const createMovie = async (req, res) => {
    const movie = new Movie({
      title: req.body.title,
      directorId: req.body.directorId,
      genre: req.body.genre,
      year: req.body.year,
      rate: req.body.rate,
    });

    try {
      const newMovie = await movie.save();
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  const getMovie = async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      res.json(movie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const updateMovie = async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      movie.title = req.body.title;
      movie.directorId = req.body.directorId;
      movie.genre = req.body.genre;
      movie.year = req.body.year;
      movie.rate = req.body.rate;
      await movie.save();
      res.json(movie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const deleteMovie = async (req, res) => {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Movie deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export default {
    getAllMovies,
    createMovie,
    getMovie,
    updateMovie,
    deleteMovie,
  };
