const express = require("express");
const data = require("./data.json");
const cors = require("cors");

const portNumber = 8000;

const app = express();

app.use(cors());

const getPokemons = (req, res) => {
  let result = [];

  if (req.query.type !== "All") {
    result = data.filter((elem) => elem.types.includes(req.query.type));
  } else {
    result = data;
  }

  if (!isNaN(parseInt(req.query.limit, 10))) result = result.slice(0, limit);

  res.json(result);
};

const getPokemon = (req, res) => {
  const id = parseInt(req.params.id, 10);

  const pokemon = data.find((elem) => elem.id === id);

  if (pokemon) {
    res.send(pokemon);
  } else {
    res.sendStatus(404);
  }
};

app.get("/pokemon", getPokemons);
app.get("/pokemon/:id", getPokemon);

app.listen(portNumber, () => console.log("Server is running 🚀"));
