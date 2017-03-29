const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://user:testapp@ds129050.mlab.com:29050/ecdata");

const Post = require("./models/post");
const User = require("./models/user.js");

// Post.create({
//     title: "BOO BEE BOOP",
//     post: "11000100101010110111"
// }, function (err, post) {
//     User.findOne({email: "bob@gmail.com"}, function (err, foundUser) {
//        if(err){
//            console.log(err);
//        } else {
//            foundUser.posts.push(post);
//            foundUser.save(function (err, data) {
//               if(err){
//                   console.log(err);
//               } else {
//                   console.log("SUCCESS");
//               }
//            });
//        }
//     });
// });

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });