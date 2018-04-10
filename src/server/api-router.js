const express = require('express');

function apiRouter(database) {
  const router = express.Router();

  router.get('/users', (req, res) => {
    const usersCollection = database.collection('users');
    usersCollection.find({}).toArray((err, docs) => {
      return res.json(docs);
    });
  });



  router.post('/users', (req, res) => {
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

  router.post('/login', (req, res) => {
    // return res.status(500).json('Error retrieving records');
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

  return router;

}

module.exports = apiRouter;
