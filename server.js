import {app} from "./app.js"
import { db } from "./data/userdb.js"

db();

app.listen(3000, ()=>{
    console.log(`Server is working at http://localhost:3000`)
})