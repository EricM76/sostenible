const path = require ('path')
const { getData, storeData } = require("../data");

module.exports = {
    hub : (req,res) => {
        const posts = getData("posts.json");
        return res.render('hubrecircular', {posts})},
}