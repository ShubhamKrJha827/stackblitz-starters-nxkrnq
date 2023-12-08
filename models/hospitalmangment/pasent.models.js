import mongoose from "mongoose";
const pasentSchema = new mongooseSchema({
    name: {
        type: String,
        required: true,
    },
    diagonseWith: {
        type: String,
        required: true,

    },
    address: {
        type: String,
        required: true,

    },
    age: {
        type: Number,
        required: true,

    },
    bloodGroup: {
        type: String,
        required: true,

    },
    gender: {
        type: String,
        enum: ["m","f","o"],
        required:true,

    },
    admitedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",

    },

},{timestamps:true}
);
export const Pasent = mongoose.model("Pasent",pasentSchema)