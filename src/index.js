const express = require("express");
const server = express();
const cors = require("cors");
const services = require("./services");
const db = require("./db");
require("dotenv").config();

const port = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());

server.use("/api", services);

db.sequelize.sync({ force: false }).then((result) => {
  server.listen(port, () => {
    console.info(" ✅  Server is running on port " + port);
  });
});
