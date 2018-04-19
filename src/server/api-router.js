const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkJwt = require('express-jwt');

function apiRouter(database) {
  const router = express.Router();

  router.use(
    checkJwt({ secret: process.env.JWT_SECRET }).unless({ path: '/api/login' })
  );

  router.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({ error: err.message });
    }
  });

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

  router.get('/boards', (req, res) => {
    const boardsCollection = database.collection('boards');
    boardsCollection.find({}).toArray((err, docs) => {
      return res.json(docs);
    });
  });

  router.post('/board', (req, res) => {
    const board = req.body;
    console.log(board);
    const boardsCollection = database.collection('boards');
    boardsCollection.insertOne(board, (err, r) => {
      if (err) {
        return res.status(500).json({ error: 'Error inserting new board.' });
      }

      console.log(r);
      const newRecord = r.ops[0];
      return res.status(201).json(newRecord);
    })
  })

  router.post('/login', (req, res) => {
    // return res.status(500).json('Error retrieving records');
    const user = req.body;
    console.log(user);
    const usersCollection = database.collection('users');

    usersCollection.findOne({ username: user.username }, (err, result) => {
      if (!result) {
        return res.status(404).json({ error: 'user not found' });
      }
      console.log(result);
      console.log('bcrypt : ', bcrypt.hashSync('gopi', 10));

      if (!bcrypt.compareSync(user.password, result.password)) {
        return res.status(401).json({ error: 'incorrect password' });
      }

      const payload = {
        username: result.username
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '4h' });

      return res.json({
        message: 'successfully authenticated',
        token: token,
        userid: result._id,
        user: result.username
      });
    })
  });


  return router;

}

module.exports = apiRouter;
