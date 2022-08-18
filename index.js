var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors')

var app = express();
app.use(cors({ origin: true }));

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "100mb" }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('*', (req, res) => {
    res.send('Hello World!')
})

const port = 2000;
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});