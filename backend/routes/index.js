var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
//instead of a Database, will use a variable called users for simplicity

users = []
users.push({
  username: "youssef",
  password: "password123",
  firstname: "Youssef",
  lastname: "Emad",
  email: "youssefeabd@gmail.com",
  phone: "01144160646"
});
router.post('/users/login', function (req, res, next) {
  var token = ""
  const body = req.body
  for (let entery in users) {
    if (users[entery].username == body.username && users[entery].password == body.password) {
      token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), issuer: "infinity-e-task", iat: Math.floor(Date.now() / 1000) - 30,id:entery }, 'secret');
      break;
    }
  }
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify(
    {
      token: token
    }
  ));
});

router.post('/users/register', function (req, res, next) {
  const body = req.body
  users.push(
    {
      username: body.username,
      password: body.password,
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      phone: body.phone
    })
  const token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), issuer: "infinity-e-task", iat: Math.floor(Date.now() / 1000) - 30,id:users.length-1}, 'secret');
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify(
    {
      token: token
    }
  ));
});

module.exports = router;
