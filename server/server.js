const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8000
const db_name = "joke_db";


app.use(express.json(), express.urlencoded({ extended: true}));

require("./config/mongoose.config")(db_name);

require("./routes/jokes.routes")(app);

app.listen(port, () => console.log(`the server is running on port ${port}`));