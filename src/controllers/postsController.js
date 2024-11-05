const { getData, storeData } = require("../data")

module.exports = {
  activities: (req, res) => {
    const posts = getData ("posts.json");
    const activities  = posts.filter(post => post.type === "activity");

    return res.render ("activities", { activities });
  },
  posts: (req, res) => {
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
 return res.render("post-add");
  },
  create : (req,res) => {
    const posts = getData("posts.json");

    const { type, campaign, title, shortDescription, description, date } = req.body;

    const newPost = {
      id: +posts[posts.length - 1].id + 1,
      type,
      campaign,
      title: title.trim(),
      shortDescription:  shortDescription.trim(),
      description: description.trim(),
      date,
      image: req.file ? `/images/${req.file.filename}` : "http://dummyimage.com/200x300.png/cc0000/ffffff",
    };
    posts.push(newPost);
  
      storeData(posts,'posts.json')
  
      //respuesta al cliente
      return res.redirect(`/posts/${newPost.id}`)
  },
  edit: (req, res) => {
    const posts = getData("posts.json");

    const {post_id} = req.params;

    const post = posts.find(post => post.id === +post_id)

    return res.render("post-edit",{
      post,
      id:post.id
    }
    );
  },
  update : (req,res) => {
    const posts = getData("posts.json");

    const { post_id } = req.params
    const {type, campaign, title,  shortDescription, description, date} = req.body


    const postsModified = posts.map(post => {
          if(post.id === +post_id){

              post = {
                ...post,
                type,
                campaign,
                title: title.trim(),
                shortDescription:  shortDescription.trim(),
                description: description.trim(),
                date,
                image: req.file ? `/images/${req.file.filename}` : post.image
              }
          }
          return post;
    })

    storeData(postsModified,'posts.json');

    return res.render('admin',{
      posts : postsModified
    })
  },
    destroy : (req,res) => {
      const posts = getData("posts.json");
      const {post_id} = req.params
  
      const postsModified = posts.filter(post => post.id !== +post_id);
  
      storeData(postsModified,'posts.json');
  
      return res.render('admin',{
        posts : postsModified
      })
    }
  };