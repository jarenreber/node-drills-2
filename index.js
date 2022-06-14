require("dotenv").config();
const { SERVER_PORT } = process.env;
const port = process.env.SERVER_PORT || 3035;
const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
const { getInfo, postInfo } = require("./controller");

app.use(cors());

app.get("/api/info", getInfo);
app.post("/api/info", postInfo);

app.listen(port, () => console.log(`Up to no good on ${port}`));
