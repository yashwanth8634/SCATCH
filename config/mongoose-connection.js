import mongoose from "mongoose";
import debug from "debug";
const dbgr = debug("development:mongoose")
import config from "config";


mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    dbgr("Connected");
})
.catch(function(err){
    dbgr(err);
 })

export default mongoose.connection;





