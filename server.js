import { app } from "./app.js";
import { db } from "./database/db.js"

db();

app.listen(process.env.PORT || 3000, () => { 
    console.log(`Server is working on ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);

});