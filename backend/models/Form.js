const { Schema, model } = require("mongoose");

// both are equivalent to one another,
const FormSchema = new Schema({
  form: { type: String, uniq: true },
});

const Form = model("forms", FormSchema);

module.exports = {
  Form,
};