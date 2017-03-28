const mongoose = require("mongoose");
mongoose.connect("mongodb://user:testapp@ds129050.mlab.com:29050/ecdata");

// User - email, name
let userSchema = new mongoose.Schema({
    email: String,
    name: String
});
let userModel = mongoose.model("aUser", userSchema);

// Post - title, content
let postSchema = new mongoose.Schema({
    title: String,
    post: String
});
let postModel = mongoose.model("aPost", postSchema);
