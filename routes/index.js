import express from "express";
import actorController from "../http/controllers/actorController.js";
import directorController from "../http/controllers/directorController.js";
import movieController from "../http/controllers/movieController.js";
import roleController from "../http/controllers/roleController.js";
import watchlistController from "../http/controllers/watchlistController.js";
import watchedController from "../http/controllers/watchedController.js";
import favoritesController from "../http/controllers/favoritesController.js";
import ratingsController from "../http/controllers/ratingsController.js";
import reviewsController from "../http/controllers/reviewsController.js";
import userController from "../http/controllers/userController.js";

const router = express.Router();

router.route('/actors')
    .get(actorController.getAllActors)
    .post(actorController.createActor);

router.route('/actors/:id')
    .get(actorController.getActor)
    .put(actorController.updateActor)
    .delete(actorController.deleteActor);

router.route('/directors')
    .get(directorController.getAllDirectors)
    .post(directorController.createDirector);

router.route('/directors/:id')
    .get(directorController.getDirector)
    .put(directorController.updateDirector)
    .delete(directorController.deleteDirector);

router.route('/movies')
    .get(movieController.getAllMovies)
    .post(movieController.createMovie);

router.route('/movies/:id')
    .get(movieController.getMovie)
    .put(movieController.updateMovie)
    .delete(movieController.deleteMovie);

router.route('/roles')
    .get(roleController.getAllRoles)
    .post(roleController.createRole);

router.route('/roles/:id')
    .get(roleController.getRole)
    .put(roleController.updateRole)
    .delete(roleController.deleteRole);

router.route('/watchlist')
    .get(watchlistController.getWatchlist)
    .post(watchlistController.addToWatchlist)
    .delete(watchlistController.removeFromWatchlist);

router.route('/watched')
    .get(watchedController.getWatched)
    .post(watchedController.addToWatched)
    .delete(watchedController.removeFromWatched);

router.route('/favorites')
    .get(favoritesController.getFavorites)
    .post(favoritesController.addToFavorites)
    .delete(favoritesController.removeFromFavorites);

router.route('/ratings')
    .get(ratingsController.getRatings)
    .post(ratingsController.addRating)
    .delete(ratingsController.removeRating);

router.route('/reviews/:movieId')
    .get(reviewsController.getReviews)
    .post(reviewsController.addReview)
    .put(reviewsController.updateReview)


router.route('/user/:userId/favorite-movies')
.get(userController.getUserFavoriteMovies);

router.route('/user/:userId/reviews')
.get(userController.getUserReviews);

router.route('/users')
.post(userController.createUser);

router.route('/users/:userId')
.get(userController.getUserById)
.put(userController.updateUser)
.delete(userController.deleteUser);


export default router;
