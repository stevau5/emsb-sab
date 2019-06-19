const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Views/index.html");
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on Port: " + PORT));
