const express = require('express');
const http = require('http')
app=express();
const server = http.createServer(app);
const port = process.env.port || 8080;
const path = require('path');
const bodyparser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;








app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
server.listen(port,()=>console.log(port))
const lib= require("./public/js/main.js");
const libapi= require("./public/js/fastapi.js");
const mongoose      =require('mongoose')
const fastcsv = require('csv-parser');




app.get("/",async function(request,response){
var resbody;
var url = 'mongodb+srv://yogesh:yogesh14@cluster0.eauui.mongodb.net/test'
await mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("fridge");
  //   //Find the first document in the customers collection:
  //   dbo.collection("items").findOne({}, function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //     resbody=result.Labels
  //     response.render('index',{body:resbody})
  //     db.close();
  //   });
  // });




});

app.get("/insert",function(request,response){
  res=lib.splitImage()
  console.log(res);
  if(res==0){
    response.json({ status: 'failed' });
  }else
  {
    response.json({ status: 'ok' });
  }

});
