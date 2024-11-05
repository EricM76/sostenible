const path = require ('path')
const { getData, storeData } = require("../data");

module.exports = {
    planting : (req,res) => {
        const posts = getData("posts.json");
        return res.render('plantandofuturo', { posts })},
}