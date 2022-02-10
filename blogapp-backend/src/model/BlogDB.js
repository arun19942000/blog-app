const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI ||
    "mongodb+srv://new-user:Arun1994@cluster0.dhth5.mongodb.net/blog?retryWrites=true&w=majority"
);

const Schema = mongoose.Schema;

var articleSchema = new Schema({
    name: String,
    username: String,
    upvotes: Number,
    comments: Array,
});

var ArticleInfo = mongoose.model("article", articleSchema);

module.exports = ArticleInfo;