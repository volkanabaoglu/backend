import { Router } from 'express';

const watched = [];

const getWatched = (req, res) => {
    res.json(watched);
};

const addToWatched = (req, res) => {
    const { movieId } = req.body;
    if (!watched.includes(movieId)) {
        watched.push(movieId);
    }
    res.json(watched);
};

const removeFromWatched = (req, res) => {
    const { movieId } = req.body;
    const index = watched.indexOf(movieId);
    if (index > -1) {
        watched.splice(index, 1);
    }
    res.json(watched);
};

export default {
    getWatched,
    addToWatched,
    removeFromWatched
};
