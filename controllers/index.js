const { User } = require("../models/index")

exports.getHome = async (req, res) => {
    try {
        const home = User.findAll();
        res.send(home);
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
}