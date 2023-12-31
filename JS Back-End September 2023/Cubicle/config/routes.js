const aboutController = require('../controllers/aboutController.js');
const attachAccessoryController = require('../controllers/attachAccessoryController.js');
const createAccessoryController = require('../controllers/createAccessoryController.js');
const createCubeController = require('../controllers/createCubeController.js');
const defaultController = require('../controllers/defaultController.js');
const deleteController = require('../controllers/deleteController.js');
const detailsController = require('../controllers/detailsController.js');
const editController = require('../controllers/editController.js');
const homeController = require('../controllers/homeController.js');
const loginController = require('../controllers/loginController.js');
const logoutController = require('../controllers/logoutController.js');
const registerController = require('../controllers/registerController.js');
const { hasUser, isGuest } = require('../middlewares/guards.js');

module.exports = (app) => {
    app.use(homeController);

    app.use('/create', hasUser(), createCubeController);
    app.use('/create-accessory', hasUser(), createAccessoryController);
    app.use('/attach-accessory', hasUser(), attachAccessoryController);
    app.use('/about', aboutController);
    app.use('/details/', detailsController);
    app.use('/register', isGuest(), registerController);
    app.use('/login', isGuest(), loginController);
    app.use('/logout', logoutController);
    app.use('/delete/', hasUser(), deleteController);
    app.use('/edit/', hasUser(), editController);

    app.use('*', defaultController);
};