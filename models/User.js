const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  pronoun: { type: String },
  name: { type: String, required: true },
  personNumber: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: Number, required: true },
  streetAddress_1: { type: String },
  streetAddress_2: { type: String },
  postalCode: { type: Number },
  city: { type: String },
  country: { type: String },
  about: { type: String },
  rating: { type: Number },
  password: { type: String, required: true }
}, {
  timestamps: true
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);