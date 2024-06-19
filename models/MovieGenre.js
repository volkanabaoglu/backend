import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieGenreSchema = new Schema({
    movieId : {
        type: Schema.Types.ObjectId,
        ref: "Movie"
    },
    genre : {
        type: String,
        required: true 
    }
    });

const MovieGenre = mongoose.model('MovieGenre', movieGenreSchema);

export default MovieGenre;