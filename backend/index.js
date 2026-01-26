const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  let code = "<h1>Fruit Info</h1>";
  code += "<p>Fruit: apple</p>";
  code += "<p>Color: red</p>";
  res.send(code);
  //   res.send({
  //     fruit: 'apple',
  //     color: 'red'
  //   res.send('hello world');
});

app.get("/:username/:id", (req, res) => {
  const username = req.params.username;
  const id = req.params.id;
  res.send(`Hello, ${username}! Your ID is ${id}`);
});

app.get("/search",(req, res)=>{
  let {q} = req.query;
  if(!q){
    res.send("no search query provided");
    return;
  }
  res.send(`search results for: ${q}`);
})

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
