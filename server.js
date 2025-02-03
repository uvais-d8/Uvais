const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const PORT = 3000;

// Set the view engine to hbs
app.set("view engine", "hbs");

// Define the views folder (optional if you want to customize)
app.set("views", "./views");

// Serve static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
