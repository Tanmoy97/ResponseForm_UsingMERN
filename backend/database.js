const mongoose = require("mongoose");
const { MONGODB_URI } = require("./.env.json");

const db = mongoose.connect(
  MONGODB_URI,
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  },
  (err) =>
    err
      ? console.error({ err })
      : console.log(`### MongoDB Connection established successfully...`)
);

module.exports = {
  db,
};
