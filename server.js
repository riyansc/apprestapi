const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// Parse application json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Panggil routes
var routes = require("./router");
routes(app);

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
