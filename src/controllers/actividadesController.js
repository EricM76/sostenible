const {getData} = require("../data")

module.exports = {
    lista : (req,res) => {
        const actividades = getData("actividades.json")
        return res.render('actividades', {
            actividades,
        })},
        detail: (req, res) => {
            const actividades = getData("actividades.json");
            const { actividad_id } = req.params;
            const actividad = actividades.find((actividad) => actividad.id === +actividad_id);
        
            return res.render("actividad-detail", {
              ...actividad,
            });
          },
}