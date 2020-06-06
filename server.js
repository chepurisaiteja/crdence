const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, {
    useUnifiedTopology: true
  },
  function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
 
  app.get('/', (req, res) => {
    dbo.collection('movies1').find().toArray()
      .then(results => {
        res.render('index.ejs', { movies1: results })
        
      
      })
      .catch(error=>console.error(error))
  })
});
app.listen(4000, function() {
  console.log('listening on 4000')
})
// 5eda6372ff6c8c61fccda59d



