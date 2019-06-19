const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Views/index.html");
  });

app.get("/gettingStarted", (req, res) => {
    res.sendFile(__dirname + "/Views/gettingStarted.html");
  });

app.get("/browse", (req, res) => {
    res.sendFile(__dirname + "/Views/browse.html");
  });

app.get("/paperwork", (req, res) => {
    res.sendFile(__dirname + "/Views/paperwork.html");
  });

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/Views/contact.html");
  });  






const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on Port: " + PORT));
