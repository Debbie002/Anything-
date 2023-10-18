
const express = require("express");

const bodyParser = require("body-parser");


const app = express();
 const rout = require("./routes");

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 app.use(rout);

 app.get("/", (req, res) => {

    return res.json(shoppingLists);
 });





 app.listen(2100, () => {
    console.log("Server is listening on port 2100");
 });
