// const { json } = require("express");
// const express = require("express");
// const app = express();
// app.use(json);

// // const garrisons = require("./garrisons.json");

// app.get("/", (req, res) => {
//   res.send("Hello Wolrd");
// });

// app.listen(3000, () => console.log(`Listening on port ${port}...`));

const { json } = require("express");
const express = require("express");
const app = express();
app.use(json());

const data = require("./garrisons.json");

app.get("/api/garrisons", (req, res) => {
  res.send(data);
});

app.get("/api/garrisons/:id", (req, res) => {
  const garrison = data.garrisons.find(
    (item) => item.id === parseInt(req.params.id)
  );
  res.send(garrison);
});

app.get("/api/garrison/:id/resources", (req, res) => {
  const garrison = data.garrisons.find(
    (item) => item.id === parseInt(req.params.id)
  );
  const resources = garrison.resources;
  res.send(resources.basic);
});

app.get("/api/garrisons/:id/heroes/:heroId", (req, res) => {
  const garrison = data.garrisons.find(
    (item) => item.id === parseInt(req.params.id)
  );
  const hero = garrison.heroes.find(
    (item) => item.id === parseInt(req.params.heroId)
  );
  res.send(hero);
});

app.listen(3001, () => console.log(`Listening on port 3001...`));
