const Session = {};

Session.signin =  function(req, res) {
  res.json('signed out');
}

Session.logout = function(req, res) {
  req.session.destroy(function (err) {
    res.json('session terminated');
  });
}

module.exports = Session;
