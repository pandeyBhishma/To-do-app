import mongoose from "mongoose";

 export const db = ()=>{mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "backend"
}).then(() => {
    console.log('database connected sucessfully')
}).catch((e) => {
    console.log(e)
})};
