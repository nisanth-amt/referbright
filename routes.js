var user = require('./routes/user');

module.exports = function (app) {
    app.get('/', user.index);
    app.post('/profession', user.addProfession);
    app.post('/profile', user.addProfile);
    app.post('/activate', user.activate);
};

