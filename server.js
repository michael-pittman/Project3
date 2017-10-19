const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Import routes and give the server access to them.
// =======================================================
const sessionRoutes = require("./routes/session-routes.js");
const userRoutes = require("./routes/user-routes.js");

app.use("/user", userRoutes);
app.use("/session", sessionRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Mongoose Connection
// =======================================================
mongoose.connect("mongod://loclahost/avocadotoast_db");
const db = mongoose.connection;
// Mongoose Errors
db.on("error", error => console.log(`Mongoose Error: ${error}`));
// On success db login
db.on("open", () => console.log("Mongoose connection successful."));

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
