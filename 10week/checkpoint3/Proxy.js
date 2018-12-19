const port = process.argv[2] || 7979;
const express = require("express");
const cors = require("cors");
const app = express();
const facts = require("./facts.json");

app.use(cors());
app.get("/facts", (req, res, next) => res.json(facts));
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
