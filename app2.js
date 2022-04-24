const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const app = express();
const expressHbs = require("express-handlebars");
const path = require('path');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.engine("hbs",expressHbs.engine({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname:"hbs"
}))

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use("/main", urlencodedParser, function (request, response) {
    response.render("main2.hbs");
});

app.get("/", urlencodedParser, function (request, response) {
    response.redirect("/main");
});

app.use(express.static(path.join(__dirname, '/views')));

app.listen(3000, function () {
    console.log("Сервер запущен. Порт 3000 sdfsd")
});
