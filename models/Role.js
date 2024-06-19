import mongoose from "mongoose";

const Schema = mongoose.Schema;

const roleSchema = new Schema({
    role : {
        type: String,
        required: true,
        trim: true
    },
    actor : {
        type: Schema.Types.ObjectId,
        ref: "Actor"
    },
    movie : {
        type: Schema.Types.ObjectId,
        ref: "Movie"
    }
});

const Role = mongoose.model('Role', roleSchema);

export default Role;