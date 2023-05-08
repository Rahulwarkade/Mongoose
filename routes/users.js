var mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/dbname")

var userSchema = mongoose.Schema(
  {
    name : String,
    age : Number,
    username : String
  }
)

module.exports = mongoose.model("user",userSchema);