let mongoose = require("mongoose");

// Post - title, content
let postSchema = new mongoose.Schema({
    title: String,
    post: String
});
module.exports = mongoose.model("Post", postSchema);