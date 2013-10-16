var mysql      = require('mysql'),
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'remote',
        password : 'test321',
    });


exports.index = function (req, res) {
    res.render("index");
}

exports.addProfession = function (req, res) {
   // TODO insert to db

   res.render("profile");
}

exports.addProfile = function (req, res) {

}

exports.activate = function (req, res) {

}
