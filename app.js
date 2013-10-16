var express = require("express"),
    engine = require('ejs-locals'),
    app = express();

app.configure(function () {
    // use ejs-locals for all ejs templates:
    app.engine('ejs', engine);

    app.set('views',__dirname + '/views');
    app.set('view engine', 'ejs'); // so you can render('index')


    app.use( express.cookieParser() );
    app.use(express.session({
        secret: 'TO5JNq46jv6kBPaYXJ6gnZt244N3Tx3A',
    }));
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
    app.use(app.router);

});      
/* Routes */
require('./routes')(app);
if (!module.parent.parent) {
    console.info('Listening ',process.env.PORT || 5000);
    app.listen(process.env.PORT || 5000);
}

