var express = require('express');
var bodyParser = require('body-parser');


var user = require('./Routes/userRoute');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT,PATCH, DELETE");
    next();
});


// app.set('view engine', 'ejs'); // set up ejs for templating
// or app.use(cors())

app.use('/', user);
app.use('/login', user);


app.listen(3000, "127.0.0.1", function () {
    console.log('server started at port num - 3000');
});