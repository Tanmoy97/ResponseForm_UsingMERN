const dotenv = require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { json, urlencoded } = require("body-parser");
const PORT = 5000 || process.env.PORT;

const { db } = require("./database");
const { CheckBox } = require("./models/Checkbox");
const { Form } = require("./models/Form");

const app = express();

// middlewares
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

// entrypoint
app.get("/", async (req, res, next) => {
  try {
    const checkboxes = await CheckBox.find({});

    res.status(200).send({ checkboxes });
  } catch (error) {
    res.status(500).send({ error });
  }

  next();
});

app.get("/", async (req, res, next) => {
  try {
    const forms = await Form.find({});

    res.status(200).send({ forms });
  } catch (error) {
    res.status(500).send({ error });
  }

  next();
});

// listenser
app.listen(PORT, () => console.log(`server running on http:localhost:${PORT}`));

