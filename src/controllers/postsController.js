const { getData } = require("../data")

module.exports = {
  list: (req, res) => {
    const posts = getData("posts.json")
    return res.render('posts', {
      posts,
    })
  },
  detail: (req, res) => {
    const posts = getData("posts.json");
    const { post_id } = req.params;
    const post = posts.find((post) => post.id === +post_id);

    return res.render("post-detail", {
      ...post,
    });
  },
  add : (req,res) => {

  },
  create : (req,res) => {

  },
  edit : (req,res) => {

  },
  update : (req,res) => {

  },
  destroy : (req,res) => {

  },
}