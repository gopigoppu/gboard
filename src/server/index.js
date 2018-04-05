const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


require('dotenv').config();

let database;

MongoClient.connect(process.env.DB_CONN, (err, db) => {
  console.log('connected to mongodb...');

  app.listen(3000, () => {
    database = db;
    console.log('listening on port 3000...');
  })
});


app.get('/api/users', (req, res) => {
  const usersCollection = database.collection('users');

  usersCollection.find({}).toArray((err, docs) => {
    return res.json(docs);
  });
});



app.post('/api/users', (req, res) => {
  const user = req.body;
  const usersCollection = database.collection('users');

  usersCollection.insertOne(user, (err, r) => {
    if (err) {
      return res.status(500).json({ error: 'Error inserting new record.' });
    }

    console.log(r);
    const newRecord = r.ops[0];
    return res.status(201).json(newRecord);
  })
});

app.post('/api/login', (req, res) => {
  const userData = req.body;
  console.log(userData);
  const usersCollection = database.collection('users');

  usersCollection.find({}).toArray((err, docs) => {
    //return res.status(201).json(docs);
    for (item of docs) {
      if ((item.username === userData.username) && (item.password === userData.password)) {
        return res.status(201).json('success');
      } else {
        return res.status(201).json("fail");
      }
    }
  });


});

