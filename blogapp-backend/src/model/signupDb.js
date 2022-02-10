const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://new-user:Arun1994@cluster0.dhth5.mongodb.net/blog?retryWrites=true&w=majority"
);

const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    email: String,
    password: String,
});
var UserInfo = mongoose.model("user", userSchema);
module.exports = UserInfo;