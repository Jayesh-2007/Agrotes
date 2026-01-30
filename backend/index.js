const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

//setting view engine to the ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/hello",(req, res) =>{
  res.send("Hello!");
})

app.get("/rolldice",(req, res) =>{
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", {diceVal});
});

app.get("/:username/:id", (req, res) => {
  const username = req.params.username;
  const id = req.params.id;
  res.send(`Hello, ${username}! Your ID is ${id}`);
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("no search query provided");
    return;
  }
  res.send(`search results for: ${q}`);
});

app.get("/apple", (req, res) => {
  res.send("apple page");
});

app.get("/help", (req, res) => {
  res.send("help page");
});

app.post("/", (req, res) => {
  res.send("You sent a Post request");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
