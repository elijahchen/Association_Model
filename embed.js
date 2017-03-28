const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
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

// let newUser = new userModel({
//     email: "Trucker@aaatruck.com",
//     name: "Tuck Ering"
// });
//
// newUser.save(function (err, user) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// let newPost = new postModel({
//     title: "Where Is Occupy’s Free Internet Champion?",
//     post: "Five years ago, Motherboard released a doc on Occupy Wall Street hacktivists trying to build a distributed, ad hoc mesh network from the ground up. We caught up with one of them."
// });
//
// newPost.save(function (err, user) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

