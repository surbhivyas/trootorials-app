const apiService = require('services/apiService'),
    apiConfig = require('config/apiConfig'),
    logger = require('services/loggerService');

module.exports = function(app,passport) {
    require('controllers/authController')(app, passport);
    require('controllers/indexController')(app, passport);
    require('controllers/videoController')(app, passport);
};
