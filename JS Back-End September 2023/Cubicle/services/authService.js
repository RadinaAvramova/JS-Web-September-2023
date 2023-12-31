const bcrypt = require('bcrypt');
const User = require('../models/User');

async function register(username, password) {
    const existing = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });

    if (existing) {
        throw new Error('Username is taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    User.create({
        username,
        hashedPassword,
    });

    return {
        username,
    };
}

async function login(username, password) {
    const user = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });

    if (!user) {
        throw new Error('Incorect username or password!');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        throw new Error('Incorect username or password!');
    }

    return {
        _id: user._id,
        username: user.username,
    };
}

module.exports = {
    login,
    register,
};