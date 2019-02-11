var express = require('express');
// var fs = require('fs'); // deactivated
var mysql = require('mysql');
var router = express.Router();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  pass: "",
  database: "phone_book"
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const sql = "SELECT * FROM contacts";
    connection.query(sql, function (err, results) {
      if (err) throw err;
      console.log(results);
      res.json(results);
    })
  })
});
// res.send('respond with a resource'); deactivated when implementing db

// /contacts/delete?id=3
router.get('/delete', function (req, res, next) {
  var id = req.query.phone;

  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const sql = "SELECT * FROM contacts";;
    connection.query(sql, function (err, results) {
      if (err) throw err;
      console.log(results);
      // res.json({success: true});
      // TODO please redirect to agenda.html
      res.redirect('/agenda.html');
    })
  })

  // linii sterse cand am pus id in loc de phone

  // var content = fs.readFileSync('public/contacts.json')
  // var contacts = JSON.parse(content);

  // var remainingContacts = contacts.filter(function (contact) {
  //   return contact.phone != phone;
  // })
  // content = JSON.stringify(remainingContacts, null, 2);

  // fs.writeFileSync('public/contacts.JSON', content);


});

// /contacts/create
router.post('/create', function (req, res, next) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var phone = req.body.phone;
    const sql = `INSERT INTO contacts (id, firstName, lastName, phone) VALUES (NULL, '${firstName}', '${lastName}', '${phone}');`;
    connection.query(sql, function (err, results) {
      if (err) throw err;
      console.log(results);
      res.json({ success: true });
    })
  });
});


// /contacts/update
router.post('/update', function(req, res, next) {
  var id = req.query.id;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var phone = req.body.phone;

  pool.getConnection(function(err, connection) {
    if(err) throw err;
    const sql = `UPDATE contacts SET firstName='${firstName}', lastName='${lastName}', phone='${phone}' WHERE id=${id}`;
    connection.query(sql, function(err, results) {
      if(err) throw err;
      console.log(results);
      res.json({success: true});
    })
  })
});

module.exports = router;