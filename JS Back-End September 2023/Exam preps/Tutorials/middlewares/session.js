const { verifyToken } = require('../services/userService.js');

module.exports = () => (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        try {
            const userData = verifyToken(token);

            req.user = userData;
        } catch (error) {
            res.clearCookie('token');
            return res.redirect('/auth/login');
        }
    }

    next();
};
