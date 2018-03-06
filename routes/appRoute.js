module.exports = (app) => {
    let appController = require('../controllers/appController'),
        config = require('../config/config').CONFIG_API

    // Route get, post, put...
    app.route('/')
        .get(appController.home)


    app.route('/upfilm')
        .get(appController.upfilm)
}