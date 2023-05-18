import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
title: {
    type : String,
    required: true,
},
description: {
    type: String,
    required: true,
},
Iscompleted: {
    type: Boolean,
    defult: false,
},
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'routes',
},
CreateDate: {
    type: Date,
    default : Date.now()
}
})

export const Task = mongoose.model('task', UserSchema);