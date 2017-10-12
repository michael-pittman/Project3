import sessionController from "../controllers/session-controller.js";

module.exports = function (app, passport) {

  // Authentication Routing
  
  // logout route
  app.get('/logout', sessionController.logout);

  // authenticate user route
  // NOTE: determine react alternative for redirect
  app.post('/', passport.authenticate('local-signin'));

};
