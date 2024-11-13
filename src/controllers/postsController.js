const { getData, storeData } = require("../data");
const Campaign = require("../models/Campaign.js");
const Category = require("../models/Category.js");
const Post = require("../models/Post.js");
const cloudinary = require('cloudinary').v2;
const { format } = require('date-fns');
const { es } = require('date-fns/locale');

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

        const currentDate = new Date();

        const futureActivities = activities.filter(activity => new Date(activity.date) > currentDate);
        const pastActivities = activities.filter(activity => new Date(activity.date) <= currentDate);
    
       futureActivities.forEach(activity => {
      activity.formattedDate = format(new Date(activity.date), "EEEE dd 'de' MMMM", { locale: es });
    });

    pastActivities.forEach(activity => {
      activity.formattedDate = format(new Date(activity.date), "EEEE dd 'de' MMMM", { locale: es });
    });
        return res.render("activities", {
          futureActivities,
          pastActivities,
        });
    } catch (error) {
      console.log(error);
      return res.redirect("/error");
    }
  },
  posts: async (req, res) => {
    try {
      const posts = await Post.find().sort({date : 1}).populate("campaign").populate("category");

      posts.forEach(post => {
        if (post.date) {
        post.formattedDate = format(new Date(post.date), "EEEE dd 'de' MMMM", { locale: es });
        }
      });

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
        let imageUrl = null;
        if (req.file) {
          const result = await cloudinary.uploader.upload(req.file.path);
          imageUrl = result.secure_url;
        }

      const newPost = new Post({
        category: type,
        campaign,
        title: title.trim(),
        shortDescription: shortDescription.trim(),
        description: description.trim(),
        date,
        image: imageUrl,
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
        let imageUrl = null;
        const existingPost = await Post.findById(post_id);
    if (!existingPost) throw new Error("POST NOT FOUND");

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url; 
    } else {
          imageUrl = existingPost.image;
        }

      const postUpdated = await Post.findByIdAndUpdate(
        post_id,
        {
          title: title.trim(),
          shortDescription: shortDescription.trim(),
          description: description.trim(),
          date,
          category: type,
          campaign,
          image: imageUrl
        },
        { new: true }
      );

      if (!postUpdated) throw new Error("POST NOT FOUND");

      return res.redirect('/admin');
    } catch (error) {
      console.log(error);
      return res.redirect("/error");
    }
  },
  destroy: async (req, res) => {
    try {
      const { post_id } = req.params;

      const postDeleted = await Post.findByIdAndDelete(post_id);
      if (!postDeleted) throw new Error("POST NOT FOUND");


      return res.redirect("/admin");

    } catch (error) {
      console.log(error);
      return res.redirect("/error");
    }



  
  },
};
