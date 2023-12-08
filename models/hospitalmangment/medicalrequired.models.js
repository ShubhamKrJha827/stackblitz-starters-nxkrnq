import mongoose from "mongoose";
const medicalrequiredSchema = new mongooseSchema({

},{timestamps:true}
);
export const MedicalRecord = mongoose.model("MedicalRecord",medicalrequiredSchema);