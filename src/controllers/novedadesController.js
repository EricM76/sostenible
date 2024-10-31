const {getData} = require("../data")

module.exports = {
    lista : (req,res) => {
        const novedades = getData("novedades.json")
        return res.render('novedades', {
            novedades,
        })},
        detail: (req, res) => {
            const novedades = getData("novedades.json");
            const { novedad_id } = req.params;
            const novedad = novedades.find((novedad) => novedad.id === +novedad_id);
        
            return res.render("novedad-detail", {
              ...novedad,
            });
          },
}