const Session = {};

// =================================================
// SESSION SIGNIN
// =================================================
Session.signin =  function(req, res) {
  res.json('signed out');
}

// =================================================
// SESSION LOGOUT
// =================================================
Session.logout = function(req, res) {
  req.session.destroy(function (err) {
    res.json('session terminated');
  });
}

module.exports = Session;
