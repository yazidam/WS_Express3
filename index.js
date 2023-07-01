const express = require("express");

const app = express();
app.use(express.json());
const users = [
  {
    id: "0",
    name: "slim",
    age: "25",
  },
  { id: "1", name: "ahmed", age: "24" },
  { id: "2", name: "mohamed", age: "20" },
  { id: "3", name: "ali", age: "18" },
];

app.get("/users", (req, res) => {
  res.send({ users });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  //   const { id1 } = req.params;
  const user = users.find((el) => el.id == id);
  return res.send(user);
});

app.post("/users/add", (req, res) => {
  const newUser = req.body;
  const newUserId = newUser.id;
  const existUser = users.find((el) => el.id == newUserId);
  if (existUser) return res.status(403).json({ msg: "user exist" });
  else {
    users.push(newUser);
    res.status(200);
    res.send({ msg: "new user added", newUser: newUser });
  }
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const existUser = users.find((el) => el.id == id);
  if (existUser) {
    usersList = users.filter((user) => user.id !== id);
    delete users[id];
    res.send({ msg: "new user list", usersList: usersList });
  } else {
    res.status(404);
    res.send({ msg: "user not found" });
  }
});

const port = 5000;
app.listen(port, () => console.log(`server run on ${port}`));
