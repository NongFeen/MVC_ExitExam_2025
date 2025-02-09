const userModel = require('../models/userModel');

//connect route and model together
exports.getAllUsers = (req, res) => {
    const users = userModel.getAllUsers();
    res.json(users); 
};

exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = userModel.getUserById(userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

