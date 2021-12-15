// import all libraries
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

// setup connections
mongoose.connect(process.env.MONGODB_URL) 
    .then(() => console.log("Connected"))
    .catch(() => console.log("Couldn't connect"));

// setup middlewares 
app.use(cors()); // CORS => Cross origin resource sharing; // share frontend <-> backend
app.use(express.json());

// setup routes
app.use("/api/auth", require("./routes/user"));
app.use("/api/properties", require('./routes/property'));

// start listening on server
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running on port", port);
})
