import { Router } from 'express';

const favorites = [];

const getFavorites = (req, res) => {
    res.json(favorites);
};

const addToFavorites = (req, res) => {
    const { movieId } = req.body;
    if (!favorites.includes(movieId)) {
        favorites.push(movieId);
    }
    res.json(favorites);
};

const removeFromFavorites = (req, res) => {
    const { movieId } = req.body;
    const index = favorites.indexOf(movieId);
    if (index > -1) {
        favorites.splice(index, 1);
    }
    res.json(favorites);
};

export default {
    getFavorites,
    addToFavorites,
    removeFromFavorites
};
