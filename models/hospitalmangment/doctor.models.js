
import mongoose from "mongoose";
const doctorSchema = new mongooseSchema({
    name:{
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,

    },
    qualification:{
        type: String,
        required: true,
    },
    experenceinyear:{
        type: Number,
        default: 0
    },
    workinhospital:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",

        },
    ],

},{timestamps:true}
);
export const Doctor = mongoose.model("Doctor",doctorSchema);