import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("Listagem de usuarios");

  res.json(["Diego", "Cleiton", "Danilo", "Daniel"]);
});

app.listen(3333);
