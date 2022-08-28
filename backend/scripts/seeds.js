//TODO: seeds script should come here, so we'll be able to put some data in our local env

require("../models/User");
require("../models/Item");
require("../models/Comment");

var mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

var User = mongoose.model("User");
var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");

let users = [];
let items = [];
let comments = [];

const seed = async () => {
  for (let i = 0; i < 100; i++) {
    var user = new User();

    user.username = `${i}`;
    user.email = `${i}@email.com`;
    user.setPassword(`${i}`);

    users.push(user);
  }
  users = await User.insertMany(users);

  for (let i = 0; i < 100; i++) {
    var item = new Item({ title: `${i}`, description: `${i}`, tagList: [] });
    item.seller = users[i]._id;
    items.push(item);
  }
  items = await Item.insertMany(items);
  for (let i = 0; i < 100; i++) {
    var comment = new Comment({ body: "nice" });
    comment.item = items[i]._id;
    comment.seller = users[i]._id;
    comments.push(comment);
  }
  comments = await Comment.insertMany(comments);
  mongoose.disconnect();
};

seed();
