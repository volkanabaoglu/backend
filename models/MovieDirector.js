import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieDirectorSchema = new Schema({
    movieId : {
        type: Schema.Types.ObjectId,
        ref: "Movie"
    },
    directorId : {
        type: Schema.Types.ObjectId,
        ref: "Director"
    }
});

const MovieDirector = mongoose.model('MovieDirector', movieDirectorSchema);

export default MovieDirector;