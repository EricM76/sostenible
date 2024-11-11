const { getData, storeData } = require("../data");
const Campaign = require("../models/Campaign.js");
const Category = require("../models/Category.js");
const Post = require("../models/Post.js");

module.exports = {
  activities: async (req, res) => {
    try {
      const category = await Category.findOne({
        name: "Actividad",
      });
      const activities = await Post.find({
        category: category.id,
      })
        .populate("category")
        .populate("campaign");
      return res.render("activities", { activities });
    } catch (error) {
      console.log(error);
      return res.redirect("/error");
    }
  },
  posts: async (req, res) => {
    try {
      const posts = await Post.find().populate("campaign").populate("category");
      return res.render("posts", {
        posts,
      });
    } catch (error) {
      console.log(error);
      return res.redirect("/error");
    }
  },
  detail: async (req, res) => {
    try {
      const { post_id } = req.params;

      const post = await Post.findById(post_id)
        .populate("campaign")
        .populate("category");

      return res.render("post-detail", {
        post,
      });
    } catch (error) {
      console.log(error);
      return res.redirect("/error");
    }
  },
  add: async (req, res) => {
    try {
      const categories = await Category.find();
      const campaigns = await Campaign.find();

      return res.render("post-add", {
        categories,
        campaigns,
      });
    } catch (error) {
      console.log(error);
      return res.redirect("/error");
    }
  },
  create: async (req, res) => {
    try {
      const { type, campaign, title, shortDescription, description, date } =
        req.body;

      const newPost = new Post({
        category: type,
        campaign,
        title: title.trim(),
        shortDescription: shortDescription.trim(),
        description: description.trim(),
        date,
        image: null,
      });

      const post = await newPost.save();
      return res.redirect(`/posts/${post.id}`);
    } catch (error) {
      console.log(error);
      return res.redirect("/error");
    }
  },
  edit: async (req, res) => {
    try {
      const { post_id } = req.params;
      const post = await Post.findById(post_id)
        .populate("campaign")
        .populate("category");

      const categories = await Category.find();
      const campaigns = await Campaign.find();

      return res.render("post-edit", {
        post,
        categories,
        campaigns,
      });
    } catch (error) {
      console.log(error);
      return res.redirect("/error");
    }
  },
  update: async (req, res) => {
    try {
      const { post_id } = req.params;
      const { type, campaign, title, shortDescription, description, date } =
        req.body;
      const postUpdated = await Post.findByIdAndUpdate(
        post_id,
        {
          title: title.trim(),
          shortDescription: shortDescription.trim(),
          description: description.trim(),
          date,
          category: type,
          campaign,
        },
        { new: true }
      );

      if (!postUpdated) throw new Error("ENTREPRENEURSHIP NOT FOUND");

      return res.redirect('/admin');
    } catch (error) {
      console.log(error);
      return res.redirect("/error");
    }
  },
  destroy: (req, res) => {
    const posts = getData("posts.json");
    const { post_id } = req.params;

    const postsModified = posts.filter((post) => post.id !== +post_id);

    storeData(postsModified, "posts.json");

    return res.render("admin", {
      posts: postsModified,
    });
  },
};
