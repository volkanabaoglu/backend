import express from "express";
import actorController from "../http/controllers/actorController.js";
import directorController from "../http/controllers/directorController.js";
import movieController from "../http/controllers/movieController.js";
import roleController from "../http/controllers/roleController.js";  // Bu satırı düzeltin

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

export default router;  // router'ı burada export edin
