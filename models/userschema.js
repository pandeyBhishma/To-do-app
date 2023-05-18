import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
name: {
    type : String,
    required: true,
},
email: {
    type: String,
    required: true,
    unique: true,
},
password: {
    type: String,
    required: true,
    select: true,
},
CreateDate: {
    type: Date,
    default : Date.now()
}
})


export const User = mongoose.model('route', UserSchema);