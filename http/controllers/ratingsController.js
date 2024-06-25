const ratings = [];

const getRatings = (req, res) => {
    res.json(ratings);
};

const addRating = (req, res) => {
    const { movieId, rating } = req.body;
    const existingRating = ratings.find(r => r.movieId === movieId);
    if (existingRating) {
        existingRating.rating = rating;
    } else {
        ratings.push({ movieId, rating });
    }
    res.json(ratings);
};

const removeRating = (req, res) => {
    const { movieId } = req.body;
    const index = ratings.findIndex(r => r.movieId === movieId);
    if (index > -1) {
        ratings.splice(index, 1);
    }
    res.json(ratings);
};

export default {
    getRatings,
    addRating,
    removeRating
};
