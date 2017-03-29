const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://user:testapp@ds129050.mlab.com:29050/ecdata");

// Post - title, content
let postSchema = new mongoose.Schema({
    title: String,
    post: String
});
let Post = mongoose.model("aPost", postSchema);

// User - email, name, post schema
let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] // postSchema must be defined first
});
let User = mongoose.model("aUser", userSchema);

// let newUser = new User({
//     email: "test2test1@gmail.com",
//     name: "Theory Craft"
// });
//
// newUser.posts.push({
//     title: "How to become successful?",
//     post: "Just do it."
// });
//
// newUser.save(function (err, user) {
//    if(err){
//        console.log(err);
//    } else {
//        console.log(user);
//    }
// });

User.findOne({name: "Theory Craft"}, function (err, user) {
    if(err){
        console.log(err);
    } else {
        // user.posts.push({
        //     title: "50 Top Traits of Successful Minds",
        //     post: "Just do it."
        // });
        // user.save(function (err, user) {
        //    if(err){
        //        console.log(err);
        //    } else {
        //        console.log(user);
        //    }
        // });
        console.log(user);
    }
});

