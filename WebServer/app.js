const express = require("express");
const hbs = require("hbs");

require('dotenv').config();
const port=process.env.PORT

const app = express();

//Handlebar

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

//servir contenido estatico
// app.use(express.static('public'))

app.use(express.static("PaginaCurso"));

app.get("/", function (req, res) {
    res.render("home", {
        nombre: "keyner",
        titulo: "prueba de node",
    });
});

app.get("/index", function (req, res) {
    res.render("home")
});

app.get("/generic", function (req, res) {
    res.render("generic");
});

app.get("/elements", function (req, res) {
    res.render("elements");
});

app.listen(port);
