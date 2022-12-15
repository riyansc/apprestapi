const bodyParser = require("body-parser");
const express = require("express");
const app = express();
var morgan = require("morgan");

// Parse application json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Panggil routes
var routes = require("./router");
routes(app);

// Daftarkan menu routes dari index
app.use('/auth', require("./middleware"));

app.listen(3001, () => {
  console.log(`Server started on port 3000`);
});
