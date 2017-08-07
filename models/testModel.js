var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var testSchema = new Schema({
  username: {
    type: String,
    trim: true,
  },


  password: {
  	type: String, minlength: [4, "Enter a password of at least 4 letters"]
  },
  
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  }
});

var Test = mongoose.model("Test", testSchema);
module.exports = Test;

