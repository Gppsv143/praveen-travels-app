const User = require('../models/User');

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    
    try {
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: 'Error creating user' });
    }
};
