const { Schema, model } = require("mongoose");

// both are equivalent to one another,
const CheckBoxSchema = new Schema({
  checkbox: { type: String, uniq: true },
});

const CheckBox = model("checkboxes", CheckBoxSchema);

module.exports = {
  CheckBox,
};
