const express = require("express");
const router = express.Router("./routes/routes");

// Define routes
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/profile", (req, res) => {
  res.send("User Profile Page");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  res.json({ message: `Logged in as ${username}` });
});

// Export the router
module.exports = router;
