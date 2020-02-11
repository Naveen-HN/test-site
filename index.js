let express = require("express");
let app = express();
var port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Hello world with Express and Nodemon"));

app.listen(port, function() {
  console.log("Running Resthub on port" + port);
});

let apiRoutes = require("./api-routes");
app.use("/api", apiRoutes);
let bodyParser = require("body-parser");

let mongoose = require("mongoose");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/resthub", { useNewUrlParser: true });

var db = mongoose.connection;
