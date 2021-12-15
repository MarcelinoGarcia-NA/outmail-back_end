const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors= require("cors");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const PORT = process.env.PORT || 3000;

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://mvitor97:mvitor1500@cluster0.wvw2d.mongodb.net/outmail?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




const server= express();
server.use(cors());
server.use(express.json());
server.use(routes);
server.use(express.urlencoded({ extended: true }));
server.listen(PORT);


