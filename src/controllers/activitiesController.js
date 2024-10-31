const { getData } = require("../data")

module.exports = {
  list: (req, res) => {
    const activities = getData("activities.json")
    return res.render('activities', {
      activities,
    })
  },
  detail: (req, res) => {
    const activities = getData("activity.json");
    const { activity_id } = req.params;
    const activity = activities.find((activity) => activity.id === +activity_id);

    return res.render("activity-detail", {
      ...activity,
    });
  },
}
