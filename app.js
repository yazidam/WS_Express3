const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "public/index.html");
});
const port = 4000;
app.listen(port, () => console.log(`server 2 run on ${port}`));
