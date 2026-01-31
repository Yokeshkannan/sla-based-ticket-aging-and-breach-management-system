const mongoose = require("mongoose")


module.exports = () => {
    mongoose.connect(process.env.MONGO_URL).
        then(()=>{console.log("Database Connected")}).
        catch((err)=>{console.log(err)})
}