import { Router } from 'express';

const watchlist = [];

const getWatchlist = (req, res) => {
    res.json(watchlist);
};

const addToWatchlist = (req, res) => {
    const { movieId } = req.body;
    if (!watchlist.includes(movieId)) {
        watchlist.push(movieId);
    }
    res.json(watchlist);
};

const removeFromWatchlist = (req, res) => {
    const { movieId } = req.body;
    const index = watchlist.indexOf(movieId);
    if (index > -1) {
        watchlist.splice(index, 1);
    }
    res.json(watchlist);
};

export default {
    getWatchlist,
    addToWatchlist,
    removeFromWatchlist
};
