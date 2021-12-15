const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors= require("cors");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const PORT = process.env.PORT || 3000;
mongoose.connect("https://data.mongodb-api.com/app/data-xmgsg/endpoint/data/beta",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify: false
});

mongoose.set("useCreateIndex",true);

module.exports = mongoose;

const server= express();
server.use(cors());
server.use(express.json());
server.use(routes);
server.use(express.urlencoded({ extended: true }));
server.listen(PORT);


