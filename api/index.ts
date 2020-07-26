const express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.json({Hello: "World"});
});

app.listen(4200);
