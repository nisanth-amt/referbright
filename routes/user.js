var mysql = require('mysql'),
    DATABASE = 'referbright',
    connection = mysql.createConnection({
        port:3306,
        host: '192.168.2.2',
        user: 'remote',
        password: 'test123'
    });


exports.index = function (req, res) {
    res.render("index");
};

exports.addProfession = function (req, res) {
    // TODO insert to db
    connection.connect();
    connection.query('use ' + DATABASE);
    connection.query('insert into instructors (name, number) values ("' + req.body.name + '", "' + req.body.number + '")',
        function insertCb(err, results, fields) {
            if (err) throw err;

            res.render("profile");
            connection.end();
        });


};

exports.addProfile = function (req, res) {

};

exports.activate = function (req, res) {

};
