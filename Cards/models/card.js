const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const cardSchema = new Schema ({
  title: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  }
},{
  timestamps: true, 
});

module.exports = mongoose.model('Card', cardSchema);
