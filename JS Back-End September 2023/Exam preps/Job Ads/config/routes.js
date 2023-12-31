const authController = require('../controllers/authController.js');
const homeController = require('../controllers/homeController.js');
const defaultController = require('../controllers/defaultController.js');
const adController = require('../controllers/adController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/ads', adController);
    app.use('*', defaultController);
};
