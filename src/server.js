const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors= require("cors");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://mvitor97:mvitor1500@cluster0.wvw2d.mongodb.net/outmail?retryWrites=true&w=majority",{
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


