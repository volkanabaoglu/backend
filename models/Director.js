import mongoose from "mongoose";

const Schema = mongoose.Schema;

const directorSchema = new Schema({
    firstName : {
        type: String,
        required: true,
        trim: true
    },
    lastName : {
        type: String,
        required: true,
        trim: true
    },
    birthDate : {
        type: Date,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    bio : {
        type: String,
        required: true
    },
    imageUrl : {
        type: String,
        required: true},
    });

const Director = mongoose.model('Director', directorSchema);

export default Director;